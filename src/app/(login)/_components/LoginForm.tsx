'use client';
import React, { Fragment, useState } from 'react'
import { loginStyles } from '@/styles/login.styles';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { LoginCredentials, LoginErrors } from '@/types/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { loginUser } from '@/redux/slices/authSlice';
import toast from 'react-hot-toast';
import Cookie from '@/utils/cookie';

const INITIAL_STATE = { email: '', password: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState<LoginCredentials>(INITIAL_STATE);
    const [errors, setErrors] = useState<LoginErrors>(INITIAL_STATE);

    const dispatch = useDispatch<AppDispatch>();

    const validateField = (name: string, value: string): string => {
        if (!value) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        
        if (name === 'email' && !EMAIL_REGEX.test(value)) {
            return 'Invalid email format';
        }
        if (name === 'password' && value.length < MIN_PASSWORD_LENGTH) {
            return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
        }
        return '';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
        
        const error = validateField(name, value);
        if (!error) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateForm = (): boolean => {
        const newErrors = {
            email: validateField('email', credentials.email),
            password: validateField('password', credentials.password)
        };
        setErrors(newErrors);
        return !newErrors.email && !newErrors.password;
    };

    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const resultAction = await dispatch(loginUser(credentials));
            if (loginUser.fulfilled.match(resultAction)) {
                Cookie.set('jwt', resultAction.payload.token);
                router.push('/dashboard');
                toast.success('Login successful!');
            } else {
                toast.error('Invalid credentials. Please try again.');
            }
        } catch (error) {
            toast.error('Network error occurred. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Box component="form" noValidate onSubmit={handleLogin}>
                {['email', 'password'].map((field) => (
                    <TextField
                        key={field}
                        margin="normal"
                        required
                        fullWidth
                        name={field}
                        label={field === 'email' ? 'Email Address' : 'Password'}
                        type={field === 'password' ? 'password' : 'text'}
                        error={!!errors[field as keyof LoginErrors]}
                        helperText={errors[field as keyof LoginErrors]}
                        value={credentials[field as keyof LoginCredentials]}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={`Enter your ${field}`}
                        autoComplete={field === 'email' ? 'username' : 'current-password'}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{
                            autoCapitalize: 'none',
                            autoCorrect: 'off'
                        }}
                    />
                ))}
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={loginStyles.button}
                >
                    {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Sign in'}
                </Button>
            </Box>
        </Fragment>
    );
};

export default LoginForm;
