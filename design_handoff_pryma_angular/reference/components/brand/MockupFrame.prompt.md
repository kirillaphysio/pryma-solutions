Frames a product screenshot or live UI mock so it floats over the mesh gradient.

\`\`\`jsx
<MeshBackdrop intensity="full">
  <MockupFrame title="pryma.app/build" tone="cyan" tilt>…</MockupFrame>
</MeshBackdrop>
\`\`\`

The gradient plus the rim glow do the lifting — never nest a MockupFrame inside a Card, and never give it a drop shadow of its own.
