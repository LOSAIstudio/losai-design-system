import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

export const Note = ({ label = 'Note', children, className }: { label?: string; children: ReactNode; className?: string }) => (
  <div className={cx('losai-note', className)}>
    <div className="losai-note-head">{label}</div>
    <p className="losai-prose" style={{ fontSize: 15.5 }}>{children}</p>
  </div>
);

export const Caution = ({ label = 'Caution', children, className }: { label?: string; children: ReactNode; className?: string }) => (
  <div className={cx('losai-caution', className)}>
    <div>
      <div className="losai-caution-label">{label}</div>
      <p className="losai-prose" style={{ fontSize: 15.5 }}>{children}</p>
    </div>
  </div>
);

export const PullQuote = ({ children, attribution, className }: { children: ReactNode; attribution?: string; className?: string }) => (
  <figure className={cx('losai-quote', className)} style={{ margin: 0 }}>
    <div>
      <p>{children}</p>
      {attribution && <figcaption className="losai-quote-attr">{attribution}</figcaption>}
    </div>
  </figure>
);

export const LeadLine = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cx('losai-lead', className)} style={{ maxWidth: '76%' }}>{children}</p>
);
