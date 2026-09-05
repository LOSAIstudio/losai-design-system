import React from "react";
import { Lockup } from "../navigation/Masthead.jsx";

export function Cover({
  image,
  label,
  title,
  titleItalic,
  meta = [],
  logoSrc,
  discipline = "Architecture & Design",
  /** Second line of the lockup — the project, set in serif */
  project,
  height = 560,
  children,
  style
}) {
  return (
    <section
      className="losai-dark"
      style={{
        position: "relative", height, overflow: "hidden", borderRadius: 0,
        background: image ? `#141210 url(${image}) center/cover no-repeat` : "#1c1a17",
        ...style
      }}
    >
      {image ? (
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,18,15,.78), rgba(20,18,15,.18))" }} />
      ) : null}

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 44 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 44 }}>
          <Lockup logoSrc={logoSrc} discipline={discipline} tagline={project} tone="paper" scale={0.7} tight />
          {label ? (
            <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 9, letterSpacing: "0.20em", textTransform: "uppercase", whiteSpace: "nowrap", color: "rgba(250,249,245,.72)" }}>{label}</span>
          ) : null}
        </div>

        <div style={{ marginTop: 56 }}>
          {title ? (
            <h1 style={{
              margin: 0, fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 44,
              lineHeight: 1.05, color: "#faf9f5", maxWidth: "22ch", textWrap: "pretty"
            }}>
              {title}
              {titleItalic ? <><br /><em style={{ fontStyle: "italic", fontWeight: 300 }}>{titleItalic}</em></> : null}
            </h1>
          ) : null}
          {meta.length > 0 && (
            <div style={{ marginTop: 26, borderTop: "1px solid rgba(250,249,245,.28)", paddingTop: 14, display: "flex", gap: 30, flexWrap: "wrap" }}>
              {meta.map((m, i) => (
                <span key={i} style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,249,245,.72)" }}>{m}</span>
              ))}
            </div>
          )}
          {children ? <div style={{ marginTop: 26 }}>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
