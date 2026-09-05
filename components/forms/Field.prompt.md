Form input for every text entry, plus the two selection controls; use the underline variant unless the answer is long-form.

```jsx
<Field label="Project address" defaultValue="212 West 84th Street" help="As it appears on the deed." />
<Field label="Scope notes" variant="boxed" rows={4} />
<Field label="Email" error="We could not reach this address." defaultValue="j.whitmore@" />
<Checkbox label="Include cellar drawings" checked onChange={setInc} />
<Radio label="Gut renovation" checked onChange={pick} />
```

Anatomy: mono 8px/0.16em uppercase label above, 1px #c8c4b8 underline, Cormorant 17px value. Focus turns the underline gold; error turns it #9c3f2c and prefixes the message with a 4px alert square; disabled sets the value italic.
`variant="boxed"` is the textarea. `Checkbox` is a 16px ink-filled square; `Radio` is a 14px circle with a 6px ink dot — the single exception to square corners.
