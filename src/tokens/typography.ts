/**
 * LOSAI studio — typography tokens
 * Two families only: Cormorant Garamond (voice — titles, prose, values)
 * and JetBrains Mono (information — labels, eyebrows, codes, prices, nav).
 * Mono is always uppercase with 0.12–0.22em tracking.
 * Single source of truth — mirrored in styles/losai.css.
 */

export const font = {
  family: {
    serif: "'Cormorant Garamond', Garamond, Georgia, serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
  },
  /** px sizes */
  size: {
    display: 44,
    title: 30,
    lead: 22,
    card: 21,
    value: 17,
    prose: 16,
    sub: 12.5,
    eyebrow: 9,
    label: 8,
    caption: 7.5,
  },
  tracking: {
    wide: '0.20em',
    base: '0.16em',
    tight: '0.12em',
  },
  lineHeight: {
    display: 1.05,
    prose: 1.55,
    lead: 1.4,
  },
} as const;

/**
 * Google Fonts URL for both families with the weights/styles the system uses.
 * Imported at the top of styles/losai.css; in Next.js prefer next/font instead.
 */
export const fontImportUrl =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap';

export type FontSize = keyof typeof font.size;
