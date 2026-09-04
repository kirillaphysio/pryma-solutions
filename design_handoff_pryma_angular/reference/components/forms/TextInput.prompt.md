Standard form field: 44px min height, inset dark well, cyan focus ring.

\`\`\`jsx
<TextInput label="Work email" type="email" required placeholder="you@company.com" iconLeft={<Icon name="mail" size={16} />} />
<TextInput label="Seats" error="Enter a number above 1" />
\`\`\`

Fields are the one place the system uses a small radius (\`--radius-sm\`, 4px) — never pill-shaped inputs.
