import { Product } from "@/types/product";

import { Card, Box, Typography } from '@mui/material';
import { dashboardTableStyles as styles } from '@/styles/DashboardTable.styles';

const MobileCard = ({ product }: { product: Product }) => (
  <Card sx={styles.mobileCard}>
    <Box sx={styles.mobileImageWrapper}>
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={styles.mobileProductImage}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = '/assets/not-found.png';
        }}
      />
      {product.discount > 0 && (
        <Typography sx={styles.mobileDiscountBadge}>
          -{product.discount}%
        </Typography>
      )}
    </Box>
    <Box sx={styles.mobileContentWrapper}>
      <Typography variant="h6" sx={styles.mobileTitle}>{product.title}</Typography>
      <Box sx={styles.mobileInfoGrid}>
        <Box sx={styles.mobileInfoItem}>
          <Typography variant="caption" color="text.secondary">Brand</Typography>
          <Typography>{product.brand}</Typography>
        </Box>
        <Box sx={styles.mobileInfoItem}>
          <Typography variant="caption" color="text.secondary">Model</Typography>
          <Typography>{product.model}</Typography>
        </Box>
        <Box sx={styles.mobileInfoItem}>
          <Typography variant="caption" color="text.secondary">Category</Typography>
          <Box sx={styles.categoryBadge}>{product.category}</Box>
        </Box>
        <Box sx={styles.mobileInfoItem}>
          <Typography variant="caption" color="text.secondary">Color</Typography>
          <Box sx={styles.colorBadge}>{product.color}</Box>
        </Box>
      </Box>
      <Box sx={styles.mobilePriceWrapper}>
        <Typography 
          component="span"
          sx={styles.mobilePrice}
        >
          ${product.price.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default MobileCard;