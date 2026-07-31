import type { ReactNode, HTMLAttributes } from 'react';
import { cx } from '../../utils/cx.js';

/** Dark scope. Wrap any subtree — every LOSAI component class works unchanged. */
export const Dark = ({ children, className, ...rest }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) => (
  <div className={cx('losai-dark', className)} {...rest}>{children}</div>
);

export interface CoverProps {
  src: string;
  alt?: string;
  logoSrc: string;          // brand/losai-logo-white.png
  label?: string;           // tracked caps, top right
  title: ReactNode;         // Cormorant Light; second line usually <em>
  meta?: string;            // hairline + mono line under the title
  height?: number | string;
  className?: string;
}

/** Full-bleed photograph with a bottom-weighted scrim. Gold is never used over imagery. */
export function Cover({ src, alt = '', logoSrc, label, title, meta, height = 340, className }: CoverProps) {
  return (
    <div className={cx('losai-cover', className)} style={{ height }}>
      <img src={src} alt={alt} />
      <div className="losai-cover-scrim" />
      <div className="losai-cover-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <img src={logoSrc} alt="LOSAI studio" style={{ height: 20, width: 'auto', display: 'block' }} />
          {label && <span className="losai-label">{label}</span>}
        </div>
        <div style={{ flex: 1 }} />
        <h1 className="losai-cover-title">{title}</h1>
        {meta && <div className="losai-cover-meta">{meta}</div>}
      </div>
    </div>
  );
}
