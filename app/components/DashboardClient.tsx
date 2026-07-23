// app/dashboard/components/DashboardClient.tsx
'use client';

import { useState } from 'react';
import SummaryCards from './SummaryCards';
import SalesTable from './SalesTable';
import FilterBar from './FilterBar';
import SalesChart from './SalesChart';
import DarkModeToggle from '@/app/components/DarkModeToggle';
import RefreshButton from './RefreshButton';


// El mismo tipo Product que usamos en SalesTable
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

  // Filtramos los productos según el texto de búsqueda (título)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  // Cálculo de estadísticas sobre todos los productos (sin filtrar)
  const totalProducts = products.length;
  const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
  const averagePrice = totalProducts > 0 ? totalPrice / totalProducts : 0;

  return (
    <><header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📊 Dashboard de Ventas</h1>
          <RefreshButton />
          <DarkModeToggle />
      </header><div>
              <SummaryCards
                  totalProducts={totalProducts}
                  totalPrice={totalPrice}
                  averagePrice={averagePrice} />
              <SalesChart products={products} />
              <FilterBar onFilter={setFilterText} />
              <SalesTable products={filteredProducts} />
          </div></>
  );
}