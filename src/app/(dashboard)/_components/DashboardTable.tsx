"use client";
import React from 'react';
import { DataTable } from '@/components/Table';
import { Box, Typography, Card } from '@mui/material';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Project Name' },
  { id: 'status', label: 'Status' },
  { id: 'progress', label: 'Progress' },
  { id: 'date', label: 'Due Date' },
  { id: 'assignee', label: 'Assignee' }
];

const mockData = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'Active',
    progress: '75%',
    date: '2024-03-20',
    assignee: 'John Doe'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'Pending',
    progress: '45%',
    date: '2024-03-21',
    assignee: 'Jane Smith'
  },
  {
    id: '3',
    name: 'Database Migration',
    status: 'Completed',
    progress: '100%',
    date: '2024-03-22',
    assignee: 'Mike Johnson'
  },
  {
    id: '4',
    name: 'API Integration',
    status: 'On Hold',
    progress: '30%',
    date: '2024-03-23',
    assignee: 'Sarah Wilson'
  }
];

export const DashboardTable = () => {
  return (
    <Card sx={{
      p: 3,
      borderRadius: 2,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">Welcome to Dashboard</Typography>
        <Typography variant="body2" color="text.secondary">
          Track all your project statuses and progress
        </Typography>
      </Box>

      <Box sx={{
        width: '100%',
        overflow: 'auto',
        '& .MuiPaper-root': {
          boxShadow: 'none'
        }
      }}>
        <DataTable
          columns={columns}
          rows={mockData}
        />
      </Box>
    </Card>
  );
};
