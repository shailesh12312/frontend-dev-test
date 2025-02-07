import { Box } from '@mui/material';
import Sidebar from '../Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
