import DashboardClient from '../components/DashboardClient';

export default async function DashboardPage() {
  try {
    const res = await fetch('https://dummyjson.com/products', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();
    const products = data.products || data;

    if (!Array.isArray(products)) {
      throw new Error('La API no devolvió un arreglo de productos');
    }

    // ✅ Pasamos el arreglo completo sin transformar
    return (
      <div className="p-6">
        <DashboardClient products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>❌ Error al cargar los datos.</p>
        <p className="text-sm text-gray-500 mt-2">
          {error instanceof Error ? error.message : 'Error desconocido'}
        </p>
      </div>
    );
  }
}