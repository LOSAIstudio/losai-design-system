The one action control in LOSAI studio v3 — use it for every button and call-to-action; never invent a pill, rounded or shadowed button.

```jsx
<Button variant="primary" size="m">Request drawings</Button>
<Button variant="secondary" size="s">Download PDF</Button>
<Button variant="text">View the full schedule →</Button>
```

Variants: `primary` (ink #1c1a17 fill, paper label; hover #3a352e; active #000 + 1px nudge; disabled #e2dfd6 / #a8a297), `secondary` (1px #c8c4b8 border that goes ink on hover), `text` (underlined in #c8c4b8, underline and label turn gold on hover).
Sizes: `s` 9px/18px, `m` 14px/30px, `l` 19px/44px — the label is always mono 9px, 0.18em, uppercase, at every size.
Focus shows the standard ring (1px paper, 2px gold). Inside `.losai-dark`, the primary fill inverts to paper with ink text automatically.
