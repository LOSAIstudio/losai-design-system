LOSAI studio — Design System v3
Leo Sguera. © LOSAI studio 2026. Confidential — use by consent only.


▸ EXTRACT THE ZIP FIRST. Do not open files from inside it.
  Windows lets you double-click a file while it is still zipped, but it only
  unpacks that one file, so anything that needs its neighbours breaks and
  you get grey boxes and missing logos. Right-click the zip → Extract All.

  The three files in THIS folder are self-contained and work anywhere, even
  emailed on their own. Everything outside this folder is source and needs
  the whole extracted project around it.


THE FILES
─────────

LOSAI Working Samples v3.html
    NEW — the fastest sanity check. Every shipping card at its authored
    size in one scrolling page: the square stamp tests first, then type,
    masthead, cover, components, table, colour and the open questions.
    Self-contained, fonts embedded — open it or email it as-is.


LOSAI Design System v3.html
    The design system. 36 live cards: Brand, Colors, Mediterranean, Type,
    Spacing, Components, Studio, plus the readme and the project template.
    "Edit tokens" in the header opens the editor — change any colour or
    either typeface and all 36 cards move at once. "Export CSS" gives a
    paste-ready :root{} block for a new version. "Reset" restores defaults.

LOSAI Brand Standards v3.html
    The written standards — 31 pages of rules, specimens and values.
    ALSO THE PDF: open it, print (Ctrl+P), choose "Save as PDF".
    Page numbers appear only in the PDF; they stay hidden on screen.
    Letter, 31 pages, numbers bottom right.

LOSAI Interactive Reference v3.html
    A guided walkthrough of the components with the notes for developers
    and agents. Optional; the design system page covers the same ground.


WHAT IS THE DIFFERENCE?
───────────────────────
    Working Samples ........ every card on one page, nothing to click.
                             Send this when someone just needs to see it.
    Design System v3 ....... the cards. What everything looks like, live,
                             and the place to change the tokens.
    Brand Standards v3 ..... the written rules. The document you hand to a
                             developer, a printer or a new hire. This is
                             the one you turn into a PDF.
    Interactive Reference .. the components demonstrated one at a time
                             with usage notes. A teaching aid.


THE SOURCE (outside this folder)
────────────────────────────────
    readme.md                     the guide — read this first
    styles.css                    the one stylesheet a project links
    tokens/                       colour, type, spacing, borders, motion
    components/                   23 components: props, notes, demo card
    guidelines/                   the foundation specimen cards
    templates/                    the project-page template
    ui_kits/studio/               a three-screen client-facing surface
    assets/                       wordmark, emblem, every recolour
    standards/                    the standards document source
    LOSAI Design System v3.html   the design system page, unbundled —
                                  needs the extracted project around it
    SKILL.md                      wrapper for use in Claude Code
    github.md                     source repositories and screen map

BUILD 05-09-A — Cormorant Garamond is embedded in these files as woff2,
not fetched from Google. Type renders at the 301 scale (display 60/1.06
at −0.01em, title 34, lede 19, all weight 300) with no network and no
Georgia fallback. Two colour questions are still open and marked "test":
the stamp ink on the Mediterranean grounds, and the cover ground when
there is no photograph.

Generated or build-only — ignore, and do not commit:
    _ds_bundle.js  _ds_manifest.json  _adherence.oxlintrc.json
    _slim/  _slimmap.json  _standalone-source.html  styles-nofont.css
    _slim-build.html  _reviews/  screenshots/
    interactive/  uploads/
