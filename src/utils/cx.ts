import type { ReactNode, HTMLAttributes } from 'react';

/** Join truthy class names. Accepts the results of `cond && 'class'` for any `cond`. */
export const cx = (...parts: unknown[]): string =>
  parts.filter(p => typeof p === 'string' && p).join(' ');

export type Base<T extends HTMLElement = HTMLElement> = HTMLAttributes<T> & { children?: ReactNode };
