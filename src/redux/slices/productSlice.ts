import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/axiosInstance';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, limit }: { page: number; limit: number }) => {
    const response = await axiosInstance.get(`/api/products?page=${page}&limit=${limit}`);
    return response.data;
  }
);

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 0,
  totalPages: 0,
  rowsPerPage: 10
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
      state.currentPage = 0;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.totalPages = Math.ceil(action.payload.products.length / state.rowsPerPage);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setRowsPerPage, setCurrentPage } = productSlice.actions;
export default productSlice.reducer; 