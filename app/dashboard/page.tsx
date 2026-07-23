// app/dashboard/page.tsx (mejorado)
import DashboardClient from '../components/DashboardClient';

export default async function DashboardPage() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Error al obtener productos');
    const products = await res.json();

    return (
      <div className="p-6">
        
        <DashboardClient products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>❌ Error al cargar los datos. Por favor, inténtalo más tarde.</p>
      </div>
    );
  }
}