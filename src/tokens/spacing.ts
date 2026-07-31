/**
 * LOSAI studio — spacing & geometry tokens
 * Square corners everywhere (radius 0). Hairline borders only.
 * Single source of truth — mirrored in styles/losai.css.
 */

export const space = {
  buttonS: '9px 18px',
  buttonM: '14px 30px',
  buttonL: '19px 44px',
  cell: '14px 22px',
  row: '14px 0',
  sheet: '64px 72px 96px',
} as const;

export const border = {
  hairline: '1px',
  hairlineThin: '0.5px',
  /** Square corners are a non-negotiable of the system. */
  radius: 0,
} as const;

export type SpaceToken = keyof typeof space;
