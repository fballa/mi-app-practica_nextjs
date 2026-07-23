// app/dashboard/components/SalesTable.tsx
'use client';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Definimos el tipo de un producto (según la API)
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface SalesTableProps {
  products: Product[];
}

export default function SalesTable({ products }: SalesTableProps) {
  // Definimos las columnas de la tabla
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Producto', width: 300 },
    { 
      field: 'price', 
      headerName: 'Precio (USD)', 
      width: 130, 
      type: 'number',
      renderCell: (params) => `$${params.value.toFixed(2)}`
    },
    { field: 'category', headerName: 'Categoría', width: 150 },
    { 
      field: 'rating', 
      headerName: 'Calificación', 
      width: 180,
      renderCell: (params) => `${params.value.rate} ⭐ (${params.value.count} reseñas)`
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }} className="test-dark p-4">
      <DataGrid
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      />
    </div>
  );
}