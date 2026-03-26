type BadgeVariant = 'default' | 'accent' | 'secondary';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-text-primary',
  accent: 'bg-accent/10 text-accent',
  secondary: 'bg-accent-secondary/10 text-accent-secondary',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
