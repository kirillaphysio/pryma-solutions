# Pryma Design System

The design language for **Pryma Solutions** — a studio-plus-platform that designs, builds and ships marketing websites for software companies. The brand reads synthwave-futurist: a navy-to-violet void, neon pink as the single action colour, electric cyan as the only other chromatic voice, and mesh-gradient atmosphere with a perspective grid floor standing in for photography.

## Sources this system was built from

| Source | What it gave us | Access |
|---|---|---|
| `uploads/Subtle-Gradient-Design-System.md` | The structural skeleton: type tier names and exact metrics (64/58/50/32px display, 1.55 body leading, negative display tracking), the spacing and radius scales (8px base, 90px pill), the component inventory, and the "gradient atmosphere + floating product mockup" signature | In this project |
| Written brief | Brand name (Pryma Solutions), positioning (website design solutions), and the visual direction: synthwave, futuristic, navy-and-pink gradient, neon, dark purple, landing page first | Chat |

**One deliberate divergence, flagged for review.** The uploaded specification describes a *light* system — deep teal primary, cream-mist canvases, pastel-mesh pastels, blue inline links. The brief asks for the opposite temperature: dark navy, neon pink, purple. This system keeps every *structural* decision from the spec (tier names, numeric metrics, pill geometry, the mesh-behind-mockup signature, "chromatic monotheism" — one accent for actions) and re-keys the palette to the synthwave direction. Nothing was rounded or snapped: 14.4px button-cap, -0.768px hero tracking, 90px pill radius and 10px 30px secondary padding all carry over verbatim.

No codebase, Figma file or slide deck was supplied. No logo, imagery or icon set was supplied either — see `assets/README.md` for exactly what that means and what to hand over next.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. Nothing but `@import` lines |
| `tokens/colors.css` | Base ramps (navy, pink, violet, cyan, mist) plus semantic aliases and the signature gradients |
| `tokens/typography.css` | Font stacks, weights and every tier's size / leading / tracking |
| `tokens/spacing.css` | Spacing, radius, container and breakpoint tokens |
| `tokens/effects.css` | Elevation, neon glow, glass blur, motion, grid texture |
| `tokens/fonts.css` | `@font-face` rules for Space Grotesk, Inter and JetBrains Mono |
| `tokens/base.css` | Element defaults — body, headings, links, focus rings, scrollbar |
| `tokens/themes.css` | The light theme — semantic aliases re-keyed under `[data-theme="light"]` |
| `guidelines/*.card.html` | 24 foundation specimen cards (Colors, Type, Spacing, Effects, Brand) |
| `components/` | 14 reusable components in five groups |
| `ui_kits/website/` | The pryma.solutions marketing site — four click-through screens |
| `templates/landing-page/` | Landing-page starting file consuming projects can copy (`LandingPage.dc.html` + `ds-base.js`) |
| `assets/README.md` | Why this folder is empty and what to supply |
| `SKILL.md` | Agent-Skills front matter for use outside this project |

### Components

| Group | Components |
|---|---|
| `components/actions/` | `Button` (primary · secondary · outline · onAccent · ghost; lg/md/cap), `IconButton` (ghost · glass · neon) |
| `components/forms/` | `TextInput`, `TextArea`, `Select` |
| `components/surfaces/` | `Card` (surface · accent · gradient · band · outline), `PricingCard`, `StatCard` |
| `components/navigation/` | `NavBar`, `Footer` |
| `components/brand/` | `Wordmark`, `Eyebrow`, `TextLink`, `MeshBackdrop`, `MockupFrame`, `Icon` |

**Intentional additions** (not in the source spec, added because the surfaces need them):

- `Icon` — a Lucide wrapper. The spec defines no icon set; without a wrapper every consumer hand-rolls SVG, which the system forbids.
- `IconButton` — the footer social row and mockup chrome need an icon-only action; the spec only defines labelled pills.
- `TextArea` and `Select` — the spec defines `text-input` only, but the contact surface it describes cannot be built without them. Both inherit the input's well, ring and 4px radius exactly.
- `MeshBackdrop`, `MockupFrame`, `Wordmark` — the spec describes these as "signature components" in prose without giving them component names. They are the brand's most load-bearing pieces, so they are real components here.

Everything else maps 1:1 onto a family the source defines. Nothing was invented beyond the four items above — there is no Toast, Tooltip, Tabs or Avatar, because the source defines none.

---

## Content fundamentals

**Voice: a senior practitioner who has shipped this before, talking to a busy buyer.** Confident, specific, faintly dry. The neon does the shouting; the copy does not.

