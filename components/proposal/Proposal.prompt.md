A modular fee schedule whose numbers move: toggle a service and its card subtotal and the grand total recompute in the same frame.

```jsx
<Proposal
  cards={[{
    id: "ph1", index: "01", title: "Phase I", subtitle: "The minimum viable project",
    modules: [
      { id: "pd", code: "PD-1", name: "Pre-design", phase: "Complete", feeCents: 350000, required: true },
      { id: "sd", code: "SD-2", name: "Schematic design", phase: "Current", feeCents: 680000 },
      { id: "dd", code: "DD-3", name: "Design development", feeCents: 920000, uncertain: true }
    ]
  }]}
  note="Selecting a service adds it to the signature; the total follows."
/>
```

Reproduced from `docs/refs/cp-v2/CP_v2.html` in `losai-platform-v2` — the 301 18th proposal.

**Money is held in cents** and formatted only at the edge, via `money(cents)` → `'$' + Math.round(cents/100).toLocaleString('en-US')`. Never store a formatted string, and never round before summing.

**The tick is the whole control.** A 22px square with a 1.5px `--losai-cp-rule-strong` border that fills ink with a paper tick when on. Unselected rows drop to 55% rather than disappearing, so the client can see what they are not buying. `required` modules render the tick without a cursor.

**Uncertain numbers are marked, not hidden.** A fee derived from an unconfirmed figure renders in `--losai-cp-uncertain` (#dab050) with a dashed underline and the tooltip "Derived from an unconfirmed area — firms up when the area is confirmed". If any selected module is uncertain, the card subtotal and grand total inherit the mark — uncertainty propagates upward.

**Every value comes from `docs/refs/cp-v2/CP_v2.html`** (losai-platform-v2, `v2-main`), lines 80–101. The row grid is `40px 66px 1fr 210px 120px 26px` at `gap:16px` and `padding:20px 0`, separated by `1px solid var(--rule)` with no rule on the last row; unselected rows sit at `opacity:.42`. The tick is 22px with a 1.5px `--rule-strong` border and a 13px glyph. Code is mono 10px/0.13em with `padding-top:6px`; the name is 20px/1.25; the detail line 14px italic; the fee 19px right-aligned with `padding-top:4px`. Scope bullets are 14.5px on dotted separators with a leading-zero mono counter at 9.5px; deliverables are 13.5px italic under a 9.5px/0.15em mono heading. Do not round any of these.

**One reconciliation.** The source keeps bullets and deliverables permanently visible and uses the 26px slot as a remove control. The studio's reference sheet shows them revealed by a `+` toggle in that slot, with a duration in the 210px column — so the geometry and type are the source's exactly, and only the disclosure behaviour follows the sheet.

**Colour behaves exactly like `Table`.** No background of its own — it sits on whatever paper it is placed on — and rows tint to `--losai-tint` on hover. Structural rules are 1px `--losai-rule-strong`, internal separators 0.5px `--losai-rule`. The total closes on a hairline like any other total row; the emphasis comes from the 52px Cormorant Light figure at −0.02em, not from a heavier rule. Card subtotals sit at 29px.

**The roll is an addition, not from source.** `CP_v2.html` swaps the total with a plain `textContent` assignment. The count-up tweens the cents value over 520ms on the system's ease-out curve (420ms for card subtotals), formats only at the edge, sets `tabular-nums` so digits do not jitter, and is skipped entirely under `prefers-reduced-motion`.
