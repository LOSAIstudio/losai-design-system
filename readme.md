# LOSAI studio — Design System v3

**LOSAI studio · Architecture & Design · New York.**

An architecture practice's design system, built for the surfaces a studio actually ships: project records, drawing archives, fee schedules, proposals and covers. It is deliberately narrow — two typefaces, one accent, one alert, no shadows, no gradients, no rounded corners. The restraint is the brand.

## The name

**LOSAI** is *loci* — `/ˈloʊ.saɪ/`, the plural of *locus*. The studio takes its name from the **method of loci**, the classical memory technique that binds what you want to remember to a place you already know. The practice describes itself as a team of **placemakers**: buildings are designed as anchors for experience and memory, not only as functional shells.

That idea governs the system's restraint. A page is a place — ordered, quiet, and legible enough to be remembered. Ornament competes with recall, so there is none.

**Practice:** New York. Residential and commercial — apartments, townhouses, homes, multifamily, restaurant &amp; bar.

**Representative projects** (from losai.studio): Duplex Penthouse, Flatiron District · Landmark Townhouse &amp; Rear Addition, Park Slope · Mass Timber Townhouse, Park Slope · Tobacco Modern Barn, Nissequogue · Wave Residential Tower, Beirut · Workshop Kitchen &amp; Bar, Palm Springs · Rooftop Lounge, Nomad · Tartinery Restaurant, Soho. Use these for realistic placeholder content rather than invented project names.

## Repository

