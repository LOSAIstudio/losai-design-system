# Masthead — measured from the 146 E 89th client portal

Source: the screenshot of `cp-146-e89-demo.vercel.app/?v=losai-leo`, captured at DPR 1 — so every number below is an exact CSS pixel, not an estimate. Recorded here so the component can be rebuilt from source the moment the repo is readable.

**Status: not yet implemented.** `losai-platform-v2` (branch CP DEMO) and `losai-design-system` both 404 for this connection, and the vercel domain is not fetchable. These are measurements, not code.

## Structure

Two rows, both full-bleed on warm paper `#f4f1ea`:

1. **Action row** — lockup left, button group right-justified. Under the buttons, right-aligned: a welcome line and a secure-actions line.
2. **Tab row** — text nav, left-aligned to the mark, below a full-width rule.

```
┌──────────────────────────────────────────────────────────────┐
│  LOSAI  │ ARCHITECTURE & DESIGN     [PRIVATE STUDIO] [ACTIVE │
│         │ 146 East 89th Street, NY   PROJECT] [E-SIGN] [CART]│
│                                          Welcome, Carolina   │
│                                          SECURE ACTIONS +    │
├──────────────────────────────────────────────────────────────┤  1px #c8c4b8
│  OVERVIEW   PROPOSAL                                         │
├──────────────────────────────────────────────────────────────┤  1px #d8d2c4
```

## Lockup (differs from the footer lockup — wider mark-to-rule gap)

| Part | Value |
|---|---|
| Mark | 190 × 39px (aspect 4.87) at x=515, y=131 |
| Mark → hairline gap | 51px (the footer's is 30px) |
| Vertical hairline | 1px × 46px, `#c8c4b8`, x=755 |
| Hairline → text gap | 24px (x=779) |
| Discipline line | JetBrains Mono **12px / 0.15em** caps — 9px character pitch, 9px cap height |
| Address line | Cormorant italic **~20px**, tagline blue, 21px ascender-to-descender |

The mark at 190px is 12.4% smaller than the footer's 217px — which is what the "reduce the wordmark 10%" note was pointing at.

## Buttons — right-justified group

| Part | Value |
|---|---|
| Height | 45px |
| Gap | 13px |
| Border | 1px `#c8c4b8` |
| Label | Mono **12px / 0.15em** caps, 9px pitch |
| Padding | ~16px vertical, ~20px horizontal |
| Widths | PRIVATE STUDIO 162 · ACTIVE PROJECT 162 · E-SIGN 91 · CART 73 |
| Last button | Ink fill `#1c1a17`, paper label — the only filled one |

## Account lines (right-aligned, under the buttons)

| Part | Value |
|---|---|
| Welcome | Cormorant italic ~20px, tagline blue, rows 206–225 |
| Secure actions | Mono caps, `#a49b8a`-ish warm grey, rows 242–250 |

## Tab row

| Part | Value |
|---|---|
| Text | Mono **14px / 0.18em** caps — 11px pitch, 11px cap height |
| Gap between tabs | 39px |
| Active | `#823930` text with a 1px `#823930` underline 12px below the text |
| Inactive | `#b58c84` (the same red at ~55% on warm paper) |
| Left edge | x=506, aligned with the mark |

## Rules

| Rule | Value |
|---|---|
| Under the action row | 1px `#c8c4b8` at y=269 |
| Under the tab row | 1px `#d8d2c4` at y=333 |

## Note on colour extraction

Single darkest pixels came back as false reds and blues — LCD subpixel fringing on thin strokes. Every colour above is an average: solid 1px rules averaged along their whole length, text averaged over its darkest quartile. The oxide red is real, confirmed on an 88px-long solid rule.
