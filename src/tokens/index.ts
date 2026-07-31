/**
 * LOSAI studio — design tokens (single source of truth)
 * colors · typography · spacing / geometry
 */
export { color, colorDark } from './colors.js';
export type { ColorToken } from './colors.js';
export { font, fontImportUrl } from './typography.js';
export type { FontSize } from './typography.js';
export { space, border } from './spacing.js';
export type { SpaceToken } from './spacing.js';

import { color, colorDark } from './colors.js';
import { font, fontImportUrl } from './typography.js';
import { space, border } from './spacing.js';

export const tokens = { color, colorDark, font, fontImportUrl, space, border } as const;
export type LosaiTokens = typeof tokens;
