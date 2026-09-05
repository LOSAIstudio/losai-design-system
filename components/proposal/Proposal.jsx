import React from "react";

/* Modular fee schedule — the studio's service / line-item block.
   Money is held in CENTS and formatted only at the edge; every subtotal
   and the grand total recompute the moment a module is toggled. */

export function money(cents) {
  return "$" + Math.round((cents || 0) / 100).toLocaleString("en-US");
}

const UNCERTAIN_TITLE = "Derived from an unconfirmed area — firms up when the area is confirmed";

function useRoll(target, ms) {
  const [shown, setShown] = React.useState(target);
  const shownRef = React.useRef(target);
  React.useEffect(() => {
    const a = shownRef.current, b = target;
    if (a === b) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { shownRef.current = b; setShown(b); return; }
    let id = 0;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, Math.max(0, (now - t0) / ms));
      const e = 1 - Math.pow(1 - p, 3);
      const v = Math.round(a + (b - a) * e);
      shownRef.current = v; setShown(v);
      if (p < 1) id = requestAnimationFrame(step);
      else { shownRef.current = b; setShown(b); }
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, ms]);
  return shown;
}

function RollingFee({ cents, uncertain, ms = 420, empty, tone }) {
  const shown = useRoll(cents || 0, ms);
  if (!cents && empty) return <span>{empty}</span>;
  const base = { fontVariantNumeric: "tabular-nums" };
  if (uncertain) {
    return (
      <span title={UNCERTAIN_TITLE} style={{ ...base, color: "var(--losai-cp-uncertain)", borderBottom: "1px dashed var(--losai-cp-uncertain)", cursor: "help" }}>
        {money(shown)}
      </span>
    );
  }
  return <span style={{ ...base, color: tone || "inherit" }}>{money(shown)}</span>;
}

function Tick({ on, fixed, onClick }) {
  return (
    <button
      onClick={fixed ? undefined : onClick}
      aria-pressed={on}
      style={{
        width: 22, height: 22, marginTop: 3, padding: 0, borderRadius: 0, flex: "none",
        border: "1.5px solid " + (on ? "var(--losai-ink)" : "var(--losai-rule-strong)"),
        background: on ? "var(--losai-ink)" : "transparent",
        color: on ? "var(--losai-paper)" : "transparent",
        font: "13px/1 var(--losai-font-info)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: fixed ? "default" : "pointer", transition: "var(--losai-transition)"
      }}
    >
      ✓
    </button>
  );
}

const MONO = { fontFamily: "var(--losai-font-info)", textTransform: "uppercase" };
const LBL = { ...MONO, fontSize: 8, letterSpacing: "0.16em", color: "var(--losai-label)" };
const CAP = { ...MONO, fontSize: 7.5, letterSpacing: "0.12em", color: "var(--losai-faint)" };

/* Numbered scope list — .bullets, dotted separators, leading-zero counter. */
function Bullets({ items = [] }) {
  if (!items.length) return null;
  return (
    <ol style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}>
      {items.map((it, i) => (
        <li key={i} style={{
          fontSize: 14.5, color: "var(--losai-prose)", fontFamily: "var(--losai-font-voice)",
          padding: "4px 0 4px 26px", position: "relative",
          borderBottom: i === items.length - 1 ? "none" : "1px dotted var(--losai-rule)"
        }}>
          <span style={{
            position: "absolute", left: 0, top: 8, fontFamily: "var(--losai-font-info)",
            fontSize: 9.5, color: "var(--losai-faint)"
          }}>{String(i + 1).padStart(2, "0")}</span>
          {it}
        </li>
      ))}
    </ol>
  );
}

/* .delivs — italic label colour, mono heading, dotted separators. */
function Delivs({ items = [], heading = "Deliverables" }) {
  if (!items.length) return null;
  return (
    <div style={{ fontSize: 13.5, color: "var(--losai-label)", fontStyle: "italic", fontFamily: "var(--losai-font-voice)", paddingTop: 6 }}>
      <span style={{
        fontStyle: "normal", fontFamily: "var(--losai-font-info)", fontSize: 9.5, letterSpacing: "0.15em",
        textTransform: "uppercase", display: "block", marginBottom: 7, color: "var(--losai-faint)"
      }}>{heading}</span>
      {items.map((it, i) => (
        <div key={i} style={{ padding: "3px 0", borderBottom: i === items.length - 1 ? "none" : "1px dotted var(--losai-rule)" }}>{it}</div>
      ))}
    </div>
  );
}

