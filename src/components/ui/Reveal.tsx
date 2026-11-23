import type { HTMLAttributes, ReactNode } from 'react';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Reveal({ children, className = '', ...props }: RevealProps) {
  return (
    <div {...props} className={`reveal${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
