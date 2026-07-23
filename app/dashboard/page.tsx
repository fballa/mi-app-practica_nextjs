import DashboardClient from '../components/DashboardClient';

// Definimos el tipo de producto según dummyjson
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  description?: string;
  discountPercentage?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  images?: string[];
  thumbnail?: string;
}

export default async function DashboardPage() {
  try {
    // Usamos dummyjson.com como API
    const res = await fetch('https://dummyjson.com/products', {
      cache: 'no-store', // Para que siempre obtenga datos frescos en producción
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    
    // Extraemos el arreglo de productos de la respuesta
    // dummyjson devuelve: { products: [...], total: 100, skip: 0, limit: 30 }
    const products = data.products || data;

    // Verificamos que sea un arreglo
    if (!Array.isArray(products)) {
      throw new Error('La API no devolvió un arreglo de productos');
    }

    // Transformamos los datos para que coincidan con el formato esperado por DashboardClient
    const formattedProducts = products.map((p: any) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      category: p.category,
      rating: {
        rate: p.rating || 0,
        count: p.stock || 0,
      },
    }));

    return (
      <div className="p-6">
         <DashboardClient products={formattedProducts} />
      </div>
    );
  } catch (error) {
    console.error('Error en DashboardPage:', error);
    return (
      <div className="p-6 text-center text-red-500 test-dark p-4">
        <p>❌ Error al cargar los datos.</p>
        <p className="text-sm text-gray-500 mt-2">
          {error instanceof Error ? error.message : 'Error desconocido'}
        </p>
        <p className="text-xs text-gray-400 mt-4">
          Por favor, intenta más tarde o contacta al administrador.
        </p>
      </div>
    );
  }
}