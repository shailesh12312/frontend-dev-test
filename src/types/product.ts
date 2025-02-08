export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  rowsPerPage: number;
}

export interface FetchProductsParams {
  page: number;
  limit: number;
} 