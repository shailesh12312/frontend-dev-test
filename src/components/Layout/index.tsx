"use client";
import Sidebar from '@/components/Sidebar';
import dynamic from 'next/dynamic';
const Box = dynamic(() => import('@mui/material/Box'), { ssr: false });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 0, sm: 3 },
          marginTop: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
