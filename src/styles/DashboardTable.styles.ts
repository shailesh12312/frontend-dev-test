import { SxProps, Theme } from '@mui/material';

type Styles = {
  [key: string]: SxProps<Theme>;
};

export const dashboardTableStyles: Styles = {
  card: {
    p: 2,
    borderRadius: 2,
    background: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  headerBox: {
    mb: 3
  },
  tableWrapper: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 1
  },
  tableContainer: {
    minHeight: '400px'
  },
  tableHeaderRow: {
    bgcolor: 'background.paper',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  },
  tableHeaderCell: {
    color: 'primary.main', 
    fontWeight: 700,
    fontSize: '0.875rem',
    py: 2,
    whiteSpace: 'nowrap'
  },
  tableRow: {
    '&:hover': {
      bgcolor: 'grey.50',
      '& td': { color: 'primary.main' }
    },
    '& td': { 
      py: 1.5,
      transition: 'all 0.2s'
    }
  },
  idCell: {
    width: '5%',
    color: 'text.secondary'
  },
  imageCell: {
    width: '10%'
  },
  productImage: {
    width: 55,
    height: 55,
    objectFit: 'contain',
    borderRadius: '8px',
    p: 0.5,
    bgcolor: 'grey.50'
  },
  titleCell: {
    width: '25%',
    fontWeight: 500,
    fontSize: '0.875rem',
    cursor: 'pointer',
    '&:hover': { color: 'primary.main' }
  },
  priceCell: {
    width: '10%'
  },
  priceBox: {
    display: 'flex',
    gap: 1,
    alignItems: 'center'
  },
  discountBadge: {
    bgcolor: 'error.lighter',
    color: 'error.main',
    px: 1,
    py: 0.5,
    borderRadius: '12px',
    fontWeight: 600
  },
  categoryBadge: {
    bgcolor: 'primary.lighter',
    color: 'primary.main',
    py: 0.5,
    px: 1.5,
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    display: 'inline-flex'
  },
  brandCell: {
    width: '10%',
    color: 'text.secondary',
    textTransform: 'capitalize'
  },
  modelCell: {
    width: '10%',
    color: 'text.secondary'
  },
  colorBadge: {
    bgcolor: 'grey.100',
    px: 1.5,
    py: 0.5,
    borderRadius: '12px',
    fontSize: '0.75rem',
    color: 'text.secondary',
    textTransform: 'capitalize',
    display: 'inline-flex'
  },
  discountCell: {
    width: '10%'
  },
  discountText: {
    color: 'error.main',
    fontWeight: 600,
    fontSize: '0.875rem'
  },
  paginationWrapper: {
    borderTop: '1px solid',
    borderColor: 'grey.200',
    bgcolor: 'background.paper',
    mt: 1
  },
  pagination: {
    '.MuiTablePagination-select': {
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'grey.300',
      py: 0.5
    },
    '.MuiTablePagination-displayedRows': {
      color: 'text.secondary',
      fontWeight: 500
    }
  }
} as const; 