**[github.com/LOSAIstudio/losai-design-system](https://github.com/LOSAIstudio/losai-design-system)** — the system's home. Clone it, then link `styles.css` and load `_ds_bundle.js`.

The client portal and the CP v2 proposal this system draws on: **[github.com/LOSAIstudio/losai-platform-v2](https://github.com/LOSAIstudio/losai-platform-v2)**, branch `v2-main` — the masthead at `apps/client-portal/app/components/PortalShell.tsx`, the proposal at `docs/refs/cp-v2/CP_v2.html`.

## Sources

| Source | Status |
|---|---|
| Written specification v3 | Authoritative — the system is built from it |
| Supplied lockup image | Measured for identity geometry and colour |
| `losai.studio` | Read — name origin, positioning, project list, nav convention |
| `github.com/LOSAIstudio/losai-design-system` | Read — brand artwork and the authoritative palette |
| `github.com/LOSAIstudio/losai-platform-v2` (`v2-main`) | Read — client portal masthead, and the CP v2 proposal reference |


---

## Start here — for a developer

**Three lines to consume the system.** In this order, in the page head:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Then read components off the global: `const { Button, Cover, Table } = window.LOSAIStudioDesignSystem_3a6277`.

### The font trap — read this before anything else

No font binaries ship with this repo. `tokens/fonts.css` pulls Cormorant Garamond and JetBrains Mono from Google Fonts with an `@import`, and **an `@import` is only honoured at the very top of its own stylesheet.** Any build step that concatenates or inlines CSS — a bundler, a single-file export, a CMS that wraps your styles — will push that `@import` below other rules, the browser drops it silently, and every page falls back to Georgia. Nothing errors. It just looks wrong: heavy, tight, and not the brand.

Two safe paths, and no third:

1. **Keep the `<link>` in the head**, as above. Ordering rules do not apply to link elements. This is what every page in this repo does.
2. **Self-host.** Download the two families, write real `@font-face` rules with local `src` paths (`@font-face` is valid anywhere in a sheet), and use `styles-nofont.css` as your entry point instead of `styles.css` so nothing tries to reach Google.

To prove it in one line, in the console: `document.fonts.check('300 60px "Cormorant Garamond"')` must return `true`. If it returns `false`, stop — the type is wrong no matter what the screenshot looks like.

### The three things most often got wrong

**Weight.** Display, title and values are Light — **300**. Not 400. The airiness is the voice; at 400 it reads as a different typeface. Never let the browser synthesise a weight — the system sets `font-synthesis-weight: none` for that reason.

**Tracking.** Display is `−0.01em`, title `−0.005em`, values `−0.01em`. Default tracking undoes the scale. Mono runs the other way: always uppercase, always positive tracking (0.12em–0.20em).

**One gold per view.** `#a5824e` marks a single thing per screen. Two golds in one view is a bug, not a preference. Alert `#9c3f2c` is errors only, and tagline blue `#4c586e` sets the italic tagline and nothing else — never a button, border, badge or chart.

### Do not hand-set what the tokens already say

Everything is a custom property (116 of them). Use `var(--losai-*)`; do not paste hex values into components. If a value you need does not exist as a token, that is a question for the studio, not a local override.

### Two decisions are still open

Marked "test" in the design system page, awaiting selection — do not build on either yet:

- **Stamp ink on the Mediterranean grounds** — `guidelines/brand-stamp-mediterranean.card.html` and `guidelines/brand-stamp-pairs.card.html`
- **Cover ground when there is no photograph** — `guidelines/cover-ground.card.html`

Until they are settled, an imageless cover stays on ink `#1c1a17`, and the stamp stays paper ground with the mark in `#514c47`.

---

## Index

| File | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/colors.css` | Surfaces, ink, rules, gold, alert, plus the `.losai-dark` scope |
| `tokens/typography.css` | The two families and both scales |
| `tokens/spacing.css` | 4 → 96 scale, gutters, the 150px spec-label column |
| `tokens/borders.css` | Hairline definitions, square corners, focus ring |
| `tokens/motion.css` | Easing and durations |
| `tokens/base.css` | Reset, link colours, mono label utility classes |
| `tokens/fonts.css` | Cormorant Garamond + JetBrains Mono (Google Fonts) |
| `components/` | The eight component families (below) |
| `guidelines/` | Foundation specimen cards — Colors, Type, Spacing, Brand |
| `ui_kits/studio/` | Three-screen client-facing project surface |
| `assets/logo-losai-black.png` | **The official wordmark** — black, transparent, 1373×276. The source file; never placed directly. |
| `assets/logo-signature.png` | The LOSAI studio signature (black source file — never placed directly) |
| `assets/logo-ink.png` · `logo-paper.png` | Signature mark, recoloured (8.38:1) |
| `assets/logo-losai-ink.png` · `logo-losai-paper.png` | LOSAI-only mark, recoloured (4.975:1) |
| `assets/logo-square-paper.png` · `logo-square-ink.png` · `logo-square-mark.png` | The emblem — square stamp for avatars, favicons and seals (1373×1373 master) |
| `standards/LOSAI-Brand-Standards-v2.html` | Brand &amp; system standards, print-ready |
| `standards/LOSAI Brand Standards v3.html` | The same document, self-contained for sharing |
| `ds-page.js` | Card fitting, scroll-spy and the token editor for the design system page |
| `LOSAI Design System v3.html` | The design system page — 33 live cards, live token editor |
| `_incoming/` | The shareable deliverables: design system, standards, print-to-PDF |
| `github.md` | Source repositories and the screen map |
| `CLAUDE.md` | Standing project instructions |
| `SKILL.md` | Agent Skills wrapper for use in Claude Code |

## Components

Each directory carries `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and a `@dsCard` demo page. Read the `.prompt.md` before using a component — it holds the rules the props do not express.

**Intentional additions.** Checkbox, Radio, FigureCard, Thumbnail, SpecRows, MetaRow, Wordmark, Breadcrumbs, Pager and Tag are named inside the v3 spec as parts of the eight families, so they ship as siblings of their parent rather than as new families. `Lockup`, `Stamp` and `Proposal` were added from source: the first two reproduce the studio footer and the supplied emblem, the third reproduces the CP v2 proposal.

---

## Content fundamentals

**Voice.** Plain, exact, unhurried. The studio writes the way it draws: it states what is, then stops. Sentences are declarative and often short. Nothing is exclaimed.

**Person.** Third person for the record, second person for the client. "Drawings are issued for coordination only until the DOB filing is stamped." "Two documents are still marked draft and should not be forwarded to the board." The studio rarely says "we", and never says "we're excited to".

**Casing.** Sentence case for everything written in Cormorant — titles, card headings, prose, buttons-as-sentences. UPPERCASE for everything set in JetBrains Mono, without exception: eyebrows, labels, captions, badges, nav, button labels, table headers. There is no third register. The studio name is always written **LOSAI studio** — capitals then lowercase — never "LOSAI Studio", never all-caps in body copy.

**Labels.** Mono labels are nouns, two or three words at most: `ISSUED`, `PHASE 03`, `DESIGN DEVELOPMENT`, `W84_EXT_03.TIF`. They never form a sentence and never take a verb.

**Numbers and dates.** Dates are written out — "14 January 2026" in prose, "14 Jan 2026" in mono. Money is exact and unrounded: `$29,700`, not `$30k`. Phases are two-digit: `01`, not `1`.

**Italics.** Reserved for the secondary voice: a subtitle, a descriptor, a lead line, the second line of a Cover title, a helper text. Italic is never used for emphasis mid-sentence.

**Emoji.** None. Ever. There are no emoji anywhere in this system, and none should be introduced. The one permitted non-alphabetic glyph is the arrow `→` in an action label ("Open →", "View schedule →"), plus `✓` for a selected state and `/` as a breadcrumb separator.

**The underscore nav.** The studio's own site prefixes primary navigation with a low line — `_about`, `_projects`, `_services`, `_journal`, `_contact us` — set lowercase. It reads as a field waiting to be filled: a place before it is named. Use it for primary site navigation only; never in mono capitals, never on buttons, never in prose.

**Tone examples.**
- Good: *"A brownstone rebuilt around the way its owners actually move through a day."*
- Good: *"Cellar floor plans fall outside the current fee agreement."*
- Wrong: *"We're thrilled to share your updated designs! 🎉"*
- Wrong: *"Unlock premium insights into your project journey."*

---

## Visual foundations

**Colour.** Warm paper `#faf9f5` is the page; `#e6e5e1` is the desk it sits on; `#f4f2ec` tints an active row; `#ece9e0` holds a photograph before it loads. Text descends `#1c1a17` (ink) → `#3a352e` (prose) → `#8a8375` (label) → `#a8a297` (faint) → `#c8c4b8` (disabled). There is no blue, no green, no purple; there is no success colour — completion is stated in words.

**Gold, once.** Antique gold `#a5824e` marks exactly **one element** per view — a table's index column, *or* the active nav underline, *or* an "In review" badge, *or* a selected thumbnail's tick. One bearer, not one pixel: an index column of seven numerals is a single mark. Every component that can carry gold takes an opt-out, so the choice is explicit — `Masthead activeTone="ink"`, `Thumbnail accent={false}`, `Callout variant="quote" accent={false}`. If a view shows two gold bearers, one is a mistake. Gold is **never** placed over imagery.

**Alert, only for error.** `#9c3f2c` appears on a field's error underline and message, and on the Caution callout's 5px square and label. It is never a badge, never a chart colour, never a highlight.

**Identity.** The default is the **lockup**, measured from the studio's own footer: the LOSAI mark (no "studio") 217×44px, a 31px gap, a 1px×45px `#c8c4b8` hairline, a 24px gap, then "ARCHITECTURE & DESIGN" in mono 12.5px/0.15em caps `#8f877f` over the tagline *"Designing city and country homes as places of refuge."* in italic Cormorant 20px/1.15 `#53597e`. Ground `#f4f1ea`, padding 46/36/42/27px. Scale it as one unit — never re-space its parts.

**Every wordmark variant is sized by width, not height** — 217px in the lockup — so swapping the mark for the signature or the serif stand-in never shifts the hairline or the text block.

**The mark never stands alone.** Wherever it appears — lockup, masthead, cover, footer — it is followed by the vertical hairline and the discipline line, ARCHITECTURE & DESIGN, in mono caps. The tagline or project code may sit beneath it, but the discipline line is not optional and the hairline is never left hanging with nothing after it.

**The emblem is the one exception.** Where the composition is square and the lockup cannot fit — an avatar, a favicon, a social profile, a seal on a drawing — the mark sits centred on a square field at 70% of the edge with a 15% margin, on ink `#1c1a17` reversed or warm paper `#f4f1ea` in `#514c47`. Square corners, never rounded. It omits the discipline line because at 16px nothing else is legible. Supplied as a 1373×1373 master — the same master width as the horizontal mark.

**Tagline blue.** `#4c586e` sets the italic tagline or descriptor line and nothing else. It is not a second accent: never a button, border, badge or chart colour, and it does not count against the single gold bearer. It lifts to `#93a3c4` in the dark scope.

**Lockup palette.** Warm paper `#f4f1ea`, mark grey `#514c47`, discipline `#8f877f`, rule `#c8c4b8`, tagline `#4c586e` — exposed as `--losai-cp-paper`, `--losai-cp-wordmark-ink` and `--losai-tagline`.

**Type.** Two families and nothing else. The scale is read from the 301 18th reference (`docs/refs/cp-v2/CP_v2.html`); display and title are Light with negative tracking, and that airiness is the voice — 400 weight or default tracking reads as a different typeface. **Cormorant Garamond** (300/400/500 + italics) is the voice: display 60/1.06 at −0.01em, title 34 at −0.005em, lede 19, card 21, value 29 at −0.01em, prose 17/1.55, sub 14 italic — display, title and values are Light (300). **JetBrains Mono** (400/500) is the information layer and is always uppercase: eyebrow 9px/0.20em, label 8px/0.16em, caption 7.5px/0.12em, index 9px/0.14em in gold. Mono states the fact; Cormorant says the thing; they never swap roles.

**Spacing.** 4 · 8 · 14 · 22 · 30 · 44 · 64 · 96. Page gutter 44px (22px on small screens). Table rows take 14px of vertical padding; meta cells 14px 22px; the spec-label column is a fixed 150px. Whitespace is generous and asymmetric — an editorial page, not a dashboard grid.

**Backgrounds.** Flat paper. No patterns, no textures, no illustration, no hand-drawn marks, no repeating motifs. Photography is the only image: full-bleed on Covers, contained in image cards, always warm and architectural. No image is tinted, duotoned or filtered.

**Borders and rules.** Hairlines only. `1px #c8c4b8` is structural (page divisions, masthead close, meta-row caps, card outlines); `1px #e2dfd6` is internal (card footers, meta-cell splits); `0.5px #e2dfd6` separates table rows; `1px #1c1a17` is used only under a table header and above a figure card. Never a heavy bar, never a black slab.

**Corners.** `border-radius: 0` everywhere. The single exception in the entire system is the 14px radio's circle and its 6px dot.

**Shadows and gradients.** There are none. Depth is expressed by rules and tonal shifts. The only gradient in the system is the Cover scrim: `rgba(20,18,15,.78)` at the base to `.18` at the top, bottom-weighted so the title reads.

**Transparency and blur.** No blur, no frosted glass. Transparency appears in exactly two places: the dark scope's translucent white hairlines (`.28` structural, `.16` internal), and the Cover scrim.

**Cards.** A card is a hairline rectangle with no shadow, no fill and no radius. Bordered cards open at `1px #c8c4b8` and darken to ink on hover; a gold index numeral sits above the title; a `1px #e2dfd6` footer rule carries mono meta at the left and "Open →" at the right. Image cards have no border at all — the photograph is the edge, with a mono filename caption beneath it.

**Hover.** Ink darkens or a hairline goes ink. Buttons: primary `#1c1a17` → `#3a352e`; secondary border `#c8c4b8` → ink; text underline `#c8c4b8` → gold. Table rows take the `#f4f2ec` tint. Nothing lifts, scales or glows.

**Press.** Primary buttons go to `#000` and translate down 1px. Nothing shrinks.

**Focus.** A two-step ring: `0 0 0 1px #faf9f5, 0 0 0 2px #a5824e` — a paper gap, then gold. Fields instead turn their underline gold.

**Motion.** 0.12–0.32s on `cubic-bezier(0.22, 1, 0.36, 1)`, applied to colour, border-colour, background and opacity only. No entrance animations, no parallax, no bounce, no easing-in from below. If a page moves at all, it is because a value changed.

**Layout.** A centred 1280px page of paper on a `#e6e5e1` desk. The masthead is a single row closed by a structural rule; the footer mirrors it. Content sits in two-column editorial splits (roughly 1.4fr / 1fr) rather than equal grids. Nothing is fixed or sticky.

**Dark.** `.losai-dark` re-declares the tokens: paper `#1c1a17`, ink `#faf9f5`, prose `#d8d5cc` (never pure white), label `#b5ae9f`, faint `#8a8375`, gold lifts to `#c49a5c`, alert to `#c96a52`, hairlines to `rgba(250,249,245,.28)` and `.16`. Primary buttons invert to a paper fill with ink text. Over imagery, gold is dropped entirely.

---

## Iconography

**There is no icon set, and none should be added.** The system carries no icon font, no SVG sprite, no PNG glyphs, and links to no icon CDN. Status, action and navigation are all named in mono capitals — `AWARDED`, `IN REVIEW`, `OPEN →` — because a word is more precise than a pictogram and reads correctly at 8px, which no icon does.

Permitted non-alphabetic glyphs, used sparingly and always in the current text colour:

| Glyph | Use |
|---|---|
| `→` | Trailing an action label or card footer |
| `←` | A back action, rarely |
| `✓` | A checked checkbox, and a selected thumbnail (gold, 14px) |
| `/` | Breadcrumb separator, in `#c8c4b8` |
| `“` | The gold opening mark of a pull quote |
| `·` | Joining metadata fragments — "Upper West Side · 2025—2027" |

Solid squares stand in where an icon would otherwise go: a 5px `#a5824e` square marks a live item, a 5px `#9c3f2c` square marks a caution, a 4px `#9c3f2c` square marks a field error. They are drawn with a `<span>`, never an SVG.

Emoji are never used, in any surface, for any reason.

**The wordmark** has three variants, all sized by **width** so lockups stay aligned: **losai** (LOSAI alone — the default, and what the lockup uses), **signature** (LOSAI studio, where the mark must say studio on its own), and **type** (the Cormorant stand-in when no mark file loads). `assets/logo-signature.png` is the black source file and is never placed directly; four recoloured PNGs ship instead — `logo-losai-ink.png` and `logo-ink.png` (#514c47) on paper, `logo-losai-paper.png` and `logo-paper.png` (#faf9f5) over imagery or dark. Proportions locked, never stretched, never on a coloured field other than paper, ink or a photograph.

The serif stand-in sets the name in Cormorant 500 capitals with the italic "studio" at `font-size: 0.56em`, baseline-aligned, with a 0.3em space, in a block matched to the mark's width.

---

## Components

| Component | What it is |
|---|---|
| `Button` | Ink, outline and text actions in three sizes |
| `Field` · `Checkbox` · `Radio` | Underline input, boxed textarea, tick box, radio dot |
| `Card` · `FigureCard` · `Thumbnail` | Image and bordered records, money figures, selectable thumbnails |
| `Table` · `SpecRows` · `MetaRow` | Schedules, project facts, ruled meta columns |
| `Masthead` · `Breadcrumbs` · `Pager` | The client portal header, trail and pager |
| `Lockup` · `Wordmark` · `Stamp` | The identity lockup, the mark, the square emblem |
| `Badge` · `Tag` | Project state, and toggleable filters |
| `Callout` | Note, caution, pull quote and lead line |
| `Cover` | Full-bleed dark or photographic cover |
| `Proposal` | Modular fee schedule whose subtotals and grand total recompute live |

## Mediterranean palette

A separate palette, held apart from the core neutrals — warm, sun-bleached, southern. Sampled from the flat bands of a campaign cover and ruled 2026-08-21.

| Token | Value | Use |
|---|---|---|
| `--losai-med-blue` | `#4c586e` | The italic tagline, descriptor and project lines |
| `--losai-med-red` | `#823930` | The portal's active tab and its 1px underline |
| `--losai-med-orange` | `#b96e4f` | Campaign only |
| `--losai-med-beige` | `#bc9381` | Campaign; reads as a lighter gold, and the portal's inactive tab |

These do **not** replace antique gold as the accent, and they are not a licence for a second accent in one view. Blue is the only one with an interface role beyond the portal.

The client-facing surface tokens travel with them, read from `docs/refs/cp-v2/CP_v2.html`:

| Token | Value | Use |
|---|---|---|
| `--losai-cp-paper` | `#f4f1ea` | Always the ground of the client portal and the website |
| `--losai-cp-wordmark-ink` | `#514c47` | The mark's uniform ink |
| `--losai-cp-uncertain` | `#dab050` | A lighter gold marking a derived or unconfirmed number |
| `--losai-cp-accent` | `#cd9181` | Warm rose-tan — hovers, beacons and focus underlines |
| `--losai-cp-card` · `--losai-cp-tint` | `#f7f5ef` · `#ebe7dc` | The proposal's own card and tint grounds |
| `--losai-cp-rule` · `--losai-cp-rule-strong` | `#d8d2c4` · `#b9b1a0` | The proposal's own rules |

## Missing materials

- **`.pf-btn` base metrics.** The portal's button padding (16px/20px) and label size (12px/0.15em) were taken from a DPR-1 capture of the deployed site; that CSS block was not readable.

- **Fonts** are loaded from Google Fonts; no font binaries were supplied, so `tokens/fonts.css` links the CDN. If the studio licenses desktop or self-hosted files, drop them in `assets/fonts/` and replace that `@import` with `@font-face` rules.
- **Photography** was not supplied. Covers, image cards and thumbnails fall back to the `#ece9e0` image ground. Add real files under `assets/photography/` and pass them via the `image` prop.
