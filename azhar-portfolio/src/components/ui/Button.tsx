'use client';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  target,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
    'transition-all duration-300 cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]',
    'disabled:opacity-50 disabled:pointer-events-none',
    sizeClasses[size],
    className,
  );

  const variantClass =
    variant === 'primary'
      ? cn(
          'relative bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold',
          'shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:shadow-xl hover:scale-[1.02]',
          // animated gradient border via pseudo-element approach using ring trick
          'ring-1 ring-inset ring-white/20',
        )
      : variant === 'outline'
      ? cn(
          'border border-blue-500/60 text-blue-400 bg-transparent',
          'hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300',
        )
      : cn(
          'bg-transparent text-[#94A3B8] hover:bg-white/5 hover:text-[#F8FAFC]',
        );

  const classes = cn(base, variantClass);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || target === '_blank';
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? '_blank'}
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
