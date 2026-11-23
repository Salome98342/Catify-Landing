import { NavLink } from 'react-router-dom';
import { contact } from '../../data/contact';
import type { Theme } from '../../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-head">
      <div className="wrap head-in">
        <NavLink className="brand" to="/" aria-label={contact.headerBrandLabel}>
          {contact.brand}
          <i>.</i>
        </NavLink>
        <div className="head-right">
          <nav className="nav" aria-label={contact.navigationLabel}>
            {contact.navigation.map(({ to, label, cta }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={cta ? 'nav-cta' : undefined}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
