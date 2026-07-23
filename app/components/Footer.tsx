// app/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-900">
      <p>
        © {currentYear} <span className="font-medium text-gray-700 dark:text-gray-300">Franklin Balladares Soriano</span> — Desarrollador  de Software
      </p>
      <p className="mt-1">
        📞 <a href="tel:+50558883346" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          +505 5888 3346
        </a>
      </p>
    </footer>
  );
}