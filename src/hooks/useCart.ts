import { useState } from 'react';

export function useCart(): {
  count: number;
  addItem: () => void;
  bumpKey: number;
} {
  const [count, setCount] = useState(0);
  const [bumpKey, setBumpKey] = useState(0);

  function addItem(): void {
    setCount((current) => current + 1);
    setBumpKey((current) => current + 1);
  }

  return { count, addItem, bumpKey };
}
