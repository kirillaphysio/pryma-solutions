Site-wide footer: wordmark + tagline + social on the left, 3–5 link columns, a legal row underneath.

\`\`\`jsx
<Footer tagline="Websites engineered to convert." columns={cols}
  social={[{icon:'github',label:'GitHub',href:'#'},{icon:'linkedin',label:'LinkedIn',href:'#'}]} />
\`\`\`

Sits on \`--surface-void\` (darker than the page in dark theme, a shade deeper than white in light) with a 1px \`--grad-brand\` rule along the top edge. Column headings are uppercase micro-caps. `note` is the mono line at the bottom-right of the legal row — override it for non-English sites, or pass `null` to hide it. Omit `social` on sites without social accounts.
