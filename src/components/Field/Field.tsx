'use client';
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

interface FieldShellProps {
  label: string;
  help?: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Label above a control, with optional help (italic) or error (alert #9c3f2c + square marker). */
export function Field({ label, help, error, className, children }: FieldShellProps) {
  return (
    <div className={cx('losai-field', error && 'losai-field--error', className)}>
      <label className="losai-field-label">{label}</label>
      {children}
      {error ? <div className="losai-error">{error}</div> : help ? <div className="losai-help">{help}</div> : null}
    </div>
  );
}

export const Input = ({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cx('losai-input', className)} {...rest} />
);

export const Textarea = ({ className, rows = 3, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea rows={rows} className={cx('losai-textarea', className)} {...rest} />
);

export const Select = ({ className, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={cx('losai-select', className)} {...rest} />
);

export interface CheckProps {
  checked?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}

export function Checkbox({ checked, disabled, onToggle, children }: CheckProps) {
  return (
    <div
      role="checkbox"
      aria-checked={!!checked}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onToggle}
      onKeyDown={e => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onToggle?.(); } }}
      className={cx('losai-check', disabled && 'is-disabled')}
    >
      <span className={cx('losai-check-box', checked && 'is-on')}>{checked ? '✓' : ''}</span>
      <span>{children}</span>
    </div>
  );
}

export function Radio({ checked, disabled, onToggle, children }: CheckProps) {
  return (
    <div
      role="radio"
      aria-checked={!!checked}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onToggle}
      onKeyDown={e => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onToggle?.(); } }}
      className={cx('losai-radio', disabled && 'is-disabled')}
    >
      <span className={cx('losai-radio-dot', checked && 'is-on')} />
      <span>{children}</span>
    </div>
  );
}
