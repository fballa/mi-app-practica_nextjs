// app/dashboard/components/SummaryCards.tsx
'use client';

interface SummaryCardsProps {
  totalProducts: number;
  totalPrice: number;
  averagePrice: number;
}

export default function SummaryCards({ totalProducts, totalPrice, averagePrice }: SummaryCardsProps) {
  return (
    <div className="test-dark p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h3 className="text-sm text-gray-500">Total Productos</h3>
        <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h3 className="text-sm text-gray-500">Precio Total</h3>
        <p className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h3 className="text-sm text-gray-500">Precio Promedio</h3>
        <p className="text-2xl font-bold text-purple-600">${averagePrice.toFixed(2)}</p>
      </div>
    </div>
    </div>
  );
}