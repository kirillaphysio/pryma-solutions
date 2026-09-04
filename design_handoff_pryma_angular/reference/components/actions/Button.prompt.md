Pill CTA for every action in the Pryma system — never a rounded-rectangle button.

\`\`\`jsx
<Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" />}>Start building</Button>
<Button variant="secondary">Sign in</Button>
<Button variant="outline">Read the docs</Button>
\`\`\`

- \`primary\` is the neon-pink fill and carries \`--glow-pink-sm\`, lifting to \`--glow-pink-md\` on hover. Use at most one per viewport.
- \`secondary\` is the translucent violet wash with a hairline — the standard partner to a primary.
- \`outline\` is cyan-on-dark; \`onAccent\` is the white outline used over the pink/violet gradient band.
- Horizontal padding never drops below 28px (22px for \`cap\`). Radius is always \`--radius-pill\`.
