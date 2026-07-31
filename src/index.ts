/**
 * LOSAI studio — Design System
 * Architecture & Design · New York
 *
 * Two typefaces only (Cormorant Garamond · JetBrains Mono), warm paper,
 * hairline borders, square corners, antique gold accent. See README.md.
 *
 * Import the stylesheet once at your app root:
 *   import 'losai-design-system/styles/losai.css';
 * and put className="losai" on <body>.
 */

// Components
export * from './components/index.js';

// Design tokens (single source of truth)
export { color, colorDark, font, fontImportUrl, space, border, tokens } from './tokens/index.js';
export type { ColorToken, FontSize, SpaceToken, LosaiTokens } from './tokens/index.js';

// Utilities
export { cx } from './utils/cx.js';
export type { Base } from './utils/cx.js';
