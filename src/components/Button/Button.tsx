import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils/cx.js';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** Mono tracked caps, square corners. Hover/active/focus/disabled come from losai.css. */
export function Button({ variant = 'primary', size = 'md', className, ...rest }: ButtonProps) {
  return (
    <button
      type={rest.type ?? 'button'}
      className={cx('losai-btn', `losai-btn--${variant}`, size !== 'md' && `losai-btn--${size}`, className)}
      {...rest}
    />
  );
}
