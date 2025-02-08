import React from 'react'
import DashboardTable from '../_components/DashboardTable';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { dashboardTableStyles as styles } from '@/styles/DashboardTable.styles';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <Card sx={styles.card}>
      <Box sx={styles.headerBox}>
        <Typography variant="h5" fontWeight={600} color="text.primary">
          Product Inventory
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your products, stock levels and pricing
        </Typography>
      </Box>
      <DashboardTable/>
    </Card>
  )
}
