import React from "react";

/* Coordinates measured from the studio's own footer lockup at k=1.
   Expressed relative to the 45px content band, so the SAME geometry serves
   the full lockup and the cropped masthead / cover use. The ground inset
   (pl/pt/pb) is the only thing that changes. Do not re-derive these. */
const L = {
  boxW: 731, band: 45.5, pl: 27, pt: 45.78, pb: 41, tightW: 452,
  markY: 1.22, markW: 217,
  ruleX: 247, ruleY: 0.22, ruleH: 45,
  textX: 271, discY: 0, disc: 11.43, tagY: 16.62, tag: 21.22,
  srfY: -4.78, srf: 47.8
};
const ASPECT = { signature: 8.38, losai: 4.975 };
/* Ink width ÷ font-size for "LOSAI studio" with studio at 0.56em. */
const SERIF_RATIO = 4.537;

export function Wordmark({ src, variant = "losai", width = L.markW, tone = "ink", style }) {
  if (!src || variant === "type") {
    return (
      <span style={{
        display: "block", width, flex: "none",
        fontFamily: "var(--losai-font-voice)", fontWeight: 500,
        fontSize: width / SERIF_RATIO, lineHeight: 1, letterSpacing: "0.04em", whiteSpace: "nowrap",
        color: tone === "paper" ? "#faf9f5" : "var(--losai-mark)", ...style
      }}>
        LOSAI{variant === "losai" ? null : <em style={{ fontStyle: "italic", fontWeight: 400, fontSize: "0.56em", letterSpacing: "0.03em", marginLeft: "0.3em" }}>studio</em>}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt="LOSAI studio"
      style={{ display: "block", flex: "none", width, height: width / (ASPECT[variant] || ASPECT.losai), ...style }}
    />
  );
}

export function Lockup({
  logoSrc,
  variant = "losai",
  discipline = "Architecture & Design",
  /* The second line is a slot: the tagline on brand surfaces, a title or
     project code elsewhere, or blank. Never assumed. */
  tagline = "",
  scale = 1,
  tone = "ink",
  ground = true,
  /* Crop to the content band — for mastheads, covers, footers */
  tight = false,
  style
}) {
  const k = scale, dark = tone === "paper";
  const serif = !logoSrc || variant === "type";
  const pl = tight ? 0 : L.pl, pt = tight ? 0 : L.pt, pb = tight ? 0 : L.pb;
  return (
    <div style={{
      position: "relative", flex: "none",
      width: (tight ? L.tightW : L.boxW) * k,
      height: (pt + L.band + pb) * k,
      background: ground && !tight ? (dark ? "var(--losai-ink)" : "var(--losai-paper-warm)") : "transparent",
      ...style
    }}>
      {serif ? (
        <span style={{
          position: "absolute", left: pl * k, top: (pt + L.srfY) * k, width: L.markW * k,
          fontFamily: "var(--losai-font-voice)", fontWeight: 500, fontSize: L.srf * k,
          letterSpacing: "0.04em", lineHeight: 1, whiteSpace: "nowrap",
          color: dark ? "#faf9f5" : "var(--losai-mark)"
        }}>
          LOSAI<em style={{ fontStyle: "italic", fontWeight: 400, fontSize: "0.56em", letterSpacing: "0.03em", marginLeft: "0.3em" }}>studio</em>
        </span>
      ) : (
        <img src={logoSrc} alt="LOSAI studio" style={{
          position: "absolute", left: pl * k, top: (pt + L.markY) * k,
          width: L.markW * k, height: (L.markW * k) / (ASPECT[variant] || ASPECT.losai), display: "block"
        }} />
      )}
      <span style={{
        position: "absolute", left: (pl + L.ruleX) * k, top: (pt + L.ruleY) * k, width: 1, height: L.ruleH * k,
        background: dark ? "rgba(250,249,245,.28)" : "var(--losai-rule-strong)"
      }} />
      <div style={{
        position: "absolute", left: (pl + L.textX) * k, top: (pt + L.discY) * k,
        fontFamily: "var(--losai-font-info)", fontWeight: 400, fontSize: L.disc * k,
        letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1, whiteSpace: "nowrap",
        color: dark ? "rgba(250,249,245,.72)" : "#8f877f"
      }}>{discipline}</div>
      {tagline ? (
        <div style={{
          position: "absolute", left: (pl + L.textX) * k, top: (pt + L.tagY) * k,
          fontFamily: "var(--losai-font-voice)", fontWeight: 400, fontStyle: "italic",
          fontSize: L.tag * k, lineHeight: 1.15, whiteSpace: "nowrap",
          color: dark ? "var(--losai-tagline)" : "var(--losai-tagline)"
        }}>{tagline}</div>
      ) : null}
    </div>
  );
}

/* Square stamp — the studio's separate square artwork (an open bracket
   enclosing the name) at 70% of the edge, 15% margin. Minimum 24px: the
   bracket is hairline-drawn and closes up below that. The one lockup
   that carries no discipline line. */
export function Stamp({ src, size = 96, tone = "ink", style }) {
  const dark = tone === "ink";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, flex: "none",
      background: dark ? "var(--losai-ink)" : "var(--losai-cp-paper)", ...style
    }}>
      {src ? (
        <img src={src} alt="LOSAI" style={{ display: "block", width: size * 0.7, height: size * 0.7 }} />
      ) : (
        <span style={{
          fontFamily: "var(--losai-font-voice)", fontWeight: 500, fontSize: size * 0.7 / SERIF_RATIO * 1.62,
          letterSpacing: "0.04em", lineHeight: 1, color: dark ? "#faf9f5" : "var(--losai-mark)"
        }}>LOSAI</span>
      )}
    </span>
  );
}

