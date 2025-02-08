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
  },
  mobileCard: {
    m: { xs: 1, sm: 2 },
    borderRadius: 3,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'grey.100',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
      borderColor: 'primary.light',
    },
  },
  mobileImageWrapper: {
    position: 'relative',
    height: { xs: 180, sm: 220 },
    bgcolor: '#F8FAFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
    },
  },
  mobileProductImage: {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
    p: 2,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  mobileDiscountBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    bgcolor: 'error.main',
    color: 'white',
    px: 2,
    py: 0.75,
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: 700,
    boxShadow: '0 4px 12px rgba(255,0,0,0.2)',
    zIndex: 1,
    letterSpacing: '0.5px',
  },
  mobileContentWrapper: {
    p: { xs: 2, sm: 2.5 },
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  mobileTitle: {
    mb: 2,
    fontWeight: 700,
    fontSize: { xs: '1rem', sm: '1.125rem' },
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    color: 'text.primary',
    lineHeight: 1.2,
  },
  mobileInfoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: { xs: 2, sm: 2.5 },
    mb: 3,
    mt: 1,
  },
  mobileInfoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.75,
    '& .MuiTypography-caption': {
      color: 'text.secondary',
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    '& .MuiTypography-root:not(.MuiTypography-caption)': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'text.primary',
    },
  },
  mobilePriceWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid',
    borderColor: 'grey.100',
    pt: 2.5,
    width: '100%'
  },
  mobilePrice: {
    fontWeight: 800,
    color: 'primary.main',
    fontSize: { xs: '1.25rem', sm: '1.5rem' },
    letterSpacing: '-0.5px',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  mobileCardsWrapper: {
    maxHeight: 'calc(100vh - 250px)',
    overflow: 'auto',
    px: { xs: 1, sm: 2 },
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(auto-fill, minmax(280px, 1fr))',
    },
    gap: { xs: 1.5, sm: 2.5 },
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px',
      '&:hover': {
        background: '#666',
      },
    },
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: { xs: 180, sm: 220 },
  },
} as const; 