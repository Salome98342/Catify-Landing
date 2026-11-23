import { useState } from 'react';

export function useCopy(): {
  status: (key: string) => string;
  copy: (text: string, key: string) => void;
} {
  const [statuses, setStatuses] = useState<Record<string, string>>({});

  function setStatus(key: string, message: string): void {
    setStatuses((current) => ({ ...current, [key]: message }));
  }

  function copy(text: string, key: string): void {
    try {
      void navigator.clipboard.writeText(text).then(
        () => setStatus(key, 'Copiado.'),
        () =>
          setStatus(key, 'No se pudo copiar. Selecciona el texto y cópialo.'),
      );
    } catch {
      setStatus(key, 'No se pudo copiar. Selecciona el texto y cópialo.');
    }
  }

  return { status: (key) => statuses[key] ?? '', copy };
}