- **We / you.** The studio is "we", the reader is "you". No third person ("Pryma helps teams…"), no royal "our team".
- **Sentence case everywhere** except eyebrows, which are uppercase with 0.96px tracking (`Eyebrow`). Never Title Case A Headline Like This.
- **Headlines are claims, not categories.** "Websites built to look ahead of their market." not "Web design services". They run 4–9 words and end in a full stop.
- **Numbers over adjectives.** "Six weeks from kickoff", "1.9s median build", "94% Lighthouse median" — the `StatCard` exists because the brand argues with figures.
- **Say the constraint out loud.** "Fixed scope, fixed date, one invoice per phase. No retainers you cannot exit." Naming the limit is how this brand builds trust.
- **Buttons are verb-first and two or three words:** "Start a project", "Book a teardown", "Request access", "Send brief". Never "Submit", never "Learn more" on a primary.
- **Captions carry the honest detail** — "Prices exclude VAT", "Median across 120 teams", "We reply within two working days".
- **No emoji. Ever.** Not in UI, not in marketing copy, not in headings. Glyphs come from Lucide.
- **No exclamation marks, no rhetorical questions in body copy** (a closing-band question is the one licensed exception: "Ready to see what your site could be?").
- **Avoid** "unlock", "supercharge", "seamless", "revolutionise", "delight", "10x". If a sentence would survive on any SaaS site, rewrite it.
- **Typographic detail:** en dashes in ranges (11–50), no Oxford comma, `hello@pryma.solutions` set in mono, dates as "Mon–Fri, 09:00–18:00 CET".

Example, in voice:

> **Every site ships with its own design system.**
> You get the tokens, the component library and the page templates — documented, versioned and yours.

---

## Visual foundations

### Colour

Dark-first and monotheistic about action colour. **Neon pink `#ff2e88` is the only filled-button colour**, and there is at most one filled pink button per viewport. **Cyan `#38e1ff` is the only other chromatic voice** — links, ticks, focus rings, the occasional icon. **Violet `#9d5cff` is atmosphere, not action**: mesh washes, secondary-button tint, hover glow. Everything else is the navy ramp (`#05030f` → `#2e1f74`) and cool mist neutrals.

Backgrounds are never flat for long. Page base is `--navy-950`; the footer drops to `--navy-1000`; heroes and closing bands get the mesh. Semantic colours (`--signal-error/warn/success`) appear only as state and never as decoration.

**Light theme.** Dark is the default; light is opt-in with `data-theme="light"` on `<html>` (whole page) or on any container (one light section inside a dark page). It re-keys the semantic aliases only — primitives, type, spacing and motion are shared, so components need no theme logic. Page base becomes `#f8f6ff`, cards go solid white, and lift switches from glow to real shadow. Two things are identical in both themes and anchor the brand: the pink CTA (`--action-primary`) and the gradient band (`--surface-featured`). Accents deepen where caps-size text sits on white — cyan `#38e1ff` becomes `#0b7f9c` for links and ticks, violet `#b78cff` becomes `#6d33d6` for eyebrows; the raw neon ramp is still for fills and glow only. Text glow is off in light (`--glow-text-*: none`). Consume the semantic aliases (`--text-hi`, `--surface-card`, `--tone-cyan-fg`, `--line-hairline`) — never a raw ramp step — and anything you build themes for free.

### Type

**Space Grotesk** (500/600/700) for display and headings — geometric, broad apertures, technical character. **Inter** (400/500/700) for all UI and body copy. **JetBrains Mono** for token names, build metadata and mockup title bars; mono is a deliberate texture in this brand, not just a code font.

Display sizes run 64 / 58 / 50 / 32px with negative tracking (-0.768px at 64px) — the pull is mandatory, headlines read loose without it. Body sits at 1.55 leading, 16px default, 18px for marketing leads. Eyebrows are 12px, 700, uppercase, +0.96px.

### Spacing and layout

8px base with 4/12/20/28 sub-steps. Sections breathe at **96px** vertical, tightening to **48px** between related bands. Cards take **32px** padding, gradient bands **48px**. Content centres in a **1240px** container; mesh gradients bleed past it. Grids collapse 3-up → 2-up → 1-up at 1024 / 768. Only the nav is fixed (`position: sticky`), on translucent navy glass.

### Backgrounds, texture, imagery

The signature is `MeshBackdrop`: three blurred radial washes (pink top-left, violet top-right, cyan bottom-centre), an optional **perspective grid floor** (44px violet grid at `rotateX(58deg)`, masked to fade upward) and an optional **1px horizon rule** in the brand gradient with a wide pink bloom. One horizon per page. Full-bleed, always behind content, never inside a card.

There is no photography in this system. Product UI goes inside `MockupFrame` — 12px radius, mono title bar, traffic-light dots at 65% opacity — sitting **directly on the mesh**. Never nest a mockup inside a card; never give it its own drop shadow. Colour temperature of any future imagery: cool, high-contrast, magenta-and-cyan lit. No grain, no warm filters.

### Elevation, glow and shadow

Grey shadow does not read on navy, so **glow is the elevation system.** Four `--elev-*` levels exist for near-black lift; the working language is `--glow-pink-*`, `--glow-cyan-*` and `--glow-violet-*`, each a tight 1px coloured rim plus a soft bloom. `--glow-pink-lg` (60px + 140px bloom) is reserved for the closing band and the horizon line.

