import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

export interface CardProps {
  variant?: 'plain' | 'bordered' | 'figure';
  className?: string;
  children: ReactNode;
}

export function Card({ variant = 'plain', className, children }: CardProps) {
  return (
    <div className={cx('losai-card', variant !== 'plain' && `losai-card--${variant}`, className)}>{children}</div>
  );
}

export interface ImageCardProps {
  src: string;
  alt?: string;
  caption?: string;   // mono filename caption, e.g. "DSCF2168"
  title: string;
  subtitle?: string;
  className?: string;
}

export function ImageCard({ src, alt = '', caption, title, subtitle, className }: ImageCardProps) {
  return (
    <div className={cx('losai-card', className)}>
      <img src={src} alt={alt} className="losai-card-img" />
      {caption && <div className="losai-caption" style={{ marginTop: 14 }}>{caption}</div>}
      <div className="losai-card-title" style={{ marginTop: 8 }}>{title}</div>
      {subtitle && <div className="losai-card-sub">{subtitle}</div>}
    </div>
  );
}

export interface FigureCardProps {
  label: string;
  value: string;
  note?: string;
  rows?: Array<{ label: string; value: string }>;
  className?: string;
}

export function FigureCard({ label, value, note, rows = [], className }: FigureCardProps) {
  return (
    <div className={cx('losai-card', 'losai-card--figure', className)}>
      <div className="losai-label">{label}</div>
      <div className="losai-figure" style={{ marginTop: 12 }}>{value}</div>
      {note && <div className="losai-card-sub">{note}</div>}
      {rows.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {rows.map(r => (
            <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid var(--losai-rule-light)' }}>
              <span className="losai-label">{r.label}</span>
              <span className="losai-value">{r.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export interface ThumbProps {
  src: string;
  caption?: string;
  selected?: boolean;
  excluded?: boolean;
  onClick?: () => void;
}

export function Thumb({ src, caption, selected, excluded, onClick }: ThumbProps) {
  return (
    <div>
      <div className={cx('losai-thumb', selected && 'is-selected', excluded && 'is-excluded')} onClick={onClick}>
        <img src={src} alt={caption ?? ''} />
      </div>
      {caption && <div className="losai-caption" style={{ marginTop: 7 }}>{caption}</div>}
    </div>
  );
}
