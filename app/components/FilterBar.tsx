// app/dashboard/components/FilterBar.tsx
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
    onFilter(value); // Notificamos al padre el nuevo término
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Buscar producto..."
        value={search}
        onChange={handleChange}
        className="test-dark p-4"
      />
    </div>
  );
}