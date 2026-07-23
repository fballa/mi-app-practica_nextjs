// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**', // Permite todas las rutas dentro de este dominio
      },
    ],
  },
  // ... el resto de tu configuración
};

export default nextConfig;