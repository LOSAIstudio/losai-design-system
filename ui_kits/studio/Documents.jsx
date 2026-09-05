const DOCS = [
  { index: "01", title: "Existing conditions survey", subtitle: "Issued 4 September 2025", meta: "Pre-Design", cat: "Drawings" },
  { index: "02", title: "Schematic design package", subtitle: "Issued 2 October 2025", meta: "Schematic", cat: "Drawings" },
  { index: "03", title: "Design development set", subtitle: "Issued 14 January 2026", meta: "Design Dev.", cat: "Drawings" },
  { index: "04", title: "MEPF coordination markups", subtitle: "Jack Green & Associates", meta: "Consultant", cat: "Consultants" },
  { index: "05", title: "Structural narrative", subtitle: "Draft — awaiting review", meta: "Consultant", cat: "Consultants" },
  { index: "06", title: "Owner–architect agreement", subtitle: "Countersigned 12 August 2025", meta: "Contract", cat: "Contracts" }
];

const FILTERS = ["Drawings", "Consultants", "Contracts"];

function Documents() {
  const [on, setOn] = React.useState([]);
  const [page, setPage] = React.useState("01");
  const shown = on.length ? DOCS.filter((d) => on.includes(d.cat)) : DOCS;

  return (
    <div style={{ padding: "44px" }}>
      <Breadcrumbs items={["Projects", "West 84th", "Documents"]} style={{ marginBottom: 30 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 44, marginBottom: 30 }}>
        <div>
          <div className="losai-eyebrow" style={{ marginBottom: 10 }}>Project archive</div>
          <h1 style={{ margin: 0, fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 30, color: "var(--losai-ink)" }}>Documents</h1>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {FILTERS.map((f) => (
            <Tag key={f} selected={on.includes(f)} onClick={() => setOn((o) => o.includes(f) ? o.filter((x) => x !== f) : [...o, f])}>{f}</Tag>
          ))}
        </div>
      </div>

      <Callout variant="caution" label="Caution" style={{ marginBottom: 30 }}>
        Two consultant documents are still marked draft and should not be forwarded to the board.
      </Callout>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {shown.map((d) => (
          <Card key={d.index} index={d.index} title={d.title} subtitle={d.subtitle} meta={d.meta} href="#" />
        ))}
      </div>

      <div style={{ marginTop: 44, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Pager pages={["01", "02", "03"]} current={page} onSelect={setPage} />
        <span className="losai-caption">{shown.length} of {DOCS.length} documents</span>
      </div>

      <div style={{ marginTop: 64, borderTop: "1px solid var(--losai-rule-strong)", paddingTop: 30, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
        <div>
          <div className="losai-eyebrow" style={{ marginBottom: 22 }}>Request a document</div>
          <Field label="Document title" defaultValue="" placeholder="e.g. Cellar floor plans" style={{ marginBottom: 22 }} />
          <Field label="Why you need it" variant="boxed" rows={3} style={{ marginBottom: 22 }} />
          <Button size="s">Send request</Button>
        </div>
        <div>
          <div className="losai-eyebrow" style={{ marginBottom: 22 }}>Delivery</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Radio label="Secure link" checked onChange={() => {}} />
            <Radio label="Printed set, couriered" checked={false} onChange={() => {}} />
            <Checkbox label="Notify the consultant team" checked onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Documents });
