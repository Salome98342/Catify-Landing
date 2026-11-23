import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contact } from '../../data/contact';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = contact.routeTitles[pathname] ?? 'Catify';
  }, [pathname]);

  return null;
}
