'use client';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

export interface MastheadProps {
  logoSrc: string;              // brand/losai-logo-darkgrey.png on paper
  code?: string;                // "LOSAI-2026-016"
  descriptor?: string;          // italic Cormorant line
  children?: ReactNode;         // typically <Nav />
  className?: string;
}

export function Masthead({ logoSrc, code, descriptor, children, className }: MastheadProps) {
  return (
    <div className={cx('losai-masthead', className)}>
      <img src={logoSrc} alt="LOSAI studio" />
      {(code || descriptor) && <span className="losai-masthead-divider" />}
      {(code || descriptor) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {code && <span className="losai-label">{code}</span>}
          {descriptor && <span className="losai-sub" style={{ fontSize: 15, color: 'var(--losai-prose)' }}>{descriptor}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

export interface NavProps {
  items: Array<{ id: string; label: string; href?: string }>;
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function Nav({ items, activeId, onSelect, className }: NavProps) {
  return (
    <nav className={cx('losai-nav', className)}>
      {items.map(i =>
        i.href ? (
          <a key={i.id} href={i.href} className={cx(i.id === activeId && 'is-active')}>{i.label}</a>
        ) : (
          <span key={i.id} className={cx(i.id === activeId && 'is-active')} onClick={() => onSelect?.(i.id)}>{i.label}</span>
        )
      )}
    </nav>
  );
}

export const Breadcrumbs = ({ items }: { items: string[] }) => (
  <div className="losai-crumbs">
    {items.map((t, i) => (
      <span key={t} className={cx(i === items.length - 1 && 'is-current')}>
        {i > 0 && <span className="sep" style={{ marginRight: 10 }}>/</span>}{t}
      </span>
    ))}
  </div>
);

export const Pager = ({ pages, current, onSelect, note }: { pages: string[]; current: string; onSelect?: (p: string) => void; note?: string }) => (
  <div className="losai-pager">
    <span>{'←'}</span>
    {pages.map(p => (
      <span key={p} className={cx(p === current && 'is-current')} onClick={() => onSelect?.(p)} style={{ cursor: 'pointer' }}>{p}</span>
    ))}
    <span style={{ color: 'var(--losai-ink)' }}>{'→'}</span>
    {note && <><span style={{ flex: 1 }} /><span className="losai-sub" style={{ fontSize: 13.5 }}>{note}</span></>}
  </div>
);
