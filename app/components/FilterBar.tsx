'use client';

import { useState } from 'react';

interface FilterBarProps {
  onFilter: (searchTerm: string) => void;
}

export default function FilterBar({ onFilter }: FilterBarProps) {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onFilter(value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Buscar producto..."
        value={search}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 bg-white  text-gray-800 dark:text-white p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}