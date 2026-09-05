import React from "react";

const thStyle = {
  fontFamily: "var(--losai-font-info)",
  fontSize: 8,
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--losai-label)",
  textAlign: "left",
  padding: "0 16px 10px 0",
  borderBottom: "1px solid var(--losai-ink)"
};

export function Table({ columns = [], rows = [], total, activeIndex, style }) {
  const [hover, setHover] = React.useState(-1);
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", ...style }}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i} style={{ ...thStyle, textAlign: c.align === "right" ? "right" : "left", paddingRight: c.align === "right" ? 0 : 16, width: c.width }}>
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => {
          const on = hover === r || activeIndex === r;
          return (
            <tr
              key={r}
              onMouseEnter={() => setHover(r)}
              onMouseLeave={() => setHover(-1)}
              style={{ background: on ? "var(--losai-tint)" : "transparent", transition: "var(--losai-transition)" }}
            >
              {columns.map((c, i) => {
                const cell = row[c.key];
                const isIndex = c.kind === "index";
                const right = c.align === "right";
                return (
                  <td key={i} style={{
                    padding: "14px 16px 14px 0",
                    paddingRight: right ? 0 : 16,
                    borderBottom: "0.5px solid var(--losai-rule)",
                    textAlign: right ? "right" : "left",
                    verticalAlign: "top",
                    fontFamily: isIndex || c.kind === "mono" ? "var(--losai-font-info)" : "var(--losai-font-voice)",
                    fontSize: isIndex ? 9 : c.kind === "mono" ? 9 : 16,
                    letterSpacing: isIndex ? "0.14em" : c.kind === "mono" ? "0.12em" : "normal",
                    textTransform: c.kind === "mono" ? "uppercase" : "none",
                    color: isIndex ? "var(--losai-gold)" : c.kind === "mono" ? "var(--losai-label)" : "var(--losai-ink)"
                  }}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
        {total ? (
          <tr>
            {columns.map((c, i) => (
              <td key={i} style={{
                padding: "14px 16px 0 0",
                paddingRight: c.align === "right" ? 0 : 16,
                borderTop: "1px solid var(--losai-rule-strong)",
                textAlign: c.align === "right" ? "right" : "left",
                fontFamily: i === 0 ? "var(--losai-font-info)" : "var(--losai-font-voice)",
                fontSize: i === 0 ? 8 : 17,
                letterSpacing: i === 0 ? "0.16em" : "normal",
                textTransform: i === 0 ? "uppercase" : "none",
                color: i === 0 ? "var(--losai-label)" : "var(--losai-ink)"
              }}>
                {total[c.key]}
              </td>
            ))}
          </tr>
        ) : null}
      </tbody>
    </table>
  );
}

export function SpecRows({ rows = [], style }) {
  return (
    <div style={style}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 22, padding: "14px 0", borderBottom: "0.5px solid var(--losai-rule)" }}>
          <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)", paddingTop: 5 }}>{r.label}</span>
          <span style={{ fontFamily: "var(--losai-font-voice)", fontSize: 17, color: "var(--losai-ink)" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export function MetaRow({ items = [], style }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      borderTop: "1px solid var(--losai-rule-strong)", borderBottom: "1px solid var(--losai-rule-strong)",
      ...style
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: "14px 22px", borderLeft: i === 0 ? "none" : "1px solid var(--losai-rule)" }}>
          <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--losai-label)" }}>{it.label}</div>
          <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 17, color: "var(--losai-ink)", marginTop: 6 }}>{it.value}</div>
          {it.sub ? <div style={{ fontFamily: "var(--losai-font-voice)", fontStyle: "italic", fontSize: 12.5, color: "var(--losai-faint)", marginTop: 2 }}>{it.sub}</div> : null}
        </div>
      ))}
    </div>
  );
}
