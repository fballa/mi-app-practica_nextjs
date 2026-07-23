'use client';

import { useTransition } from 'react';
import { refreshData } from '@/app/actions';

export default function RefreshButton() {
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(async () => {
      await refreshData();
    });
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isPending}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
    >
      {isPending ? '⏳ Actualizando...' : '🔄 Actualizar datos'}
    </button>
  );
}