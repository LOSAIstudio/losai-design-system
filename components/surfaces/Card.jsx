import React from "react";

const capStyle = {
  fontFamily: "var(--losai-font-info)",
  fontSize: 7.5,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--losai-faint)"
};

const titleStyle = {
  fontFamily: "var(--losai-font-voice)",
  fontWeight: 400,
  fontSize: 21,
  lineHeight: 1.2,
  color: "var(--losai-ink)"
};

const subStyle = {
  fontFamily: "var(--losai-font-voice)",
  fontStyle: "italic",
  fontSize: 12.5,
  color: "var(--losai-label)"
};

export function Card({
  variant = "bordered",
  index,
  title,
  subtitle,
  filename,
  image,
  imageHeight = 168,
  meta,
  action = "Open →",
  href,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);

  if (variant === "image") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12, ...style }}>
        <div style={{
          height: imageHeight, background: "var(--losai-image-bg)", borderRadius: 0,
          backgroundImage: image ? `url(${image})` : "none", backgroundSize: "cover", backgroundPosition: "center"
        }} />
        {filename ? <div style={capStyle}>{filename}</div> : null}
        {title ? <div style={titleStyle}>{title}</div> : null}
        {subtitle ? <div style={subStyle}>{subtitle}</div> : null}
        {children}
      </div>
    );
  }

  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", borderRadius: 0,
        border: `1px solid ${hover ? "var(--losai-ink)" : "var(--losai-rule-strong)"}`,
        transition: "var(--losai-transition)", background: "transparent", ...style
      }}
    >
      <div style={{ padding: "22px 22px 18px" }}>
        {index ? <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.14em", color: "var(--losai-gold)", marginBottom: 14 }}>{index}</div> : null}
        {title ? <div style={titleStyle}>{title}</div> : null}
        {subtitle ? <div style={{ ...subStyle, marginTop: 6 }}>{subtitle}</div> : null}
        {children ? <div style={{ marginTop: 12, fontFamily: "var(--losai-font-voice)", fontSize: 16, lineHeight: 1.55, color: "var(--losai-prose)" }}>{children}</div> : null}
      </div>
      {(meta || action) && (
        <div style={{
          borderTop: "1px solid var(--losai-rule)", padding: "12px 22px", marginTop: "auto",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16
        }}>
          <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)" }}>{meta}</span>
          <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: hover ? "var(--losai-ink)" : "var(--losai-label)", transition: "var(--losai-transition)" }}>{action}</span>
        </div>
      )}
    </Tag>
  );
}

export function FigureCard({ label, figure, unit, breakdown = [], style }) {
  return (
    <div style={{ borderTop: "1px solid var(--losai-ink)", paddingTop: 16, ...style }}>
      <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)" }}>{label}</div>
      <div style={{ fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 44, lineHeight: 1.05, color: "var(--losai-ink)", marginTop: 10 }}>
        {figure}
        {unit ? <span style={{ fontSize: 17, marginLeft: 8, color: "var(--losai-label)" }}>{unit}</span> : null}
      </div>
      {breakdown.length > 0 && (
        <div style={{ marginTop: 18 }}>
          {breakdown.map((row, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", gap: 16,
              padding: "9px 0", borderTop: "0.5px solid var(--losai-rule)"
            }}>
              <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)" }}>{row.label}</span>
              <span style={{ fontFamily: "var(--losai-font-voice)", fontSize: 17, color: "var(--losai-ink)" }}>{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Thumbnail({ image, filename, state = "default", accent = true, onClick, style }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        opacity: state === "excluded" ? 0.35 : 1,
        outline: state === "selected" ? `1px solid ${accent ? "var(--losai-gold)" : "var(--losai-ink)"}` : "none",
        outlineOffset: 3,
        position: "relative",
        transition: "var(--losai-transition)",
        ...style
      }}
    >
      <div style={{
        height: 96, background: "var(--losai-image-bg)",
        backgroundImage: image ? `url(${image})` : "none", backgroundSize: "cover", backgroundPosition: "center"
      }} />
      {state === "selected" ? (
        <span style={{
          position: "absolute", top: 6, right: 6, width: 14, height: 14,
          display: "grid", placeItems: "center", color: accent ? "var(--losai-gold)" : "var(--losai-ink)",
          fontFamily: "var(--losai-font-info)", fontSize: 11, lineHeight: 1
        }}>✓</span>
      ) : null}
      {filename ? <div style={{ ...capStyle, marginTop: 8 }}>{filename}</div> : null}
    </div>
  );
}
