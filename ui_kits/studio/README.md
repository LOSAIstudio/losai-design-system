# Studio UI kit

The client-facing project surface for LOSAI studio — one masthead, three screens, composed entirely from the v3 primitives.

| File | Screen |
|---|---|
| `Shell.jsx` | Masthead, desk-on-paper page frame, footer, nav bridge |
| `ProjectRecord.jsx` | Photographic Cover, lead line, note, spec rows, figure card, site thumbnails, phase schedule |
| `Documents.jsx` | Filter tags, bordered document cards, caution callout, request form, pager |
| `FeeSchedule.jsx` | Status badges, meta row, fee table with total, pull quote, next-invoice figure card |

Open `index.html` and use the masthead nav (Record / Documents / Fees) to move between screens.

Notes
- No project photography was supplied, so the Cover and image cards fall back to the `#ece9e0` image ground. Drop real files in `assets/photography/` and pass `image="…"`.
- **Gold bears one element per screen.** The table index column carries it on Record and Fees; the card index numerals carry it on Documents. Everything else that *could* be gold is explicitly turned off — the masthead's active underline runs ink (`activeTone="ink"`), the selected thumbnail's tick is ink (`accent={false}`), and the Fees pull quote's opening mark is ink (`accent={false}`). If you add a gold mark, switch one of these back off.
