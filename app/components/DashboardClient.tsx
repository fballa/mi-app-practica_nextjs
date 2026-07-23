'use client';

import { useState } from 'react';
import SummaryCards from './SummaryCards';
import SalesTable from './SalesTable';
import FilterBar from './FilterBar';
import SalesChart from './SalesChart';
import DarkModeToggle from '@/app/components/DarkModeToggle';
import RefreshButton from './RefreshButton';

// Definimos el tipo completo según dummyjson
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

interface DashboardClientProps {
  products: Product[];
}

export default function DashboardClient({ products }: DashboardClientProps) {
  const [filterText, setFilterText] = useState('');

  if (!Array.isArray(products)) {
    return (
      <div className="text-red-500 p-4">
        Error: Los datos de productos no tienen el formato esperado.
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalProducts = products.length;
  const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
  const averagePrice = totalProducts > 0 ? totalPrice / totalProducts : 0;

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          📊 Dashboard de Ventas
        </h1>
        <div className="flex gap-3 items-center">
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