### Borders and hairlines

**1px inset box-shadow, never a CSS border**, so hairlines never affect layout: `--line-hairline` `rgba(179,174,212,.14)` at rest, `--line-strong` at 28% for hover and emphasis, `--line-neon` / `--line-cyan` when a surface needs to be chromatic. The only real `border` in the system is the nav's bottom edge and the footer's top rule.

### Transparency and blur

Glass is used in exactly three places: the sticky nav (`--blur-nav`, 24px, over `rgba(10,7,32,.72)`), default cards (`--blur-glass`, 18px, over `rgba(20,16,56,.72)`), and input wells (`--surface-inset`, no blur). Nothing else is translucent — dialogs, bands and footers are opaque.

### Corner radii

4px inputs · 8px compact chrome · 12px mockup frames · 16px all cards · 48px badge backdrops · **90px every button, without exception.** A rounded-rectangle button is off-brand.

### Motion

Fast and decisive, never playful. `--dur-fast` 120ms for hover colour, `--dur-med` 220ms for glow and lift, `--dur-slow` 420ms for reveals, all on `--ease-out` `cubic-bezier(.22,.68,0,1)` — quick out, long settle. **No bounce, no spring, no overshoot.** Ambient gradient drift, where used, runs at `--dur-ambient` 14s. Entrances are fade-plus-8px-rise; nothing slides in from off-screen.

### Interaction states

- **Hover** — brighten the fill roughly 6% *and* step the glow up one level (`sm` → `md`); links gain an underline at 3px offset plus a cyan text glow; cards lift 3px with a violet rim.
- **Press** — darken to `--action-primary-press` and `translateY(1px)`. No scale-down.
- **Focus** — 2px `--cyan-400` outline at 2px offset. Never removed, never replaced with a shadow-only ring.
- **Disabled** — 42% opacity plus `saturate(.35)` so neon reads as switched off rather than merely faded.
- **Active nav** — 2px pink underline via inset shadow; hover shows the same rule at 55% opacity.

### Cards

Translucent navy glass, 16px radius, 32px padding, a 1px hairline via inset shadow, no visible border, no grey shadow. Variants: `surface` (default glass), `accent` (solid violet), `gradient` / `band` (the pink→violet fill, 48px padding, used for closing CTAs), `outline` (hairline only). Interactive cards lift and glow; static ones do neither.

---

## Iconography

**Lucide, 2px stroke, round caps and joins, 24px grid** — loaded from `unpkg.com/lucide-static@0.544.0` and rendered by the `Icon` component as a CSS mask filled with `currentColor`. Masking (rather than `<img>`) is what lets a glyph inherit its parent's colour, so an icon inside a Button always matches the label.

- **This is a flagged substitution.** The source material defines no icon set. Lucide was chosen because its stroke weight and geometric construction match Space Grotesk's technical character. If Pryma has its own glyphs, swap the `BASE` constant in `components/brand/Icon.jsx`.
- **Sizes:** 15–16px inline and in `cap` buttons, 20px default, 22–24px in nav and feature tiles, 28–36px for feature marks and success states.
- **No icon font, no sprite sheet, no PNG icons.** One mechanism only.
- **Never hand-roll SVG paths** for an icon, and never use emoji or Unicode symbols (✓, →, ★) as icons. The one licensed Unicode character is the arrow in `TextLink arrow` (`→`), which is type, not iconography.
- **Recurring glyphs:** `arrow-right` (every forward CTA), `check` (feature and pricing lists), `sparkles`, `zap`, `gauge`, `shield-check`, `git-branch`, `palette`, `layers`, `file-code`, `plus` / `minus` (FAQ toggles), `circle-check` (success), `mail`, `clock`, `search`, `chevron-down` (select).
- **Colour:** inherit by default. Deliberate tints are cyan for confirmation and utility, pink for emphasis and forward motion, violet for structural or system concepts.

---

## Fonts — substitution notice

No font binaries were supplied. All three families are the open-source faces the specification names (or their nearest equivalent) and are served from `fonts.gstatic.com`:

- **Space Grotesk** 500/600/700 — display, exactly as specified
- **Inter** 400/500/700 — UI tier, exactly as specified
- **JetBrains Mono** 400/700 — **an addition**, for token names and mockup chrome; the spec names no mono face

If Pryma licenses a display face of its own, replace `tokens/fonts.css` and `--font-display`; everything else in the system is stack-agnostic.

## Do / don't

**Do** keep one filled pink button per viewport · wrap heroes and closing bands in `MeshBackdrop` · use 90px radius on every button · pull display tracking negative · put mockups on the mesh, not in cards · argue with numbers.

**Don't** add a fourth chromatic accent · use pink for body text or links · use grey drop shadows for lift · nest a `MockupFrame` in a `Card` · shrink button padding below 14px 28px · use emoji · animate with a bounce · put two eyebrows in one section.
