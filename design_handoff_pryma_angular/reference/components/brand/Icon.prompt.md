The only sanctioned way to place a glyph — Lucide, loaded from CDN and masked to currentColor.

\`\`\`jsx
<Icon name="arrow-right" size={18} />
<Icon name="sparkles" size={28} color="var(--pink-500)" />
\`\`\`

Never hand-roll SVG paths and never use emoji. Icon colour inherits from its parent, so a glyph inside a Button picks up the button's label colour automatically.
