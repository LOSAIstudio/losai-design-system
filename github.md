repo: LOSAIstudio/losai-design-system
branch: main

## Last sync
date: 2026-09-05T16:05:00Z
- Fixed the font pipeline: the flattened @import was being dropped, so every page fell back to Georgia. A real <link> now sits in each page head, ds-page.js injects one per card frame, and the bundled deliverables embed the woff2 faces
- Corrected two stale type captions to the 301 scale (display 60/1.06/−0.01em, title 34, lede 19, value 29)
- Added three colour test cards for selection: stamp ink × Mediterranean ground, stamp colour pairs (gold on red, blue on orange), imageless cover ground
- Added _reviews/ and a one-file LOSAI Working Samples v3.html for review without unpacking

## Sync history
### 2026-09-04
date: 2026-09-04T19:05:00Z
- Replaced the extracted marks with the real brand artwork (dark grey, white, black, padded studio wordmark)
- Adopted the authoritative palette: corrected tagline blue to #4c586e, added the four Valcucine campaign colours as a separate group
- Added --losai-cp-paper #f4f1ea and --losai-cp-wordmark-ink #514c47
- Rebuilt Nav/Masthead from the client portal source

## Secondary source
repo: LOSAIstudio/losai-platform-v2
branch: v2-main
path: apps/client-portal

## Screen map
| Project file | Built from |
|---|---|
| components/navigation/Masthead.jsx | losai-platform-v2 apps/client-portal/app/components/PortalShell.tsx + app/globals.css (.pf-*) |
| tokens/colors.css | losai-design-system src/tokens/colors.ts + src/styles/losai.css |
| tokens/typography.css | losai-design-system src/tokens/typography.ts |
| assets/logo-losai-ink.png | losai-design-system preview/brand/losai-logo-darkgrey.png |
| assets/logo-losai-paper.png | losai-design-system preview/brand/losai-logo-white.png |
| assets/losai-wordmark-studio.png | losai-design-system preview/brand/losai-wordmark-studio.png |
| guidelines/color-valcucine*.card.html | losai-design-system src/tokens/colors.ts |
