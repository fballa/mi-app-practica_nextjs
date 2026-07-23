// app/components/Counter.tsx
'use client'; // <-- Esto lo convierte en un Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}