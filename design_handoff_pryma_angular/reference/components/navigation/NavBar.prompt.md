Top nav for every marketing surface — translucent navy glass over whatever scrolls beneath.

\`\`\`jsx
<NavBar links={[{label:'Platform',href:'/platform'},{label:'Pricing',href:'/pricing'}]}
  activeHref="/pricing" onNavigate={setRoute} />
\`\`\`

The active link carries a 2px pink underline. Right side is always exactly two actions: a ghost "Sign in" and one primary pill.