function Module({ m, on, onToggle, last }) {
  const [open, setOpen] = React.useState(false);
  const hasDetail = (m.included && m.included.length) || (m.deliverables && m.deliverables.length);
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "40px 66px 1fr 210px 120px 26px", gap: 16,
      alignItems: "start", padding: "20px 0",
      borderBottom: last ? "none" : "1px solid var(--losai-rule)",
      opacity: on ? 1 : 0.42, transition: "var(--losai-transition)"
    }}>
      <Tick on={on} fixed={m.required} onClick={onToggle} />
      <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--losai-label)", paddingTop: 6 }}>{m.code}</span>
      <div>
        <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 20, lineHeight: 1.25, color: "var(--losai-ink)" }}>{m.name}</div>
        {m.detail ? <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 14, color: "var(--losai-label)", marginTop: 3, fontStyle: "italic" }}>{m.detail}</div> : null}
        {open ? <Bullets items={m.included} /> : null}
      </div>
      <div>
        {m.duration ? (
          <div style={{ fontFamily: "var(--losai-font-info)", fontSize: 9.5, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--losai-faint)", paddingTop: 6 }}>{m.duration}</div>
        ) : null}
        {open ? <Delivs items={m.deliverables} /> : null}
      </div>
      <div style={{ textAlign: "right", fontSize: 19, paddingTop: 4, fontFamily: "var(--losai-font-voice)" }}>
        {m.feeCents ? <RollingFee cents={m.feeCents} uncertain={m.uncertain} tone="var(--losai-gold)" /> : <span style={{ fontFamily: "var(--losai-font-info)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--losai-label)" }}>quoted</span>}
      </div>
      {hasDetail ? (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          style={{ background: "none", border: 0, color: "var(--losai-faint)", cursor: "pointer", fontSize: 15, padding: 4, fontFamily: "var(--losai-font-info)", lineHeight: 1 }}
        >
          {open ? "×" : "+"}
        </button>
      ) : <span />}
    </div>
  );
}

export function Proposal({ cards = [], note, totalLabel = "Total — selected services", showTotal = true, style }) {
  const initial = React.useMemo(() => {
    const s = {};
    cards.forEach((c) => c.modules.forEach((m) => { s[m.id] = m.selected !== false; }));
    return s;
  }, [cards]);
  const [sel, setSel] = React.useState(initial);
  const toggle = (id) => setSel((s) => ({ ...s, [id]: !s[id] }));

  const subtotal = (c) => c.modules.reduce((n, m) => n + (sel[m.id] ? (m.feeCents || 0) : 0), 0);
  const count = (c) => c.modules.filter((m) => sel[m.id]).length;
  const grand = cards.reduce((n, c) => n + subtotal(c), 0);
  const anyUncertain = cards.some((c) => c.modules.some((m) => sel[m.id] && m.uncertain));

  return (
    <div style={style}>
      {cards.map((c) => (
        <div key={c.id} style={{ marginBottom: 44 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 26 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {c.index ? <span style={{ ...MONO, fontSize: 9, letterSpacing: "0.14em", color: "var(--losai-gold)" }}>{c.index}</span> : null}
              <span style={{ width: 34, height: 1, background: "var(--losai-rule-strong)" }} />
              {c.phase ? <span style={LBL}>{c.phase}</span> : null}
            </div>
            <span style={CAP}>{count(c)} included · subtotal</span>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 26, marginTop: 13 }}>
            <div style={{ fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 30, lineHeight: 1.1, color: "var(--losai-ink)" }}>{c.title}</div>
            <div style={{ fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 30, lineHeight: 1.1, color: "var(--losai-ink)", whiteSpace: "nowrap" }}>
              <RollingFee cents={subtotal(c)} uncertain={c.modules.some((m) => sel[m.id] && m.uncertain)} empty="—" />
            </div>
          </div>
          {c.subtitle ? <div style={{ fontFamily: "var(--losai-font-voice)", fontStyle: "italic", fontSize: 15, color: "var(--losai-label)", marginTop: 6 }}>{c.subtitle}</div> : null}

          <div style={{ borderTop: "1px solid var(--losai-rule)", marginTop: 26 }}>
            {c.modules.map((m, i) => (
              <Module key={m.id} m={m} on={!!sel[m.id]} onToggle={() => toggle(m.id)} last={i === c.modules.length - 1} />
            ))}
          </div>
        </div>
      ))}

      {showTotal ? (
        <div style={{ borderTop: "1px solid var(--losai-rule-strong)", paddingTop: 26, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
          <div>
            <div style={{ ...LBL, marginBottom: 10 }}>{totalLabel}</div>
            <div style={{ fontFamily: "var(--losai-font-voice)", fontSize: 52, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--losai-ink)" }}>
              <RollingFee cents={grand} uncertain={anyUncertain} ms={520} />
            </div>
          </div>
          {note ? <div style={{ fontFamily: "var(--losai-font-voice)", fontStyle: "italic", fontSize: 14, color: "var(--losai-label)", maxWidth: "46ch" }}>{note}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
