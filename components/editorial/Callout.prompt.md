Breaks in running prose: a ruled note, a caution, a pull quote, or the single italic line that opens a section.

```jsx
<Callout label="Note">Drawings are issued for coordination only until the DOB filing is stamped.</Callout>
<Callout variant="caution" label="Caution">Cellar plans fall outside the current fee agreement.</Callout>
<Callout variant="quote" attribution="Leo Sguera · Principal">Light is the first material.</Callout>
<Callout variant="lead">A brownstone rebuilt around the way its owners actually move through a day.</Callout>
```

Note bands between two 1px #c8c4b8 rules with the eyebrow beside a hairline. Caution is the only component that carries #9c3f2c — and only on the 5px square and the label; the prose stays #3a352e. The pull quote's opening quotation mark is gold, so a view with a pull quote has spent its gold — pass `accent={false}` to set it in ink when something else on the view already carries the accent.
