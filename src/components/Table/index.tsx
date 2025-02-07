import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, TablePagination, useTheme, useMediaQuery,
  Chip, Box
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
    if (column.id === 'status') {
      return (
        <Chip 
          label={value}
          color={getStatusColor(value) as any}
          size="small"
          sx={{ minWidth: 85 }}
        />
      );
    }
    if (column.id === 'progress') {
      return (
        <Box sx={{ 
          backgroundColor: '#f0f0f0',
          borderRadius: 1,
          p: 0.5,
          width: 100
        }}>
          <Box sx={{
            width: value,
            height: 6,
            borderRadius: 1,
            backgroundColor: theme.palette.primary.main
          }} />
        </Box>
      );
    }
    return value;
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