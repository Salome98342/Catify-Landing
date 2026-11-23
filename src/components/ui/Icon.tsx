import type { SVGProps } from 'react';

export type IconName =
  'arrow' | 'check' | 'cross' | 'bag' | 'cart' | 'list' | 'palette' | 'search';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const common = {
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
    ...props,
  };

  switch (name) {
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 12.5l4.2 4.2L19 7" />
        </svg>
      );
    case 'cross':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case 'bag':
      return (
        <svg {...common}>
          <path d="M4 7h16l-1.5 11a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 7Z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
      );
    case 'cart':
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="18" cy="20" r="1.4" />
          <path d="M3 4h2.5l2.2 11h10.6L20 8H6.4" />
        </svg>
      );
    case 'list':
      return (
        <svg {...common}>
          <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
          <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
      );
    case 'palette':
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.8 2-1.7 0-1.3-1.2-1.6-1.2-2.8 0-.9.7-1.5 1.7-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10" cy="7.5" r="1" />
          <circle cx="14.5" cy="7.5" r="1" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
  }
}
