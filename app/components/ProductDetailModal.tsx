'use client';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Chip, Box } from '@mui/material';
import Grid2 from '@mui/material/Grid';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: any[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: any;
  images: string[];
  thumbnail: string;
  category: string;
}

interface ProductDetailModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDetailModal({ open, onClose, product }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h5" component="span">
          {product.title}
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Grid2 container spacing={3}>
          {/* Imagen */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'relative', width: '100%', height: 200, borderRadius: 1, overflow: 'hidden' }}>
              <Image
                src={product.thumbnail || '/placeholder.png'}
                alt={product.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Grid2>

          {/* Información principal */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            {/* Descripción: usamos component="p" en lugar de paragraph */}
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              {product.description}
            </Typography>

            <Grid2 container spacing={1}>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Precio</Typography>
                <Typography variant="h6">${product.price.toFixed(2)}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Descuento</Typography>
                <Typography variant="body1">{product.discountPercentage}%</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Categoría</Typography>
                <Typography variant="body1">{product.category}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Marca</Typography>
                <Typography variant="body1">{product.brand || 'N/A'}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Rating</Typography>
                <Typography variant="body1">{product.rating} ⭐</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Stock</Typography>
                <Typography variant="body1">{product.stock} unidades</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">SKU</Typography>
                <Typography variant="body1">{product.sku}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">Peso</Typography>
                <Typography variant="body1">{product.weight} kg</Typography>
              </Grid2>
            </Grid2>

            {/* Tags */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">Etiquetas</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                {product.tags?.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
            </Box>

            {/* Dimensiones */}
            {product.dimensions && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" color="textSecondary">Dimensiones</Typography>
                <Typography variant="body2">
                  {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                </Typography>
              </Box>
            )}
          </Grid2>
        </Grid2>

        {/* Información adicional (envío, garantía, etc.) */}
        <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" color="textSecondary">Estado de disponibilidad</Typography>
              <Typography variant="body2">{product.availabilityStatus}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" color="textSecondary">Política de devolución</Typography>
              <Typography variant="body2">{product.returnPolicy}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" color="textSecondary">Garantía</Typography>
              <Typography variant="body2">{product.warrantyInformation}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" color="textSecondary">Envío</Typography>
              <Typography variant="body2">{product.shippingInformation}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="caption" color="textSecondary">Cantidad mínima de pedido</Typography>
              <Typography variant="body2">{product.minimumOrderQuantity} unidades</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}