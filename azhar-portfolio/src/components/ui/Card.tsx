import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
  children: ReactNode;
}

export default function Card({
  className,
  hover = true,
  glass = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/5 p-6',
        glass ? 'glass' : 'bg-navy-800',
        hover && 'card-glow transition-transform duration-300 hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
