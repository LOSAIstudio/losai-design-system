import React from "react";

const SIZES = {
  s: { padding: "9px 18px", fontSize: 9 },
  m: { padding: "14px 30px", fontSize: 9 },
  l: { padding: "19px 44px", fontSize: 9 }
};

export function Button({
  children,
  variant = "primary",
  size = "m",
  disabled = false,
  href,
  onClick,
  type = "button",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.m;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontFamily: "var(--losai-font-info)",
    fontWeight: 400,
    fontSize: s.fontSize,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--losai-transition), transform 0.08s linear",
    padding: s.padding,
    lineHeight: 1.6,
    whiteSpace: "nowrap",
    textDecoration: "none",
    transform: active && !disabled ? "translateY(1px)" : "none",
    ...style
  };

  let skin;
  if (variant === "primary") {
    skin = disabled
      ? { background: "var(--losai-rule)", color: "var(--losai-faint)", border: "1px solid var(--losai-rule)" }
      : {
          background: active
            ? "var(--losai-action-fill-active)"
            : hover
            ? "var(--losai-action-fill-hover)"
            : "var(--losai-action-fill)",
          color: "var(--losai-action-text)",
          border: "1px solid transparent"
        };
  } else if (variant === "secondary") {
    skin = disabled
      ? { background: "transparent", color: "var(--losai-disabled)", border: "1px solid var(--losai-rule)" }
      : {
          background: "transparent",
          color: hover ? "var(--losai-ink)" : "var(--losai-prose)",
          border: `1px solid ${hover ? "var(--losai-ink)" : "var(--losai-rule-strong)"}`
        };
  } else {
    skin = {
      background: "transparent",
      border: "none",
      padding: `${s.padding.split(" ")[0]} 0`,
      color: disabled ? "var(--losai-disabled)" : hover ? "var(--losai-gold)" : "var(--losai-ink)",
      borderBottom: `1px solid ${disabled ? "var(--losai-rule)" : hover ? "var(--losai-gold)" : "var(--losai-rule-strong)"}`
    };
  }

  const props = {
    style: { ...base, ...skin },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: (e) => { e.currentTarget.style.boxShadow = "var(--losai-focus-ring)"; },
    onBlur: (e) => { e.currentTarget.style.boxShadow = "none"; }
  };

  if (href && !disabled) return <a href={href} {...props}>{children}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} {...props}>{children}</button>;
}
