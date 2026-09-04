Wraps any hero or full-bleed band to give it the Pryma atmosphere. A bare navy section reads off-brand.

\`\`\`jsx
<MeshBackdrop intensity="full" grid horizon minHeight={640}>
  <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>…</div>
</MeshBackdrop>
\`\`\`

Content goes in \`children\` and always sits above the gradient — never inside a card that clips it. One \`horizon\` per page, in the hero or the closing band.
