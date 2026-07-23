// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Footer from '@/app/components/Footer'; // 👈 Importa el Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard de Ventas",
  description: "Práctica con Next.js y MUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
        <Footer /> {/* 👈 Agrega el Footer aquí */}
      </body>
    </html>
  );
}