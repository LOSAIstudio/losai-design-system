---
name: losai-studio-design
description: Use this skill to generate well-branded interfaces and assets for LOSAI studio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the readme.md file within this skill — its "Start here — for a developer" section first — and explore the other available files.

Non-negotiables, before you write a line: put the Google Fonts `<link>` in the head and never rely on the `@import` in `tokens/fonts.css` surviving a build (it does not; the page silently falls back to Georgia). Cormorant Garamond display/title/values are weight **300** with negative tracking (display 60/1.06/−0.01em, title 34/−0.005em, lede 19, card 21, value 29/−0.01em, prose 17/1.55, sub 14 italic); JetBrains Mono is always uppercase with positive tracking. Verify with `document.fonts.check('300 60px "Cormorant Garamond"')` before you show anyone anything. One gold per view. Use `var(--losai-*)`, never pasted hex.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
