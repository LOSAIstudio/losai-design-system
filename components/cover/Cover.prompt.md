Opens a project page, a proposal or a deck: a dark or photographic panel carrying the reversed wordmark and the project title.

```jsx
<Cover
  image="assets/photography/w84-facade.jpg"
  logoSrc="assets/logo-losai-paper.png"
  project="West 84th Street"
  label="Project 2025-114"
  title="A brownstone"
  titleItalic="rebuilt around light"
  meta={["Upper West Side", "Design Development", "2025—2027"]}
/>
```

The header places the studio `Lockup` with `tight` — the reversed mark, the translucent hairline and the mono caps discipline line, at the lockup's own measured proportions. It is never re-composed from the parts. The lockup's second line carries the project in serif via `project` — never left empty beside a filled discipline line. Applies `.losai-dark`, so every hairline becomes translucent white and primary buttons placed inside invert to a paper fill with ink text. Over a photograph the scrim runs rgba(20,18,15,.78) at the base to .18 at the top. **Gold is never used over imagery** — no gold label, no gold rule, no gold index on a Cover with a photograph. Prose over dark is #d8d5cc, never pure white.
