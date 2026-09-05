import React from "react";

export function Callout({ variant = "note", label = "Note", children, attribution, accent = true, style }) {
  if (variant === "caution") {
    return (
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", ...style }}>
        <span style={{ width: 5, height: 5, background: "var(--losai-alert)", marginTop: 9, flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-alert)" }}>{label}</div>
          <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 15.5, lineHeight: 1.55, color: "var(--losai-prose)", marginTop: 8 }}>{children}</div>
        </div>
      </div>
    );
  }

  if (variant === "quote") {
    return (
      <figure style={{ margin: 0, ...style }}>
        <blockquote style={{
          margin: 0, fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontStyle: "italic",
          fontSize: 26, lineHeight: 1.35, color: "var(--losai-ink)", textWrap: "pretty"
        }}>
          <span style={{ color: accent ? "var(--losai-gold)" : "var(--losai-ink)", fontStyle: "normal" }}>“</span>
          {children}
        </blockquote>
        {attribution ? (
          <figcaption style={{ marginTop: 26, borderTop: "1px solid var(--losai-rule)", paddingTop: 14, fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)" }}>
            {attribution}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (variant === "lead") {
    return (
      <p style={{
        margin: 0, fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontStyle: "italic",
        fontSize: 22, lineHeight: 1.4, color: "var(--losai-prose)", textWrap: "pretty", ...style
      }}>
        {children}
      </p>
    );
  }

  return (
    <div style={{ borderTop: "1px solid var(--losai-rule-strong)", borderBottom: "1px solid var(--losai-rule-strong)", padding: "18px 0", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)", flexShrink: 0 }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: "var(--losai-rule)" }} />
      </div>
      <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 15.5, lineHeight: 1.55, color: "var(--losai-prose)", textWrap: "pretty" }}>{children}</div>
    </div>
  );
}

/* Eyebrow + hairline: an index, a tracked label, a rule that takes up the
   remaining width, and an optional italic note at the far right. */
export function SectionHead({ index, label, note, style }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, ...style }}>
      {index ? <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--losai-gold)", flex: "none" }}>{index}</span> : null}
      {label ? <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--losai-ink)", flex: "none", whiteSpace: "nowrap" }}>{label}</span> : null}
      <span style={{ flex: 1, height: 1, background: "var(--losai-rule)" }} />
      {note ? <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--losai-faint)", flex: "none", whiteSpace: "nowrap" }}>{note}</span> : null}
    </div>
  );
}
