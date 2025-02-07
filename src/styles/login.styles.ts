import { styled } from '@mui/material/styles';
import { Box, Paper, Button } from '@mui/material';

export const Wrapper = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(120deg, #f6f9fc 0%, #eef2f7 100%)',
  padding: '16px',
  '@media (min-width: 600px)': {
    padding: '32px'
  }
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: 16,
  boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)'
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5)
  }
}));

export const loginStyles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg, #f6f9fc 0%, #eef2f7 100%)',
    padding: { xs: 2, sm: 4 }
  },
  paper: {
    width: '100%',
    p: { xs: 3, sm: 4, md: 5 },
    background: 'white',
    borderRadius: 2,
    boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)'
    }
  },
  logoWrapper: {
    mb: 4,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoBox: {
    background: '#f8fafc',
    p: 2.5,
    borderRadius: '12px',
    mb: 3,
    '& img': {
      filter: 'hue-rotate(10deg)'
    }
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2rem' },
    fontWeight: 600,
    color: '#1a365d',
    mb: 1
  },
  subtitle: {
    color: '#64748b',
    fontSize: '0.95rem',
    mb: 3
  },
  textField: {
    mb: 2,
    '& .MuiOutlinedInput-root': {
      borderRadius: 1.5,
      backgroundColor: '#f8fafc',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#f1f5f9'
      },
      '& fieldset': {
        borderColor: '#e2e8f0'
      },
      '&:hover fieldset': {
        borderColor: '#94a3b8'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0ea5e9'
      }
    },
    '& .MuiInputLabel-root': {
      color: '#64748b'
    }
  },
  button: {
    mt: 3,
    mb: 2,
    height: 48,
    borderRadius: 1.5,
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    background: 'linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)',
    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: 'linear-gradient(90deg, #0284c7 0%, #1e40af 100%)',
      boxShadow: '0 6px 16px rgba(14, 165, 233, 0.35)',
      transform: 'translateY(-1px)'
    }
  },
  alert: {
    mb: 3,
    borderRadius: 1.5,
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    '& .MuiAlert-icon': {
      color: '#dc2626'
    }
  }
};

export const StyledButton = styled(Button)({
  marginTop: '24px',
  marginBottom: '16px',
  height: 48,
  borderRadius: 12,
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  background: 'linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)',
  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'linear-gradient(90deg, #0284c7 0%, #1e40af 100%)',
    boxShadow: '0 6px 16px rgba(14, 165, 233, 0.35)',
    transform: 'translateY(-1px)'
  }
}); 