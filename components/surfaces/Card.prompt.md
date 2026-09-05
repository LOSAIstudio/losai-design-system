Cards carry project work — imagery, documents, figures and image selects; every one is square-cornered, shadowless and bounded by hairlines.

```jsx
<Card variant="image" filename="W84_EXT_03.TIF" title="West 84th Residence" subtitle="Upper West Side, New York" />
<Card index="01" title="Design Development" subtitle="Issued 14 January" meta="Phase 03" href="#">Full DD set with MEPF coordination.</Card>
<FigureCard label="Fees to date" figure="$29,700" breakdown={[{label:"Received",value:"$21,500"},{label:"Outstanding",value:"$8,200"}]} />
<Thumbnail filename="IMG_2214" state="selected" />
```

Bordered cards start at 1px #c8c4b8 and darken to ink on hover; the gold index numeral is often the one gold mark on the view, so don't also gild the footer. Figure cards open on a 1px ink rule. Thumbnails show selection as a gold outline offset 3px plus a 14px gold tick, exclusion as 35% opacity — never a colour wash. Pass `accent={false}` to a Thumbnail to render its selection in ink when the view's gold is already spent elsewhere.
