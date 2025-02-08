import { Theme } from '@mui/material';

export const sidebarStyles = {
  container: {
    display: 'flex'
  },
  drawer: (theme: Theme, DRAWER_WIDTH: number) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      boxSizing: 'border-box',
      background: 'linear-gradient(180deg, #2C3E50 0%, #34495E 100%)',
      color: '#ECF0F1',
      borderRight: 'none',
      zIndex: theme.zIndex.appBar - 1
    }
  }),
  headerBox: {
    p: 2, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  avatarContainer: {
    display: 'flex', 
    alignItems: 'center', 
    gap: 1
  },
  avatar: {
    width: 32, 
    height: 32
  },
  appTitle: {
    fontWeight: 600
  },
  logoutButton: (theme: Theme) => ({
    borderRadius: 1,
    bgcolor: theme.palette.error.main,
    '&:hover': { 
      bgcolor: theme.palette.error.dark 
    },
    cursor: 'pointer'
  }),
  divider: {
    borderColor: 'rgba(255, 255, 255, 0.1)'
  },
  menuList: {
    px: 2
  },
  menuItem: {
    borderRadius: 1,
    mb: 0.5,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(236, 240, 241, 0.1)',
      transform: 'translateX(3px)'
    }
  },
  menuIcon: {
    color: 'white', 
    minWidth: 40
  },
  appBar: (theme: Theme, DRAWER_WIDTH: number, isMobile: boolean) => ({
    width: `calc(100% - ${isMobile ? 0 : DRAWER_WIDTH}px)`,
    ml: isMobile ? 0 : `${DRAWER_WIDTH}px`,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#2C3E50',
    boxShadow: '0 2px 12px rgba(44, 62, 80, 0.1)'
  }),
  toolbar: {
    justifyContent: 'space-between'
  },
  mobileMenuButton: {
    mr: 2
  }
}; 