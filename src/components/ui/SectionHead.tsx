import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

interface SectionHeadProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHead({
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionHeadProps) {
  return (
    <div className={`section-head${className ? ` ${className}` : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2>
          {title.split('\n').map((line, index) => (
            <span key={`${line}-${index}`}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
      )}
      {description && <p className="lead">{description}</p>}
      {children}
    </div>
  );
}
