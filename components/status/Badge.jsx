import React from "react";

const base = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  borderRadius: 0,
  padding: "5px 11px",
  fontFamily: "var(--losai-font-info)",
  fontWeight: 400,
  fontSize: 8,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  lineHeight: 1.6,
  whiteSpace: "nowrap",
  transition: "var(--losai-transition)"
};

const SKINS = {
  awarded: { background: "var(--losai-ink)", color: "var(--losai-paper)", border: "1px solid var(--losai-ink)" },
  review: { background: "transparent", color: "var(--losai-gold)", border: "1px solid var(--losai-gold)" },
  draft: { background: "transparent", color: "var(--losai-label)", border: "1px solid var(--losai-rule-strong)" },
  closed: { background: "transparent", color: "var(--losai-faint)", border: "1px solid var(--losai-rule)" },
  live: { background: "transparent", color: "var(--losai-ink)", border: "1px solid transparent", padding: "5px 0" }
};

export function Badge({ children, variant = "draft", style }) {
  const skin = SKINS[variant] || SKINS.draft;
  return (
    <span style={{ ...base, ...skin, ...style }}>
      {variant === "live" ? <span style={{ width: 5, height: 5, background: "var(--losai-gold)", flexShrink: 0 }} /> : null}
      {children}
    </span>
  );
}

export function Tag({ children, selected = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...base,
        cursor: "pointer",
        background: selected ? "var(--losai-ink)" : "transparent",
        color: selected ? "var(--losai-paper)" : hover ? "var(--losai-ink)" : "var(--losai-label)",
        border: `1px solid ${selected ? "var(--losai-ink)" : hover ? "var(--losai-ink)" : "var(--losai-rule-strong)"}`,
        ...style
      }}
    >
      {children}
    </button>
  );
}
