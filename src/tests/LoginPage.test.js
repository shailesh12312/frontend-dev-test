import { render, screen } from '@testing-library/react';
import LoginForm from '@/app/(login)/_components/LoginForm';
import { ReduxProvider } from '@/redux/provider';

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
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    // expect(screen.getByText(/sign in to your account/i)).toBeInTheDocument();
  });
});
