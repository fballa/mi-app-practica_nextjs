'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
}

interface SalesChartProps {
  products: Product[];
}

export default function SalesChart({ products }: SalesChartProps) {
  // Agrupar por categoría y calcular precio promedio
  const categoryMap = products.reduce((acc: Record<string, number[]>, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product.price);
    return acc;
  }, {});

  const data = Object.keys(categoryMap).map((category) => {
    const prices = categoryMap[category];
    const average = prices.reduce((a, b) => a + b, 0) / prices.length;
    return {
      category,
      averagePrice: Math.round(average * 100) / 100,
      count: prices.length,
    };
  });

  return (
    <div className="test-dark p-4">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
        📊 Precio Promedio por Categoría
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="category" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="averagePrice" fill="#8884d8" name="Precio Promedio (USD)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}