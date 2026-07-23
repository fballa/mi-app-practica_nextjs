// app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      {/* Título */}
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-4"></div>
      
      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-300 dark:bg-gray-700 h-24 rounded"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-24 rounded"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-24 rounded"></div>
      </div>
      
      {/* Barra de búsqueda */}
      <div className="bg-gray-300 dark:bg-gray-700 h-10 w-1/3 rounded mb-4"></div>
      
      {/* Tabla */}
      <div className="bg-gray-300 dark:bg-gray-700 h-96 rounded"></div>
    </div>
  );
}