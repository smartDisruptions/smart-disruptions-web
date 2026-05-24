interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className = '',
  hover = false,
  style,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface p-6 ${
        hover
          ? 'transition-all hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]'
          : ''
      } ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
