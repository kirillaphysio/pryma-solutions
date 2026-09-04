# CLAUDE.md — pryma.solutions

Angular marketing site for Pryma Solutions, deployed as static prerendered HTML to GitHub Pages at `pryma.solutions`.
Read `PLAN.md` before starting work. Design reference lives in `reference/` (HTML/JSX prototypes — **references, not code to copy**).

## Commands

```bash
npm start                  # ng serve
npm run build              # ng build --configuration production (prerenders all routes)
npm run extract            # ng extract-i18n --output-path src/locale
npx ng build --base-href=/pryma-solutions/   # preview builds before the domain resolves
```

## Architecture rules

- **Standalone components only.** No NgModules, ever.
- **Signals for state**, `input()` / `output()` for component API. No `@Input()` decorators in new code.
- `ChangeDetectionStrategy.OnPush` on every component.
- Native control flow (`@if`, `@for`, `@switch`), never `*ngIf` / `*ngFor`.
- Design-system components live in `src/app/ds/`, prefixed `pry-`. They are **presentational only** — no routing, no services, no fetching. Pages compose them.
- Pages live in `src/app/pages/<name>/`, lazy-loaded via `loadComponent`.
- Never a raw `href` for internal links — `routerLink` only (base-href changes between preview and production).
- Demo routes (`/demo/*`) use their own shell-less layout, not `AppComponent`.

## Design system — non-negotiable

These are the rules that get broken. Check against them before committing UI.

- **Every button has `border-radius: 90px`.** A rounded rectangle is off-brand.
- **One filled pink button per viewport.** All other actions are secondary, outline or ghost.
- **Pink `#ff2e88` is the only filled-action colour. Cyan `#38e1ff` is the only other chromatic voice** (links, ticks, focus rings). **Violet is atmosphere, never action.**
- **Hairlines are `inset box-shadow: 0 0 0 1px rgba(179,174,212,.14)`, never `border`.** The only real borders in the system are the nav's bottom edge and the footer's top rule.
- **Glow is the elevation system.** Never a grey drop shadow — it does not read on navy.
- **Display type carries negative tracking** (-0.768px at 64px). Mandatory, not polish.
- **Consume semantic aliases** (`--text-hi`, `--surface-card`, `--action-primary`, `--line-hairline`), never a raw ramp step like `--pink-500`. This is what makes `data-theme="light"` work for free.
- Radii: 4px inputs · 8px chrome · 12px mockup frames · 16px cards · 48px badges · 90px buttons.
- Sections breathe at 96px, related bands at 48px, cards pad 32px, gradient bands 48px. Content centres in a 1240px container; mesh gradients bleed past it.
- **Icons: Lucide only**, rendered as a CSS mask filled with `currentColor` via `pry-icon`. Never hand-roll an SVG path, never an icon font, **never emoji or Unicode symbols as icons**. The one licensed Unicode glyph is the `→` in `pry-text-link[arrow]`.
- Motion: 120ms hover / 220ms glow+lift / 420ms reveals, all `cubic-bezier(.22,.68,0,1)`. **No bounce, no spring, no overshoot.** Entrances are fade + 8px rise; nothing slides in from off-screen.
- Focus: 2px `#38e1ff` outline at 2px offset. Never removed.
- `MeshBackdrop` wraps heroes and closing bands only — one horizon rule per page. A `MockupFrame` never goes inside a `Card` and never gets its own shadow.
- **No photography.** Product UI goes in a `MockupFrame` sitting directly on the mesh.

## Copy rules

- Hungarian is the source locale. **Never rewrite existing copy** — it is reviewed and in brand voice.
- We / you. Sentence case everywhere except eyebrows (uppercase, +0.96px tracking).
- Headlines are claims ending in a full stop, 4–9 words.
- Buttons are verb-first, two or three words: "Kérj ajánlatot". Never "Submit", never "Learn more" on a primary.
- No emoji. No exclamation marks. No rhetorical questions outside a closing band.
- Banned words: unlock, supercharge, seamless, revolutionise, delight, 10x.
- Never invent a statistic, client name, testimonial or case study. This is a one-person new business — the site says only what is true.

## i18n

- Every user-visible string gets an `i18n` attribute **with a meaning and description**: `i18n="hero|Main headline on the home page"`. In TS use `$localize`.
- HU is the source locale at `/`; EN arrives in phase 2 at `/en/`. Slugs stay English in both.
- Do not create `messages.en.xlf` until phase 6. Do commit the extracted `messages.xlf`.

## Privacy

- **Nothing writes a cookie or loads a Google script before consent.** Consent Mode v2 defaults are denied in `index.html`; `AnalyticsService` injects gtag.js only after `granted`.
- Fonts are self-hosted. Do not add a third-party embed, CDN script or tracking pixel without asking.

## Never

- `ng generate` a module, or add a UI library (Material, PrimeNG, Tailwind, Bootstrap).
- Add a dependency without saying why in the commit message.
- Commit `dist/`, `.angular/`, or delete `public/CNAME`.
- Fake data, lorem ipsum, or a placeholder testimonial in shipped pages.
