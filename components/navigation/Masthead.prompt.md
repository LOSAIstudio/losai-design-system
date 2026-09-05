Top of every page: the standing `Lockup` for brand surfaces, or the compact `Masthead` for project screens.

```jsx
<Lockup logoSrc="assets/logo-losai-ink.png" />
<Lockup logoSrc="assets/logo-losai-paper.png" tone="paper" scale={0.7} />
<Masthead
  logoSrc="assets/logo-losai-ink.png"
  code="W84 · 2025-114"
  items={[{label:"Schedule"},{label:"Documents"},{label:"Fees"}]}
  active="Documents"
/>
```

**The lockup is never rebuilt.** `Masthead` and `Cover` both place this same `Lockup` with `tight`, which crops the ground away and leaves the 45px content band. Nothing is re-composed from the parts — never pair the mark with your own hairline and label.

**Lockup is the identity, and its geometry is measured — not composed.** The box is 731×132px; the mark sits at 27,47 at 217px wide; the 1px×45px #c8c4b8 hairline at 274,46; the text column at x=298, with "ARCHITECTURE & DESIGN" in mono 11.43px/0.15em caps #8f877f at y=46.3 and the tagline in italic Cormorant 21.22px/1.15 #53597e at y=62.4. Ground #f4f1ea. Every part is absolutely positioned so font metrics can never shift the composition. Use `scale` to resize the whole thing; never edit an individual number.

**The second line is a slot.** `tagline` defaults to blank. Pass the tagline on brand surfaces and the **project in serif** ("West 84th Street") on every working surface — masthead, cover, footer. Never leave it empty beside a filled discipline line. `Masthead` feeds `descriptor || code` into it.

**The discipline line aligns with the top of the mark** — its capitals and the mark's cap-height share one horizontal.

**Variants.** `losai` (LOSAI alone — the default), `signature` (LOSAI studio, where the mark must say studio on its own), `type` (Cormorant stand-in when no mark file loads). Omitting `logoSrc` renders the stand-in automatically, set at 47.8px so its glyphs fill the mark's 217px slot — the rule and text stay put.

**Sizing rule: width, never height.** `Wordmark` takes `width` and derives everything else, including the serif's font size (`width / 4.537`). That is what keeps all three variants the same width.

**Square stamp.** `<Stamp src="assets/logo-square-paper.png" size={96} />` for avatars, favicons, social profiles and seals. This is separate artwork — an open square bracket enclosing the name — at 70% of the edge with a 15% margin, square corners. `tone="ink"` reverses it. It introduces no colour of its own — ground `--losai-cp-paper`, mark `--losai-cp-wordmark-ink`. **Minimum 24px**; below that the hairline bracket closes up, so use the horizontal mark instead. The only lockup that omits the discipline line.

**Masthead is the client portal's header, reproduced from source** — `apps/client-portal/app/components/PortalShell.tsx` and the `.pf-*` rules in `globals.css` (losai-platform-v2, branch `v2-main`).

```jsx
<Masthead
  logoSrc="assets/losai-wordmark-studio.png"
  project="146 East 89th Street, New York"
  actions={[
    {label:"Private Studio", variant:"studio"},
    {label:"Active Project", variant:"project"},
    {label:"E-sign", variant:"esign"},
    {label:"Cart", variant:"cart"}
  ]}
  welcome="Welcome, Carolina"
  tabs={["Overview","Proposal"]}
  activeTab="Overview"
/>
```

Two rows on `--losai-cp-paper`:

1. **Action row** — the lockup left; the button group right-justified with a 10px gap; the welcome line and the collapsed "Secure actions +" strip beneath it. The mark is the padded `losai-wordmark-studio.png` at **44px** (50px in the footer). The meta block carries the hairline as its own `border-left` with 18px padding, and the brand gap is 18px.
2. **Tab row** — text nav below a 1px `#c8c4b8` rule, aligned to the mark. Active is **Mediterranean red #823930** with a 1px underline of the same; inactive is **beige #bc9381**. Tabs sit 39px apart.

Only **Cart** takes the ink fill; **Private Studio** is a disabled hairline in `--losai-label`. The discipline line is mono 9px/0.18em; the project line is italic Cormorant 500 17px in **Mediterranean blue #4c586e** — the same treatment the footer gives the tagline.

Button padding (16px/20px) and label size (12px/0.15em) came from a DPR-1 capture of the deployed portal; the stylesheet's `.pf-btn` base block was not readable.
