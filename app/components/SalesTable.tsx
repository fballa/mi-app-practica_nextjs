'use client';

import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ProductDetailModal from './ProductDetailModal';

// Definimos el tipo completo del producto (el mismo que en DashboardClient)
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

interface SalesTableProps {
  products: Product[];
}

export default function SalesTable({ products }: SalesTableProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  if (!Array.isArray(products)) {
    return (
      <div className="text-red-500 p-4">
        Error: Los datos para la tabla no tienen el formato esperado.
      </div>
    );
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Producto', width: 300 },
    {
      field: 'price',
      headerName: 'Precio (USD)',
      width: 130,
      type: 'number',
      renderCell: (params) => `$${params.value.toFixed(2)}`,
    },
    { field: 'category', headerName: 'Categoría', width: 150 },
    {
      field: 'rating',
      headerName: 'Calificación',
      width: 180,
      renderCell: (params) => {
        const rating = params.value || 0;
        const count = params.row.stock || 0;
        return `${rating} ⭐ (${count} reseñas)`;
      },
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 130,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleOpenModal(params.row)}
          sx={{ textTransform: 'none' }}
        >
          Ver detalle
        </Button>
      ),
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: '100%' }} className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <DataGrid
          rows={products}
          columns={columns}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
        />
      </div>

      {/* Modal de detalle */}
      <ProductDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}