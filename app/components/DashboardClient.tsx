'use client';

import { useState } from 'react';
import SummaryCards from './SummaryCards';
import SalesTable from './SalesTable';
import FilterBar from './FilterBar';
import SalesChart from './SalesChart';
import DarkModeToggle from '@/app/components/DarkModeToggle';
import RefreshButton from './RefreshButton';

// Definimos el tipo de producto
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

interface DashboardClientProps {
  products: Product[];
}

export default function DashboardClient({ products }: DashboardClientProps) {
  const [filterText, setFilterText] = useState('');

  // Verificamos que products sea un arreglo
  if (!Array.isArray(products)) {
    console.error('DashboardClient: products no es un arreglo', products);
    return (
      <div className="text-red-500 p-4">
        Error: Los datos de productos no tienen el formato esperado.
      </div>
    );
  }

  // Filtramos los productos según el texto de búsqueda (título)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  // Cálculo de estadísticas sobre todos los productos (sin filtrar)
  const totalProducts = products.length;
  const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
  const averagePrice = totalProducts > 0 ? totalPrice / totalProducts : 0;

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          📊 Dashboard de Ventas
        </h1>
        <div className="flex gap-2 items-center">
          <RefreshButton />
          <DarkModeToggle />
        </div>
      </header>

      <SummaryCards
        totalProducts={totalProducts}
        totalPrice={totalPrice}
        averagePrice={averagePrice}
      />

      <SalesChart products={products} />

      <FilterBar onFilter={setFilterText} />

      <SalesTable products={filteredProducts} />
    </div>
  );
}