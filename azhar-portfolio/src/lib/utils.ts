import { clsx, type ClassValue } from 'clsx';

/**
 * Merge class names conditionally.
 * Thin wrapper around clsx — keeps bundle small by not pulling in tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
