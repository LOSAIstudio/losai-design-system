Every list of records — phases, fees, drawings, invoices — is a Table; facts about a single project are SpecRows; a page's headline numbers are a MetaRow.

```jsx
<Table
  columns={[{key:"n",label:"",kind:"index",width:44},{key:"phase",label:"Phase"},{key:"fee",label:"Fee",align:"right"}]}
  rows={[{n:"01",phase:"Pre-Design",fee:"$3,500"},{n:"02",phase:"Schematic Design",fee:"$6,800"}]}
  total={{n:"Total",fee:"$10,300"}}
/>
<SpecRows rows={[{label:"Address",value:"212 West 84th Street"},{label:"Phase",value:"Design Development"}]} />
<MetaRow items={[{label:"Issued",value:"14 Jan 2026"},{label:"Status",value:"In review",sub:"awaiting client"}]} />
```

Header is mono 8px caps sitting on a 1px ink rule; rows separate on 0.5px #e2dfd6 with 14px vertical padding and tint on hover; numerics right-align; the total row closes on 1px #c8c4b8. The index column is the usual home for gold — if it's present, don't spend gold elsewhere on the view.
