"use client";
import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage, setRowsPerPage } from '@/redux/slices/productSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { Box, Typography, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const DynamicTable = dynamic(
  () => import('@mui/material').then((mod) => mod.Table),
  { ssr: false }
);

const DynamicTableContainer = dynamic(
  () => import('@mui/material').then((mod) => mod.TableContainer),
  { ssr: false }
);

export default function DashboardTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, currentPage, rowsPerPage } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage + 1, limit: rowsPerPage }));
  }, [dispatch, currentPage, rowsPerPage]);

  const handleChangePage = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    dispatch(setRowsPerPage(newRowsPerPage));
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card sx={{
        p: 3,
        borderRadius: 3,
        background: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.06)',
        position: 'relative'
      }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" color="primary.main">
            Product Inventory
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Manage your products, stock levels and pricing
          </Typography>
        </Box>

        <Box sx={{ width: '100%', overflow: 'auto' }}>
          <DynamicTableContainer sx={{ minHeight: '400px' }}>
            <DynamicTable>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Brand</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ height: '320px' }}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>
                        <img 
                          src={product.image}
                          alt={product.title} style={{ width: 50 }}
                          onError={(e) => {
                            e.currentTarget.src = '/assets/not-found.png';
                          }}
                        />
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </DynamicTable>
          </DynamicTableContainer>
          <TablePagination
            component="div"
            count={100}
            page={currentPage}
            onPageChange={(_, newPage) => handleChangePage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => handleChangeRowsPerPage(parseInt(event.target.value, 10))}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Card>
    </Suspense>
  );
}
