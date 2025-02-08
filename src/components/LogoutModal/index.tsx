import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Cookie from '@/utils/cookie';
import { logoutStyles as styles } from '@/styles/logoutModal.styles';

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
}

const LogoutModal = ({ open, onClose }: LogoutModalProps) => {
  const router = useRouter();

  const handleLogout = () => {
    Cookie.delete('jwt');
    router.push('/login');
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      sx={styles.dialog}
    >
      <DialogTitle sx={styles.dialogTitle}>
        Confirm Logout
      </DialogTitle>
      <DialogContent sx={styles.content}>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Are you sure you want to logout?
        </Typography>
      </DialogContent>
      <DialogActions sx={styles.actions}>
        <Button 
          variant="outlined" 
          onClick={onClose}
          sx={styles.button}
        >
          Cancel
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleLogout}
          sx={styles.button}
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutModal; 