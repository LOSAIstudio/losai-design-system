/**
 * LOSAI studio — color tokens
 * Single source of truth for every color in the system.
 * Values mirror tokens/tokens.json and are re-declared as CSS custom
 * properties (`--losai-*`) in styles/losai.css. Do not hardcode hex
 * anywhere else — reference these tokens (JS) or the CSS variables.
 *
 * Non-negotiable: the alert / error color is #9c3f2c exactly.
 */

export const color = {
  // Surfaces
  paper: '#faf9f5',
  desk: '#e6e5e1',
  tint: '#f4f2ec',
  imageBg: '#ece9e0',

  // Ink / text
  ink: '#1c1a17',
  prose: '#3a352e',
  label: '#8a8375',
  faint: '#a8a297',
  disabled: '#c8c4b8',

  // Hairline rules
  ruleStrong: '#c8c4b8',
  rule: '#e2dfd6',
  ruleLight: '#ece9e0',

  // Accents — used sparingly
  gold: '#a5824e',
  alert: '#9c3f2c',
} as const;

/**
 * Dark / over-image scope. The geometry, tracking and classes are
 * identical to the paper scope — only these token values change.
 * Prose is never pure white; gold lifts to hold against dark.
 */
export const colorDark = {
  paper: '#1c1a17',
  tint: 'rgba(250,249,245,.06)',
  imageBg: '#26231f',
  ink: '#faf9f5',
  prose: '#d8d5cc',
  label: '#b5ae9f',
  faint: '#8a8375',
  disabled: '#5c574e',
  ruleStrong: 'rgba(250,249,245,.28)',
  rule: 'rgba(250,249,245,.16)',
  ruleLight: 'rgba(250,249,245,.10)',
  gold: '#c49a5c',
  alert: '#c96a52',
} as const;

export type ColorToken = keyof typeof color;
