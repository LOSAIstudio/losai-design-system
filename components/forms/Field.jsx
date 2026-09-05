import React from "react";

const labelStyle = {
  display: "block",
  fontFamily: "var(--losai-font-info)",
  fontWeight: 400,
  fontSize: 8,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--losai-label)",
  marginBottom: 10
};

const helpStyle = {
  fontFamily: "var(--losai-font-voice)",
  fontStyle: "italic",
  fontSize: 12.5,
  color: "var(--losai-label)",
  marginTop: 8
};

export function Field({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  help,
  error,
  disabled = false,
  variant = "underline",
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error
    ? "var(--losai-alert)"
    : focus
    ? "var(--losai-gold)"
    : "var(--losai-rule-strong)";

  const input = {
    width: "100%",
    background: variant === "boxed" ? "var(--losai-paper)" : "transparent",
    fontFamily: "var(--losai-font-voice)",
    fontSize: 17,
    lineHeight: 1.5,
    color: disabled ? "var(--losai-faint)" : "var(--losai-ink)",
    fontStyle: disabled ? "italic" : "normal",
    borderRadius: 0,
    outline: "none",
    padding: variant === "boxed" ? "12px 14px" : "0 0 10px",
    border: variant === "boxed" ? `1px solid ${borderColor}` : "none",
    borderBottom: `1px solid ${borderColor}`,
    transition: "var(--losai-transition)"
  };

  return (
    <div style={{ ...style }}>
      {label ? <span style={labelStyle}>{label}</span> : null}
      {variant === "boxed" ? (
        <textarea
          rows={rows}
          style={input}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      ) : (
        <input
          style={input}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      )}
      {error ? (
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 9 }}>
          <span style={{ width: 4, height: 4, background: "var(--losai-alert)", marginTop: 6, flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--losai-font-voice)", fontStyle: "italic", fontSize: 12.5, color: "var(--losai-alert)" }}>{error}</span>
        </div>
      ) : help ? (
        <div style={helpStyle}>{help}</div>
      ) : null}
    </div>
  );
}

export function Checkbox({ label, checked = false, onChange, disabled = false }) {
  return (
    <label style={{ display: "inline-flex", gap: 12, alignItems: "center", cursor: disabled ? "not-allowed" : "pointer" }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 16, height: 16, flexShrink: 0, borderRadius: 0,
          border: `1px solid ${disabled ? "var(--losai-disabled)" : "var(--losai-ink)"}`,
          background: checked ? "var(--losai-ink)" : "transparent",
          position: "relative", transition: "var(--losai-transition)"
        }}
      >
        {checked ? (
          <span style={{
            position: "absolute", left: 4, top: 3, width: 5, height: 8,
            borderRight: "1px solid var(--losai-paper)", borderBottom: "1px solid var(--losai-paper)",
            transform: "rotate(42deg)"
          }} />
        ) : null}
      </span>
      <span style={{ fontFamily: "var(--losai-font-voice)", fontSize: 17, color: disabled ? "var(--losai-faint)" : "var(--losai-ink)" }}>{label}</span>
    </label>
  );
}

export function Radio({ label, checked = false, onChange, disabled = false }) {
  return (
    <label style={{ display: "inline-flex", gap: 12, alignItems: "center", cursor: disabled ? "not-allowed" : "pointer" }}>
      <span
        onClick={() => !disabled && onChange && onChange(true)}
        style={{
          width: 14, height: 14, flexShrink: 0, borderRadius: "50%",
          border: `1px solid ${disabled ? "var(--losai-disabled)" : "var(--losai-ink)"}`,
          display: "grid", placeItems: "center", transition: "var(--losai-transition)"
        }}
      >
        {checked ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--losai-ink)" }} /> : null}
      </span>
      <span style={{ fontFamily: "var(--losai-font-voice)", fontSize: 17, color: disabled ? "var(--losai-faint)" : "var(--losai-ink)" }}>{label}</span>
    </label>
  );
}
