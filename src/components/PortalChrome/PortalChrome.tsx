'use client';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

/**
 * Client-facing header and footer — the LOSAI standard.
 *
 * Ruled by Leo 2026-08-21 from the 301 18th St proposal and carried into the
 * CP_v2 page as the FINAL header/footer. Every client-facing surface (client
 * portal, website, proposals) uses these two components and no other chrome.
 *
 * Geometry: wordmark 44px in the header / 50px in the footer, a hairline
 * divider, then ARCHITECTURE & DESIGN in mono over a LOSAI-blue line — the
 * project in the header, the studio line in the footer.
 */

export interface PortalHeaderProps {
  /** Wordmark artwork on cpPaper — ink #514c47. */
  logoSrc: string;
  /** Project or address, set in LOSAI blue. */
  project?: string;
  /** Mono nav items, right aligned. */
  items?: Array<{ id: string; label: string; href?: string; disabled?: boolean }>;
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Sign-in control or signed-in welcome — rendered after the nav. */
  auth?: ReactNode;
  /** Home link target for the wordmark. */
  homeHref?: string;
  className?: string;
}

export function PortalHeader({
  logoSrc,
  project,
  items = [],
  activeId,
  onSelect,
  auth,
  homeHref = '#',
  className,
}: PortalHeaderProps) {
  return (
    <nav className={cx('losai-portal-header', className)}>
      <div className="losai-portal-wrap">
        <a className="losai-portal-brand" href={homeHref}>
          <img src={logoSrc} alt="LOSAI studio" />
        </a>
        <div className="losai-portal-brandmeta">
          <div className="losai-portal-descriptor">Architecture &amp; Design</div>
          {project && <div className="losai-portal-project">{project}</div>}
        </div>
        {(items.length > 0 || auth) && (
          <div className="losai-portal-nav">
            {items.map(i =>
              i.disabled ? (
                <span key={i.id} className="losai-portal-navlink is-disabled" aria-disabled="true">
                  {i.label}
                </span>
              ) : i.href ? (
                <a
                  key={i.id}
                  href={i.href}
                  className={cx('losai-portal-navlink', i.id === activeId && 'is-active')}
                >
                  {i.label}
                </a>
              ) : (
                <span
                  key={i.id}
                  className={cx('losai-portal-navlink', i.id === activeId && 'is-active')}
                  onClick={() => onSelect?.(i.id)}
                >
                  {i.label}
                </span>
              ),
            )}
            {auth}
          </div>
        )}
      </div>
    </nav>
  );
}

export interface PortalFooterProps {
  logoSrc: string;
  /** Studio line in LOSAI blue italic. */
  tagline?: string;
  email?: string;
  location?: string;
  /** Proposal or project number. */
  reference?: string;
  className?: string;
}

export function PortalFooter({
  logoSrc,
  tagline = 'Designing city and country homes as places of refuge.',
  email = 'info@losai.studio',
  location = 'New York, NY',
  reference,
  className,
}: PortalFooterProps) {
  return (
    <footer className={cx('losai-portal-footer', className)}>
      <div className="losai-portal-wrap">
        <div className="losai-portal-brandgroup">
          <img className="losai-portal-footmark" src={logoSrc} alt="LOSAI studio" />
          <div className="losai-portal-brandmeta">
            <div className="losai-portal-descriptor">Architecture &amp; Design</div>
            {tagline && <div className="losai-portal-tagline">{tagline}</div>}
          </div>
        </div>
        <div className="losai-portal-footmeta">
          {email && <div className="losai-label">{email}</div>}
          {location && <div className="losai-label">{location}</div>}
          {reference && <div className="losai-label losai-portal-footref">{reference}</div>}
        </div>
      </div>
    </footer>
  );
}

export interface PortalSignInProps {
  /** Signed-in client name — renders the welcome instead of the control. */
  name?: string;
  onSignIn?: () => void;
  href?: string;
}

export function PortalSignIn({ name, onSignIn, href }: PortalSignInProps) {
  if (name !== undefined) {
    return <span className="losai-portal-welcome">Welcome{name ? `, ${name}` : ''}</span>;
  }
  return (
    <a className="losai-portal-signin" href={href} onClick={onSignIn}>
      Sign in →
    </a>
  );
}
