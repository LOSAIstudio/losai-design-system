const { Masthead, Breadcrumbs, Pager, Button, Badge, Tag, Card, FigureCard, Thumbnail, Table, SpecRows, MetaRow, Callout, Cover, Field, Checkbox, Radio } = window.LOSAIStudioDesignSystem_3a6277;

const LOGO = "../../assets/logo-losai-ink.png";

const NAV = [
  { label: "Record", key: "record" },
  { label: "Documents", key: "documents" },
  { label: "Fees", key: "fees" }
];

function Shell({ screen, setScreen, children }) {
  return (
    <div style={{ background: "var(--losai-paper)", minHeight: "100vh", padding: "0 0 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", background: "var(--losai-paper)", minHeight: "100vh" }}>
        <Masthead
          logoSrc="../../assets/losai-wordmark-studio.png"
          project="212 West 84th Street, New York"
          welcome="Welcome, Leo"
          actions={[
            { label: "Private Studio", variant: "studio" },
            { label: "Active Project", variant: "project" },
            { label: "E-sign", variant: "esign" },
            { label: "Cart", variant: "cart" }
          ]}
          tabs={NAV.map((n) => n.label)}
          activeTab={(NAV.find((n) => n.key === screen) || {}).label}
          onSelectTab={(label) => { const hit = NAV.find((n) => n.label === label); if (hit) setScreen(hit.key); }}
        />
        {children}
        <footer style={{ borderTop: "1px solid var(--losai-rule-strong)", margin: "0 44px", padding: "22px 0 30px", display: "flex", justifyContent: "space-between" }}>
          <span className="losai-mono-label">LOSAI studio · Architecture &amp; Design · New York</span>
          <span className="losai-caption">Confidential — issued for coordination</span>
        </footer>
      </div>
    </div>
  );
}

/* Tab selection is handled by Masthead's onSelectTab; kept as a no-op so
   existing index.html mounts keep working. */
function NavBridge() { return null; }

Object.assign(window, { Shell, NavBridge, NAV, LOGO, Masthead, Breadcrumbs, Pager, Button, Badge, Tag, Card, FigureCard, Thumbnail, Table, SpecRows, MetaRow, Callout, Cover, Field, Checkbox, Radio });
