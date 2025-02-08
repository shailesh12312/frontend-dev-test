"use client";
import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage, setRowsPerPage } from '@/redux/slices/productSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { Box, Typography, Card, TableBody, TableCell, TableHead, TableRow, TablePagination, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { dashboardTableStyles as styles } from '@/styles/DashboardTable.styles';
import { Product } from '@/types/product';

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

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage + 1, limit: rowsPerPage }));
  }, [dispatch, currentPage, rowsPerPage]);

  const handleChangePage = (_: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
  };

  const renderTableRow = (product: Product) => (
    <TableRow key={product.id} sx={styles.tableRow}>
      <TableCell sx={styles.idCell}>{product.id}</TableCell>
      <TableCell sx={styles.imageCell}>
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={styles.productImage}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = '/assets/not-found.png';
          }}
        />
      </TableCell>
      <TableCell sx={styles.titleCell}>{product.title}</TableCell>
      <TableCell sx={styles.priceCell}>
        <Box sx={styles.priceBox}>
          <Typography sx={{ fontWeight: 600 }}>
            ${product.price}
          </Typography>
          {product.discount > 0 && (
            <Typography variant="caption" sx={styles.discountBadge}>
              -{product.discount}%
            </Typography>
          )}
        </Box>
      </TableCell>
      <TableCell sx={styles.categoryCell}>
        <Box sx={styles.categoryBadge}>{product.category}</Box>
      </TableCell>
      <TableCell sx={styles.brandCell}>{product.brand}</TableCell>
      <TableCell sx={styles.modelCell}>{product.model}</TableCell>
      <TableCell>
        <Box sx={styles.colorBadge}>{product.color}</Box>
      </TableCell>
      <TableCell sx={styles.discountCell}>
        {product.discount > 0 ? (
          <Typography sx={styles.discountText}>
            {product.discount}% OFF
          </Typography>
        ) : (
          <Typography sx={{ color: 'text.disabled' }}>-</Typography>
        )}
      </TableCell>
    </TableRow>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card sx={styles.card}>
        <Box sx={styles.headerBox}>
          <Typography variant="h5" fontWeight={600} color="text.primary">
            Product Inventory
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your products, stock levels and pricing
          </Typography>
        </Box>

        <Box sx={styles.tableWrapper}>
          <DynamicTableContainer sx={styles.tableContainer}>
            <DynamicTable stickyHeader>
              <TableHeader />
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center" sx={{ height: '200px' }}>
                      <CircularProgress size={30} thickness={4} />
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((product) => renderTableRow(product as Product))
                )}
              </TableBody>
            </DynamicTable>
          </DynamicTableContainer>
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
        </Box>
      </Card>
    </Suspense>
  );
}
