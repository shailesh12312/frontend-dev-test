import { Button, Box, Typography } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <Button 
        variant="outlined"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        size="small"
      >
        Previous
      </Button>
      
      <Typography variant="body2">
        Page {currentPage} of {totalPages}
      </Typography>
      
      <Button
        variant="outlined"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        size="small"
      >
        Next
      </Button>
    </Box>
  );
} 