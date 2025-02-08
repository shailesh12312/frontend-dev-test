"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage, setRowsPerPage } from '@/redux/slices/productSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { Box, Typography, Card, TableBody, TableCell, TableHead, TableRow, TablePagination, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { dashboardTableStyles as styles } from '@/styles/DashboardTable.styles';
import { Product } from '@/types/product';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MobileCard from './MobileCard';
import RenderTableRow from './RenderTableRow';

const DynamicTable = dynamic(
  () => import('@mui/material').then((mod) => mod.Table),
  { ssr: false }
);

const DynamicTableContainer = dynamic(
  () => import('@mui/material').then((mod) => mod.TableContainer),
  { ssr: false }
);

const TableHeader = () => (
  <TableHead>
    <TableRow sx={styles.tableHeaderRow}>
      {['Id', 'Image', 'Title', 'Price', 'Category', 'Brand', 'Model', 'Color', 'Discount'].map((header) => (
        <TableCell key={header} sx={styles.tableHeaderCell}>
          {header}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default function DashboardTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, currentPage, rowsPerPage } = useSelector(
    (state: RootState) => state.products
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage + 1, limit: rowsPerPage }));
  }, [dispatch, currentPage, rowsPerPage]);

  const handleChangePage = (_: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
  };

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

      {loading ? (
        <Box sx={styles.loaderWrapper}>
          <CircularProgress size={30} thickness={4} />
        </Box>
      ) : isMobile ? (
        <Box sx={styles.mobileCardsWrapper}>
          {items.map((product) => (
            <MobileCard key={product.id} product={product as Product} />
          ))}
        </Box>
      ) : (
        <Box sx={styles.tableWrapper}>
          <DynamicTableContainer sx={styles.tableContainer}>
            <DynamicTable stickyHeader>
              <TableHeader />
              <TableBody>
                {items.map((product) => RenderTableRow(product as Product))}
              </TableBody>
            </DynamicTable>
          </DynamicTableContainer>
        </Box>
      )}

      <Box sx={styles.paginationWrapper}>
        <TablePagination
          component="div"
          count={100}
          page={currentPage}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          sx={styles.pagination}
        />
      </Box>
    </Card>
  );
}