const BTN = {
  studio:  { background: "var(--losai-cp-paper)", color: "var(--losai-label)", borderColor: "var(--losai-rule)", cursor: "not-allowed" },
  project: { background: "var(--losai-cp-paper)", color: "var(--losai-ink)", borderColor: "var(--losai-rule-strong)" },
  esign:   { background: "var(--losai-cp-paper)", color: "var(--losai-ink)", borderColor: "var(--losai-rule-strong)" },
  cart:    { background: "var(--losai-ink)", color: "var(--losai-cp-paper)", borderColor: "var(--losai-ink)" }
};

export function Masthead({
  logoSrc,
  discipline = "Architecture & Design",
  project,
  actions = [],
  welcome,
  secureActions = "Secure actions",
  tabs = [],
  activeTab,
  onSelectTab,
  markHeight = 44,
  style
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{ background: "var(--losai-cp-paper)", borderBottom: "1px solid var(--losai-rule)", ...style }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 44, padding: "26px 56px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flex: "none" }}>
          {logoSrc ? (
            <img src={logoSrc} alt="LOSAI studio" style={{ height: markHeight, display: "block" }} />
          ) : (
            <Wordmark width={markHeight * 4.975} />
          )}
          <div style={{ lineHeight: 1.4, borderLeft: "1px solid var(--losai-rule-strong)", paddingLeft: 18 }}>
            <span style={{
              display: "block", fontFamily: "var(--losai-font-info)", fontWeight: 400, fontSize: 9, lineHeight: 1.4,
              letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap", color: "var(--losai-label)"
            }}>{discipline}</span>
            {project ? (
              <span style={{
                display: "block", fontFamily: "var(--losai-font-voice)", fontWeight: 500, fontSize: 17, lineHeight: 1.4,
                fontStyle: "italic", whiteSpace: "nowrap", color: "var(--losai-med-blue)"
              }}>{project}</span>
            ) : null}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14, flex: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {actions.map((a) => (
              <a
                key={a.label}
                href={a.href || "#"}
                style={{
                  fontFamily: "var(--losai-font-info)", fontSize: 12, letterSpacing: "0.15em",
                  textTransform: "uppercase", textDecoration: "none", lineHeight: 1,
                  padding: "16px 20px", border: "1px solid", borderRadius: 0, whiteSpace: "nowrap",
                  transition: "var(--losai-transition)", ...(BTN[a.variant] || BTN.project)
                }}
              >
                {a.label}
              </a>
            ))}
          </div>
          {welcome ? (
            <div style={{
              fontFamily: "var(--losai-font-voice)", fontWeight: 500, fontSize: 17, lineHeight: 1.4,
              fontStyle: "italic", whiteSpace: "nowrap", color: "var(--losai-med-blue)"
            }}>{welcome}</div>
          ) : null}
          {secureActions ? (
            <button
              onClick={() => setOpen((v) => !v)}
              style={{
                appearance: "none", background: "none", border: "none", padding: 0, cursor: "pointer",
                fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--losai-label)"
              }}
            >
              {secureActions}<span style={{ color: "var(--losai-ink)" }}>{open ? " ×" : " +"}</span>
            </button>
          ) : null}
        </div>
      </div>

      {tabs.length > 0 ? (
        <div style={{ display: "flex", gap: 39, padding: "0 56px", borderTop: "1px solid var(--losai-rule-strong)" }}>
          {tabs.map((tb) => {
            const label = typeof tb === "string" ? tb : tb.label;
            const on = label === activeTab;
            return (
              <button
                key={label}
                onClick={() => onSelectTab && onSelectTab(label)}
                style={{
                  appearance: "none", background: "none", border: "none", cursor: "pointer",
                  padding: "18px 0 12px", marginBottom: -1,
                  fontFamily: "var(--losai-font-info)", fontSize: 14, letterSpacing: "0.18em",
                  textTransform: "uppercase", lineHeight: 1,
                  color: on ? "var(--losai-med-red)" : "var(--losai-med-beige)",
                  borderBottom: on ? "1px solid var(--losai-med-red)" : "1px solid transparent",
                  transition: "var(--losai-transition)"
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}

export function Breadcrumbs({ items = [], style }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, color: "var(--losai-rule-strong)" }}>/</span> : null}
          <span style={{
            fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase",
            color: i === items.length - 1 ? "var(--losai-ink)" : "var(--losai-label)"
          }}>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export function Pager({ pages = [], current, onSelect, style }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", ...style }}>
      {pages.map((p) => {
        const on = p === current;
        return (
          <button
            key={p}
            onClick={() => onSelect && onSelect(p)}
            style={{
              background: "none", border: "none", padding: "0 0 3px", cursor: "pointer",
              fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.14em",
              color: on ? "var(--losai-gold)" : "var(--losai-faint)",
              borderBottom: on ? "1px solid var(--losai-gold)" : "1px solid transparent",
              transition: "var(--losai-transition)"
            }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}

/* The document masthead — used on proposals, records and printed sets.
   Distinct from the portal Masthead: no action buttons, no welcome line,
   and the active tab is underlined in GOLD rather than the portal red. */
export function DocMasthead({ logoSrc, code, project, tabs = [], activeTab, onSelectTab, activeTone = "gold", markWidth = 140, style }) {
  return (
    <header style={{ borderBottom: "1px solid var(--losai-rule-strong)", paddingBottom: 18, ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22, flex: "none" }}>
          {logoSrc ? <img src={logoSrc} alt="LOSAI studio" style={{ width: markWidth, height: "auto", display: "block" }} /> : <Wordmark width={markWidth} />}
          {(code || project) ? <span style={{ width: 1, height: 40, background: "var(--losai-rule-strong)", flex: "none" }} /> : null}
          {(code || project) ? (
            <div>
              {code ? <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", whiteSpace: "nowrap", color: "var(--losai-label)" }}>{code}</div> : null}
              {project ? <div style={{ fontFamily: "var(--losai-font-voice)", fontStyle: "italic", fontSize: 17, whiteSpace: "nowrap", color: "var(--losai-ink)", marginTop: 2 }}>{project}</div> : null}
            </div>
          ) : null}
        </div>
        <nav style={{ display: "flex", gap: 30, flex: "none" }}>
          {tabs.map((tb) => {
            const label = typeof tb === "string" ? tb : tb.label;
            const on = label === activeTab;
            return (
              <button
                key={label}
                onClick={() => onSelectTab && onSelectTab(label)}
                style={{
                  appearance: "none", background: "none", border: "none", cursor: "pointer", padding: "0 0 4px",
                  fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  color: on ? "var(--losai-ink)" : "var(--losai-faint)",
                  borderBottom: on ? "1px solid " + (activeTone === "ink" ? "var(--losai-ink)" : "var(--losai-gold)") : "1px solid transparent",
                  transition: "var(--losai-transition)"
                }}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
