import type { Theme } from '../../hooks/useTheme';
import { contact } from '../../data/contact';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={contact.themeLabel(theme)}
      aria-pressed={isDark}
      title={contact.themeTitle}
    >
      <span className="orb sun-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <circle className="sun" cx="12" cy="12" r="4.5" fill="var(--sun)" />
          <g
            className="rays"
            stroke="var(--sun)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
          </g>
        </svg>
      </span>
      <span className="orb moon-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            className="moon"
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
            fill="var(--moon)"
          />
        </svg>
      </span>
      <span className="stars" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}
