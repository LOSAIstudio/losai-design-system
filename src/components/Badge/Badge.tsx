'use client';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

export type BadgeTone = 'ink' | 'gold' | 'neutral' | 'muted' | 'dot';

export const Badge = ({ tone = 'neutral', children, className }: { tone?: BadgeTone; children: ReactNode; className?: string }) => (
  <span className={cx('losai-badge', tone !== 'neutral' && `losai-badge--${tone}`, className)}>{children}</span>
);

export interface TagProps {
  selected?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
  children: ReactNode;
  className?: string;
}

export const Tag = ({ selected, disabled, onToggle, children, className }: TagProps) => (
  <button
    type="button"
    aria-pressed={!!selected}
    disabled={disabled}
    onClick={onToggle}
    className={cx('losai-tag', selected && 'is-selected', className)}
  >
    {children}
  </button>
);
