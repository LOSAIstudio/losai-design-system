function ProjectRecord() {
  const [sel, setSel] = React.useState(1);
  return (
    <div>
      <Cover
        height={380}
        logoSrc={LOGO}
        project="West 84th Street"
        label="Project 2025-114"
        title="A brownstone"
        titleItalic="rebuilt around light"
        meta={["Upper West Side", "Design Development", "2025—2027"]}
      />

      <div style={{ padding: "44px 44px 0" }}>
        <Breadcrumbs items={["Projects", "West 84th", "Record"]} style={{ marginBottom: 30 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <Callout variant="lead" style={{ marginBottom: 30 }}>
              The parlour floor is opened end to end and the rear wall rebuilt in glass, so the garden reads from the street door.
            </Callout>
            <p style={{ fontFamily: "var(--losai-font-voice)", fontSize: 16, lineHeight: 1.55, color: "var(--losai-prose)", maxWidth: "64ch", margin: "0 0 30px" }}>
              A four-storey 1899 brownstone, unaltered above the parlour and heavily subdivided below it. The work restores the original vertical circulation, consolidates services into a single stack at the party wall, and replaces the rear facade with a steel-framed glazed wall set back from the property line.
            </p>
            <Callout label="Note" style={{ marginBottom: 30 }}>
              Drawings are issued for coordination only until the DOB filing is stamped.
            </Callout>
            <SpecRows rows={[
              { label: "Address", value: "212 West 84th Street, New York NY" },
              { label: "Typology", value: "Single-family townhouse, gut renovation" },
              { label: "Area", value: "4,820 sq ft over four floors and cellar" },
              { label: "Principal", value: "Leo Sguera" },
              { label: "Consultants", value: "Jack Green & Associates — MEPF" }
            ]} />
          </div>

          <aside>
            <MetaRow items={[
              { label: "Phase", value: "03", sub: "of seven" },
              { label: "Status", value: "In review" }
            ]} style={{ marginBottom: 30 }} />
            <FigureCard
              label="Fees to date"
              figure="$29,700"
              breakdown={[
                { label: "Received", value: "$21,500" },
                { label: "Outstanding", value: "$8,200" },
                { label: "Committed", value: "$42,100" }
              ]}
              style={{ marginBottom: 30 }}
            />
            <div className="losai-mono-label" style={{ marginBottom: 14 }}>Site record</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              {["IMG_2211", "IMG_2214", "IMG_2219", "IMG_2223"].map((f, i) => (
                <Thumbnail key={f} filename={f} accent={false} state={i === sel ? "selected" : i === 3 ? "excluded" : "default"} onClick={() => setSel(i)} />
              ))}
            </div>
          </aside>
        </div>

        <div style={{ marginTop: 64 }}>
          <div className="losai-eyebrow" style={{ marginBottom: 22 }}>Schedule</div>
          <Table
            columns={[
              { key: "n", label: "", kind: "index", width: 44 },
              { key: "phase", label: "Phase" },
              { key: "milestone", label: "Milestone", kind: "mono" },
              { key: "date", label: "Date", kind: "mono" },
              { key: "fee", label: "Fee", align: "right" }
            ]}
            rows={[
              { n: "01", phase: "Pre-Design", milestone: "Site analysis", date: "Aug 2025", fee: "$3,500" },
              { n: "02", phase: "Schematic Design", milestone: "Concept approved", date: "Oct 2025", fee: "$6,800" },
              { n: "03", phase: "Design Development", milestone: "DD set issued", date: "Jan 2026", fee: "$9,200" },
              { n: "04", phase: "Construction Documents", milestone: "CD issue", date: "Apr 2026", fee: "$8,100" },
              { n: "05", phase: "Permit & Filing", milestone: "Permit issued", date: "Jul 2026", fee: "$3,000" }
            ]}
            activeIndex={2}
            total={{ n: "Committed", fee: "$30,600" }}
          />
        </div>

        <div style={{ marginTop: 64, display: "flex", gap: 14 }}>
          <Button>Issue coordination set</Button>
          <Button variant="secondary">Download record</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProjectRecord });
