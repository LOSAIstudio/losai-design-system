Badge names the state of a project, drawing or invoice; Tag filters a list. Both are square, mono 8px/0.16em caps, 5px 11px.

```jsx
<Badge variant="awarded">Awarded</Badge>
<Badge variant="review">In review</Badge>
<Badge variant="draft">Draft</Badge>
<Badge variant="closed">Closed</Badge>
<Badge variant="live">Live</Badge>
<Tag selected onClick={toggle}>Residential</Tag>
```

`review` and `live` are the two gold-bearing variants — use at most one of them per view, and never both. `closed` sits on the lightest #e2dfd6 hairline so finished work recedes. Badges never carry the alert colour; caution belongs to Callout.
