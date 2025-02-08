import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, TablePagination, useTheme, useMediaQuery,
  Chip, Box, Typography
} from '@mui/material';
import { useState } from 'react';

interface Column {
  id: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
}

const getStatusColor = (status: string) => {
  const statusMap: { [key: string]: string } = {
    'Active': 'success',
    'Pending': 'warning',
    'Completed': 'info',
    'On Hold': 'error'
  };
  return statusMap[status] || 'default';
};

export const DataTable = ({ columns, rows }: DataTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderCellContent = (column: Column, value: any) => {
    switch (column.id) {
      case 'image':
        return (
          <Box
            component="img"
            src={value}
            alt="Product"
            sx={{
              width: 50,
              height: 50,
              borderRadius: 1,
              objectFit: 'cover',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        );
      case 'status':
        return (
          <Chip 
            label={value}
            color={
              value === 'In Stock' ? 'success' : 
              value === 'Low Stock' ? 'warning' : 'error'
            }
            variant="outlined"
            size="small"
            sx={{ minWidth: 90 }}
          />
        );
      case 'price':
        return (
          <Typography color="primary.main" fontWeight="medium">
            {value}
          </Typography>
        );
      case 'rating':
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography color="warning.main">{value}</Typography>
            <Typography color="warning.main" fontSize="small">★</Typography>
          </Box>
        );
      case 'sales':
        return (
          <Typography color="success.main" fontWeight="medium">
            {value}
          </Typography>
        );
      default:
        return value;
    }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column.id} 
                  sx={{ 
                    fontWeight: 'bold',
                    display: isMobile ? 'none' : 'table-cell',
                    backgroundColor: theme.palette.background.default
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow 
                  hover 
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {columns.map((column) => (
                    <TableCell 
                      key={column.id} 
                      sx={{
                        display: isMobile ? 'block' : 'table-cell',
                        '&:before': {
                          content: isMobile ? `"${column.label}: "` : 'none',
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      {renderCellContent(column, row[column.id])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};