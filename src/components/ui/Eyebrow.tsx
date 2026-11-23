import type { HTMLAttributes, ReactNode } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  live?: boolean;
  children: ReactNode;
}

export function Eyebrow({
  live = false,
  className = '',
  children,
  ...props
}: EyebrowProps) {
  return (
    <span
      {...props}
      className={`eyebrow${live ? ' live' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </span>
  );
}
