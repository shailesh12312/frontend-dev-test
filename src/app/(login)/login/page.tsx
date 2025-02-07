"use client";
import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { loginStyles } from '@/styles/login.styles';
import dynamic from 'next/dynamic';
const LoginForm = dynamic(() => import('../_components/LoginForm'), { ssr: false });

const LoginPage = () => {
  return (
    <Box sx={loginStyles.wrapper}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={0} sx={loginStyles.paper}>
          <Box sx={loginStyles.logoWrapper}>
            <Box sx={loginStyles.logoBox}>
              <Image
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24'%3E%3Cpath fill='%230ea5e9' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E"
                alt="Logo"
                width={50}
                height={50}
              />
            </Box>
            <Typography variant="h4" sx={loginStyles.title}>
              Welcome
            </Typography>
            <Typography sx={loginStyles.subtitle}>
              Enter your credentials to access your account
            </Typography>
          </Box>
          <LoginForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage; 