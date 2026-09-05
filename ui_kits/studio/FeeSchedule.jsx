function FeeSchedule() {
  return (
    <div style={{ padding: "44px" }}>
      <Breadcrumbs items={["Projects", "West 84th", "Fees"]} style={{ marginBottom: 30 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 44, marginBottom: 30 }}>
        <div>
          <div className="losai-eyebrow" style={{ marginBottom: 10 }}>Agreement 2025-114</div>
          <h1 style={{ margin: 0, fontFamily: "var(--losai-font-voice)", fontWeight: 300, fontSize: 30, color: "var(--losai-ink)" }}>Fee schedule</h1>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Badge variant="awarded">Awarded</Badge>
          <Badge variant="draft">Amendment 02 draft</Badge>
        </div>
      </div>

      <MetaRow items={[
        { label: "Committed", value: "$42,100" },
        { label: "Received", value: "$21,500", sub: "five invoices" },
        { label: "Outstanding", value: "$8,200", sub: "one overdue" },
        { label: "Hourly", value: "$295 / $225 / $175" }
      ]} style={{ marginBottom: 44 }} />

      <Table
        columns={[
          { key: "n", label: "", kind: "index", width: 44 },
          { key: "phase", label: "Phase" },
          { key: "service", label: "Service", kind: "mono" },
          { key: "status", label: "Status", kind: "mono" },
          { key: "fee", label: "Fee", align: "right" }
        ]}
        rows={[
          { n: "01", phase: "Pre-Design", service: "Existing conditions & code", status: "Complete", fee: "$3,500" },
          { n: "02", phase: "Schematic Design", service: "Three schemes, presentation", status: "Complete", fee: "$6,800" },
          { n: "03", phase: "Design Development", service: "Full DD set, MEPF coordination", status: "Active", fee: "$9,200" },
          { n: "04", phase: "Additional service", service: "Cellar floor plans", status: "Approved", fee: "$2,500" },
          { n: "05", phase: "Construction Documents", service: "100% CD set, specifications", status: "Not started", fee: "$8,100" },
          { n: "06", phase: "Permit filing", service: "DOB filing coordination", status: "Not started", fee: "$3,000" },
          { n: "07", phase: "MEPF consultant", service: "Jack Green & Associates", status: "Active", fee: "$12,000" }
        ]}
        activeIndex={2}
        total={{ n: "Committed", fee: "$45,100" }}
        style={{ marginBottom: 44 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <Callout variant="quote" accent={false} attribution="Owner–architect agreement · clause 4.2">
            Additional services are drawn only on written instruction, and invoiced in the month they are issued.
          </Callout>
        </div>
        <div>
          <div className="losai-eyebrow" style={{ marginBottom: 22 }}>Next invoice</div>
          <FigureCard
            label="Due 28 February 2026"
            figure="$8,200"
            breakdown={[
              { label: "Design Development", value: "$5,700" },
              { label: "Additional service", value: "$2,500" }
            ]}
            style={{ marginBottom: 22 }}
          />
          <div style={{ display: "flex", gap: 14 }}>
            <Button size="s">Pay invoice</Button>
            <Button size="s" variant="secondary">Download PDF</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FeeSchedule });
