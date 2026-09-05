import * as React from "react";

/**
 * The page masthead: wordmark, vertical hairline, project code over an italic descriptor, mono caps nav.
 * @startingPoint section="Core" subtitle="Masthead, breadcrumbs and pager" viewport="700x180"
 */
export interface MastheadAction {
  label: string;
  /** studio = disabled hairline; project/esign = hairline; cart = ink fill */
  variant?: "studio" | "project" | "esign" | "cart";
  href?: string;
}

/**
 * The client portal masthead — lockup, right-justified action buttons, and a tab nav below the rule.
 * @startingPoint section="Core" subtitle="Portal masthead, breadcrumbs and pager" viewport="1180x300"
 */
export interface MastheadProps {
  /** assets/losai-wordmark-studio.png — the padded mark the portal uses at 44px */
  logoSrc?: string;
  /** Mono 9px/0.18em caps above the project line */
  discipline?: string;
  /** Italic Cormorant 500 17px in Mediterranean blue */
  project?: string;
  /** Right-justified button group, in engagement order */
  actions?: MastheadAction[];
  /** Italic blue line under the buttons, e.g. "Welcome, Carolina" */
  welcome?: string;
  /** Collapsed access strip label; "" hides it */
  secureActions?: string;
  /** Text nav below the rule — active takes Mediterranean red + a 1px underline */
  tabs?: (string | { label: string })[];
  activeTab?: string;
  onSelectTab?: (label: string) => void;
  /** Mark height in px — 44 in the masthead, 50 in the footer */
  markHeight?: number;
  style?: React.CSSProperties;
}

export declare function Masthead(props: MastheadProps): JSX.Element;

export interface StampProps {
  /** assets/logo-square-paper.png or logo-square-ink.png; omit to set LOSAI in type */
  src?: string;
  /** Square edge in px — minimum 24 */
  size?: number;
  /** paper = mark on --losai-cp-paper #f4f1ea; ink = mark reversed on #1c1a17 */
  tone?: "ink" | "paper";
  style?: React.CSSProperties;
}

export interface WordmarkProps {
  /** Path to the recoloured mark PNG — assets/logo-losai-ink.png, logo-losai-paper.png, logo-ink.png, logo-paper.png */
  src?: string;
  /** losai = LOSAI alone (the default); signature = LOSAI studio; type = serif stand-in */
  variant?: "losai" | "signature" | "type";
  /** Width in px — every variant is sized by WIDTH so lockups never shift */
  width?: number;
  tone?: "ink" | "paper";
  style?: React.CSSProperties;
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;

/**
 * The studio's identity lockup — LOSAI mark, hairline, discipline line and tagline.
 * @startingPoint section="Brand" subtitle="The default name and tagline lockup" viewport="760x140"
 */
export interface LockupProps {
  /** Path to the mark — assets/logo-losai-ink.png or logo-losai-paper.png */
  logoSrc?: string;
  variant?: "losai" | "signature" | "type";
  /** Mono capitals beside the rule */
  discipline?: string;
  /** Second line — a SLOT: the italic tagline in #53597e on brand surfaces, a title or
   *  project code elsewhere, or left blank. Never assumed. */
  tagline?: string;
  /** Multiplier on the measured geometry (mark 217×44px at 1) */
  scale?: number;
  tone?: "ink" | "paper";
  /** Draw the warm-paper ground behind the lockup */
  ground?: boolean;
  /** Crop to the 45px content band — how mastheads, covers and footers place it */
  tight?: boolean;
  style?: React.CSSProperties;
}

export declare function Lockup(props: LockupProps): JSX.Element;

export interface BreadcrumbsProps {
  items?: string[];
  style?: React.CSSProperties;
}

/** Mono caps trail separated by "/" in #c8c4b8. */
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;

export interface PagerProps {
  pages?: (string | number)[];
  current?: string | number;
  onSelect?: (page: string | number) => void;
  style?: React.CSSProperties;
}

/** Mono numerals; the current page is underlined in gold. */
export declare function Pager(props: PagerProps): JSX.Element;

export interface DocMastheadProps {
  logoSrc?: string;
  /** Mono caps job number, e.g. "LOSAI-2026-016" */
  code?: string;
  /** Italic Cormorant address or descriptor */
  project?: string;
  tabs?: (string | { label: string })[];
  activeTab?: string;
  onSelectTab?: (label: string) => void;
  /** gold (default) or ink, when gold is spent elsewhere in the view */
  activeTone?: "gold" | "ink";
  /** Mark width in px — 140 by default */
  markWidth?: number;
  style?: React.CSSProperties;
}

export declare function DocMasthead(props: DocMastheadProps): JSX.Element;
