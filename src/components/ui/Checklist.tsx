import { Icon } from './Icon';
import type { CSSProperties } from 'react';

interface ChecklistProps {
  items: string[];
  className?: string;
  style?: CSSProperties;
}

export function Checklist({ items, className = '', style }: ChecklistProps) {
  return (
    <ul
      className={`checklist${className ? ` ${className}` : ''}`}
      style={style}
    >
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
