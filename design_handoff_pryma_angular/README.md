# Handoff: pryma.solutions — Angular implementation

## Overview

Build the Pryma Solutions marketing site as an Angular application, prerendered to static HTML and deployed to GitHub Pages on the custom domain `pryma.solutions`. Five public surfaces in v1 (home, services, contact, demo gallery, legal), Hungarian first with English as a second locale after launch.

Target repo: **kirillaphysio/pryma-solutions**, branch `main`, currently empty.

**Start here:** `PLAN.md` (architecture, decisions and their rationale, DNS, deploy) → `CLAUDE.md` (drop at the repo root; conventions and design-system rules) → `TASKS.md` (ordered checklist).

## About the design files

Everything in `reference/` is a **design reference created in HTML and React** — prototypes showing intended look and behaviour, not production code to copy. The task is to **recreate these designs in Angular** using standalone components, signals and SCSS, following the conventions in `CLAUDE.md`. Do not port the React components; read them, extract the exact values, and rebuild.

Two things in the reference are review devices, not features: the **Tweaks panel** (theme/accent switcher) and the **intro animation**. Neither is in scope for v1 — see the open items in `PLAN.md`.

## Fidelity

**High fidelity.** Colours, type metrics, spacing, radii, glow values, motion durations and copy are final. Recreate them exactly. Every number in `reference/tokens/*.css` is authored, not rounded — `-0.768px` display tracking, `14.4px` button caps, `90px` pill radius and `10px 30px` secondary padding are all deliberate.

Copy is also final and in reviewed brand voice (Hungarian). Do not rewrite it.

## Screens

| Route | Screen | Purpose | Reference file |
|---|---|---|---|
| `/` | Kezdőlap | Position the studio, route to services or contact | `reference/ui_kit/HomeScreen.jsx` |
| `/services` | Szolgáltatások | What is offered, three typical packages, honest caveats | `reference/ui_kit/ServicesScreen.jsx` |
| `/demo` | Demó | Three example sites shown in mockup frames | `reference/ui_kit/DemoScreen.jsx` |
| `/demo/{asztalos,edzo,szalon}` | Demo mini-sites | Show real work in a frame; two routes each | `reference/ui_kit/demo-*.jsx` |
| `/contact` | Kapcsolat | Compose a briefing e-mail via `mailto:` | `reference/ui_kit/ContactScreen.jsx` |
| `/privacy`, `/imprint` | Jogi | GDPR notice and imprint | **Copy not written yet** |

Layout, component-by-component measurements and states are documented per component in `reference/components/*/*.prompt.md`, with the prop contract in the sibling `.d.ts`. The rendered specimen cards in `reference/guidelines/` are the visual acceptance target for the foundations.

## Interactions & behaviour

- **Navigation** — sticky glass nav; active item carries a 2px pink underline via inset shadow, hover shows the same at 55%.
- **Hover** — brighten fill ~6% *and* step glow up one level (`sm` → `md`); links gain a 3px-offset underline plus cyan text glow; cards lift 3px with a violet rim.
- **Press** — darken to `--action-primary-press`, `translateY(1px)`. No scale.
- **Focus** — 2px `#38e1ff` outline at 2px offset, never removed.
- **Disabled** — 42% opacity + `saturate(.35)`.
- **Motion** — 120ms hover colour / 220ms glow and lift / 420ms reveals, all `cubic-bezier(.22,.68,0,1)`. No bounce. Entrances fade + 8px rise. Ambient gradient drift 14s. All of it off under `prefers-reduced-motion`.
- **Contact form** — required name, valid e-mail, message ≥ 20 chars; submit opens the mail client; success state says so honestly.
- **Cookie banner** — explicit accept/reject, focus-trapped, decision in `localStorage`, re-openable from the footer.
- **Responsive** — 3-up → 2-up → 1-up at 1024 / 768; 1240px container; nav collapses to a sheet on mobile.

## State

Minimal and local. Signals throughout.

- `ConsentService` — `'unknown' | 'granted' | 'denied'`, persisted in `localStorage`.
- Contact form state — Angular reactive form, `idle | invalid | opened`.
- No global store, no HTTP client, no auth. There is no backend.

## Design tokens

Do not retype these — `reference/tokens/` is the authoritative source and `reference/DESIGN_SYSTEM.md` explains the intent behind each group. Summary:

- **Colour** — navy ramp `#05030f`→`#2e1f74` (base), neon pink `#ff2e88` (only filled action), electric cyan `#38e1ff` (only other chromatic voice), violet `#9d5cff` (atmosphere only), cool mist neutrals. Light theme opt-in via `data-theme="light"`.
- **Type** — Space Grotesk 500/600/700 display, Inter 400/500/700 UI, JetBrains Mono 400/700 for token names and mockup chrome. Display 64/58/50/32px with mandatory negative tracking; body 16px / 1.55, leads 18px; eyebrows 12px 700 uppercase +0.96px.
- **Spacing** — 8px base with 4/12/20/28 sub-steps; 96px sections, 48px related bands, 32px card padding, 48px band padding, 1240px container.
- **Radii** — 4 inputs · 8 chrome · 12 mockup · 16 cards · 48 badges · **90 buttons**.
- **Elevation** — glow, not shadow: `--glow-pink-*`, `--glow-cyan-*`, `--glow-violet-*`. `--glow-pink-lg` reserved for the closing band and horizon rule.
- **Hairlines** — `inset 0 0 0 1px rgba(179,174,212,.14)`, never a border.
- **Motion** — 120 / 220 / 420ms + 14s ambient, `cubic-bezier(.22,.68,0,1)`.

## Assets

- **Fonts** — none supplied as binaries. All three families are open source; self-host them in `public/fonts/` rather than loading from Google.
- **Icons** — Lucide (`lucide-static@0.544.0`), rendered as a CSS mask so glyphs inherit `currentColor`. No icon font, no sprite sheet, no hand-rolled paths.
- **Imagery** — none. The system deliberately has no photography; product UI sits in a `MockupFrame` on the mesh. `reference/ui_kit/robot/*.jpg` are demo-site fixtures only.
- **Logo** — none supplied. `Wordmark` renders as type. If a logo SVG appears, it replaces the wordmark's inner content only.
- **OG images** — not yet supplied. Wire the meta tags to `/og/<route>.png` now.

## Files in this bundle

```
PLAN.md                     Architecture, decisions, DNS, deploy, phases
CLAUDE.md                   Drop at the Angular repo root
TASKS.md                    Ordered checklist
reference/
  DESIGN_SYSTEM.md          Full design system documentation — read this first
  styles.css                Single stylesheet entry (imports the token files)
  tokens/*.css              Authoritative token values
  components/*/             14 components: .jsx.txt source, .d.ts.txt prop contract, .prompt.md intent
  guidelines/*.card.html.txt  24 foundation specimens — visual acceptance target
  ui_kit/index.html         The click-through prototype. Open this in a browser first
  ui_kit/*.jsx.txt          Screen sources
```

Source files carry a `.txt` suffix so the design-system compiler ignores this bundled copy. Strip it when you open them — the contents are unchanged, and `ui_kit/index.html` already points at the suffixed names, so the prototype runs as-is.

Open `reference/ui_kit/index.html` in a browser before writing any code — it is the whole site, clickable.

## Not decided yet

Listed in full at the top of `PLAN.md`: the intro animation, the tweaks panel, and legal copy. Analytics defaulted to consent-gated GA4 with Consent Mode v2 (the only GDPR-safe option for an EU business) — confirm or override.
