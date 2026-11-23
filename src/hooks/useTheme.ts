import { useEffect, useLayoutEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem('catify-theme') === 'dark'
        ? 'dark'
        : 'light';
    } catch {
      return 'light';
    }
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add('theming');
    root.dataset.theme = theme;
    const timeout = window.setTimeout(
      () => root.classList.remove('theming'),
      800,
    );
    return () => window.clearTimeout(timeout);
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem('catify-theme', theme);
    } catch {
      // The selected theme remains active for this page view when storage is unavailable.
    }
  }, [theme]);

  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
