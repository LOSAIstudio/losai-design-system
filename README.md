# LOSAI studio — Design System

**Architecture & Design · New York** · v3

A React + TypeScript packaging of the LOSAI studio design system. Tokens are the
single source of truth; components emit LOSAI classes from one stylesheet and hardcode
nothing. No dependencies beyond React.

```
src/
  tokens/            colors.ts · typography.ts · spacing.ts — single source of truth
    index.ts
  components/        one folder each (.tsx + index.ts)
    Button/          Button
    Field/           Field (Input + Label), Input, Textarea, Select, Checkbox, Radio
    Card/            Card, ImageCard, FigureCard, Thumb
    Table/           Table, SpecRows, MetaRow
    Nav/             Masthead, Nav, Breadcrumbs, Pager
    PortalChrome/    PortalHeader, PortalFooter, PortalSignIn — client-facing standard
    Badge/           Badge, Tag
    Callout/         Note, Caution, PullQuote, LeadLine
    Cover/           Dark, Cover (dark / over-image scope)
    index.ts
  styles/losai.css   drop-in stylesheet; :root mirrors src/tokens/*
  utils/cx.ts        class-name join helper
  tailwind.preset.ts optional Tailwind preset exposing the same tokens
  index.ts           exports everything
preview/             static showcase (Vercel output + /design-sync card source)
```

## Install into an app

```bash
npm install losai-design-system
```

1. Import the stylesheet **once** at your app root and put `className="losai"` on `<body>`:

   ```ts
   // Next.js App Router — app/layout.tsx  ·  Vite / CRA — main.tsx
   import 'losai-design-system/styles/losai.css';
   ```

2. Import components and tokens:

   ```tsx
   import { Button, Field, Input, Badge, tokens } from 'losai-design-system';

   <Button variant="primary">Submit proposal</Button>
   <Field label="Studio name" help="As it should appear in credits.">
     <Input placeholder="Type here" />
   </Field>
   ```

Fonts load via the `@import` at the top of `losai.css`. In Next.js prefer `next/font`
(Cormorant Garamond + JetBrains Mono) and delete that `@import` line, pointing
`--losai-serif` / `--losai-mono` at the font variables.

## Tokens — single source of truth

`src/tokens/` is canonical. `styles/losai.css` re-declares the same values as
`--losai-*` custom properties; keep the two in sync.

```ts
import { color, font, space, border, colorDark, tokens } from 'losai-design-system';

color.paper   // #faf9f5   ink #1c1a17   prose #3a352e
color.gold    // #a5824e   antique gold accent
color.alert   // #9c3f2c   error / caution — exact, non-negotiable
font.family.serif // Cormorant Garamond (voice)
font.family.mono  // JetBrains Mono (information)
```

## Client-facing header & footer — the standard

Ruled by Leo 2026-08-21 from the 301 18th St proposal, carried into CP_v2 as the FINAL
header/footer. **Every client-facing surface — client portal, website, proposals — uses
this chrome and no other.**

```tsx
import { PortalHeader, PortalFooter, PortalSignIn } from 'losai-design-system';

<PortalHeader
  logoSrc="/brand/losai-wordmark-studio.png"
  project="146 East 89th Street"
  activeId="proposal"
  items={[
    { id: 'proposal', label: 'Proposal', href: '#/proposal' },
    { id: 'project',  label: 'Active Project', href: '#/project' },
    { id: 'terms',    label: 'Terms', disabled: true },
  ]}
  auth={<PortalSignIn onSignIn={signIn} />}
/>
<PortalFooter logoSrc="/brand/losai-wordmark-studio.png" reference="2609" />
```

- Background is always `cpPaper` #f4f1ea.
- The wordmark is **artwork, never type** — 44px in the header, 50px in the footer,
  ink #514c47, followed by a hairline divider and ARCHITECTURE & DESIGN in mono
  9px / .18em.
- LOSAI blue #4c586e carries the project line, the footer studio line, the SIGN IN
  control and the signed-in welcome. Nothing else in the chrome is colored.
- Header is sticky, 78px tall; nav is mono uppercase, active item underlined in ink,
  disabled items in `--losai-disabled` and non-interactive.

See `preview/components/portal-chrome.html`.

## Non-negotiables

- Two typefaces only: **Cormorant Garamond** (voice — titles, prose, values) and
  **JetBrains Mono** (information — labels, eyebrows, codes, prices, nav), the latter
  always uppercase with 0.12–0.22em tracking.
- Warm paper `#faf9f5`, ink `#1c1a17`, prose `#3a352e`.
- Hairlines only — `1px #c8c4b8` structural, `1px #e2dfd6` internal. Never heavy or black bars.
- Square corners everywhere. No shadows, no gradients.
- Antique gold `#a5824e` marks **one** thing per view. Alert `#9c3f2c` only for error/caution.
- On dark, wrap in `<Dark>` (`.losai-dark`) — gold lifts to `#c49a5c`, prose to `#d8d5cc`.
  Over a photograph use `<Cover>` (`.losai-cover`) with its scrim and the white wordmark —
  **no gold at all over imagery**.

## Conventions

- Components are **unstyled by props** — they emit LOSAI classes. Override with your own
  `className`, which is always appended.
- Variants are string unions (`variant="primary" | "secondary" | "text"`); states are
  booleans (`disabled`, `selected`, `activeRow`, `error`).
- No component owns page layout — compose with your own grid/flex.
- Server-component safe except `Field`, `Tag`, and `Nav` (marked `'use client'`).

## Scripts

```bash
npm run typecheck   # tsc --noEmit
npm run build       # emit dist/ (.js + .d.ts) from src/
```

## Preview / documentation site

`preview/` is a self-contained static gallery of every component group. It is the Vercel
output directory and the source of `/design-sync` preview cards (each page carries a
`<!-- @dsCard group="…" -->` marker on line 1). Open `preview/index.html` directly, or
deploy the folder as static hosting.
