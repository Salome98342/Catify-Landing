import { Button } from './Button';

interface CopyButtonProps {
  onCopy: () => void;
  label?: string;
  size?: 'normal' | 'small';
}

export function CopyButton({
  onCopy,
  label = 'Copiar el mensaje',
  size,
}: CopyButtonProps) {
  return (
    <Button
      type="button"
      variant="soft"
      size={size}
      onClick={onCopy}
      aria-label={label}
    >
      {label}
    </Button>
  );
}
