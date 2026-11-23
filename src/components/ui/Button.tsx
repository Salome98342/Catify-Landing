import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

interface ExternalButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> {
  href: string;
  variant?: 'primary' | 'inverse' | 'soft' | 'plain';
  size?: 'normal' | 'small';
  arrow?: boolean;
  children: ReactNode;
}

interface InternalButtonProps {
  to: string;
  variant?: 'primary' | 'inverse' | 'soft' | 'plain';
  size?: 'normal' | 'small';
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'inverse' | 'soft' | 'plain';
  size?: 'normal' | 'small';
  arrow?: boolean;
  children: ReactNode;
}

type ButtonProps =
  ExternalButtonProps | InternalButtonProps | ButtonControlProps;

function buttonClass(
  variant: ButtonProps['variant'],
  size: ButtonProps['size'],
): string {
  const classes = ['btn'];
  if (variant === 'inverse') classes.push('inv');
  if (variant === 'soft') classes.push('plain', 'soft');
  if (variant === 'plain') classes.push('plain');
  if (size === 'small') classes.push('sm');
  return classes.join(' ');
}

function ButtonContent({
  children,
  arrow,
}: {
  children: ReactNode;
  arrow: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn-ic">
          <Icon name="arrow" />
        </span>
      )}
    </>
  );
}

export function Button(props: ButtonProps) {
  if ('to' in props) {
    const {
      to,
      variant = 'primary',
      size = 'normal',
      arrow = false,
      children,
      className: suppliedClassName,
      ...attributes
    } = props;
    const className = [buttonClass(variant, size), suppliedClassName]
      .filter(Boolean)
      .join(' ');
    return (
      <Link {...attributes} to={to} className={className}>
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </Link>
    );
  }

  if ('href' in props) {
    const {
      href,
      variant = 'primary',
      size = 'normal',
      arrow = false,
      children,
      className: suppliedClassName,
      ...attributes
    } = props;
    const className = [buttonClass(variant, size), suppliedClassName]
      .filter(Boolean)
      .join(' ');
    return (
      <a {...attributes} href={href} className={className}>
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </a>
    );
  }

  const {
    variant = 'primary',
    size = 'normal',
    arrow = false,
    children,
    className: suppliedClassName,
    ...attributes
  } = props;
  const className = [buttonClass(variant, size), suppliedClassName]
    .filter(Boolean)
    .join(' ');
  return (
    <button {...attributes} className={className}>
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}
