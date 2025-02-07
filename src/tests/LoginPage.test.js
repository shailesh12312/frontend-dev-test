import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LoginPage from '@/app/(login)/login/page';
import LoginForm from '@/app/(login)/_components/LoginForm';
import authReducer from '@/redux/slices/authSlice';

// Test store setup
const mockStore = configureStore({
  reducer: { auth: authReducer }
});

describe('Login Components', () => {

  describe('LoginForm Fields', () => {
    beforeEach(() => {
      render(
        <Provider store={mockStore}>
          <LoginForm />
        </Provider>
      );
    });

    it('renders form fields correctly', () => {
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('shows validation error for invalid email', () => {
      const emailInput = screen.getByLabelText(/email address/i);
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.blur(emailInput);
      
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    });

  });
});
