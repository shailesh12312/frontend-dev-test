import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '@/app/(login)/_components/LoginForm';
import { ReduxProvider } from '@/redux/provider';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    };
  }
}));

describe('LoginForm', () => {
  const renderLoginForm = () => {
    return render(
      <ReduxProvider>
        <LoginForm />
      </ReduxProvider>
    );
  };

  it('should render login form with all required fields', () => {
    renderLoginForm();
    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should show validation errors for empty fields', async () => {
    renderLoginForm();
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    
    fireEvent.click(submitButton);
    
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  it('should show error for invalid email format', async () => {
    renderLoginForm();
    const user = userEvent.setup();
    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    
    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);
    
    expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });

  it('should show error for short password', async () => {
    renderLoginForm();
    const passwordInput = screen.getByLabelText(/password/i);
    
    await userEvent.type(passwordInput, '12345');
    fireEvent.blur(passwordInput);
    
    expect(await screen.findByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  it('should show loading state during form submission', async () => {
    renderLoginForm();
    const user = userEvent.setup();
    
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
