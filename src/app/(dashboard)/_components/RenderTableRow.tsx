import { Box, TableCell, Typography } from "@mui/material";
import { dashboardTableStyles as styles } from '@/styles/DashboardTable.styles';
import { TableRow } from "@mui/material";
import { Product } from "@/types/product";

const RenderTableRow = (product: Product) => (
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

export default RenderTableRow;