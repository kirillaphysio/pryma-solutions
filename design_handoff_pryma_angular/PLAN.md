# pryma.solutions — Angular implementation plan

Target repo: **kirillaphysio/pryma-solutions** (`main`, currently empty)
Stack: **Angular (standalone, SSG prerender) → GitHub Pages → pryma.solutions**
Source of truth for design: the Pryma Design System project (tokens + 14 components + the `ui_kits/website` click-through kit, all bundled in this folder under `reference/`).

---

## 1. Decisions already locked

| Area | Decision |
|---|---|
| Framework | Angular, latest stable, **standalone components only** — no NgModules |
| Rendering | **Prerendered SSG.** `@angular/ssr` with `outputMode: 'static'` (or `ng build --prerender`). No Node server; GitHub Pages serves the emitted HTML per route |
| Routing | Path-based (no hash), **English slugs** |
| i18n | `@angular/localize`. **HU is the root** (`/`), EN lands at `/en/` as a second prerendered build. v1 ships HU only; all text is marked with `i18n` attributes from day one so the EN bundle is a build step, not a refactor |
| Styling | **SCSS rebuild of the DS tokens.** CSS custom properties stay as the runtime layer (theming + the accent swap depend on them); SCSS adds `$`-variables, maps and mixins on top |
| Components | **Full 1:1 library** — every DS component becomes a standalone Angular component in `src/app/ds/` |
| Contact | **No backend.** Form fields compose a prefilled `mailto:` on submit |
| Analytics | **GA4 via gtag.js, injected only after consent**, Consent Mode v2 default-denied. *(You skipped this question twice — this is my pick, and it is the only GDPR-safe default for an EU business. Say the word if you want always-on GA4 or Plausible instead.)* |
| Consent | Cookie banner + a consent gate that GA reads. Nothing sets a cookie before "Elfogadom" |
| SEO | Per-route title/description/canonical/OG/Twitter tags. **OG image tags wired now, PNGs supplied later** |
| Demos | asztalos / edző / szalon rebuilt as **Angular lazy routes, two routes each** (home + one subpage); the gallery iframes each demo's home |
| Deploy | GitHub Actions on push to `main` → `actions/deploy-pages` |
| Sequencing | **HU-only v1 to the live domain.** EN is phase 2 |

### Open items — decide before phase 4

_Resolved 2026-09-04:_

1. **The intro animation.** ~~Ship v1 without it, add later behind `prefers-reduced-motion`.~~ **Deferred** — not built in the first pass.
2. **The Tweaks panel** (theme switch, accent swap, CTA label). **Dropped** — review-only device; the light theme stays reachable via `data-theme="light"` only.
3. **Legal copy.** Adatkezelési tájékoztató and Impresszum need real text — company name, seat, tax number, hosting provider. **Still blocked on the client** — `/privacy` and `/imprint` routes are not created until the copy exists.

---

## 2. Domain and DNS

`pryma.solutions` is **not registered yet.** Order of operations matters, because Pages certificate provisioning takes up to 24h after DNS resolves.

1. Register `pryma.solutions`. Registrar choice is yours; if DNS ends up at Cloudflare, set the records to **DNS-only (grey cloud)** — Cloudflare proxy in front of Pages breaks certificate renewal.
2. Add records:
   ```
   A     @   185.199.108.153
   A     @   185.199.109.153
   A     @   185.199.110.153
   A     @   185.199.111.153
   AAAA  @   2606:50c0:8000::153
   AAAA  @   2606:50c0:8001::153
   AAAA  @   2606:50c0:8002::153
   AAAA  @   2606:50c0:8003::153
   CNAME www kirillaphysio.github.io.
   ```
3. Repo → Settings → Pages → Custom domain = `pryma.solutions`, then tick **Enforce HTTPS** once the cert appears.
4. Commit `public/CNAME` containing exactly `pryma.solutions` — Angular copies `public/` to the output root, so the file survives every deploy. Without it, Pages drops the custom domain on the next build.
5. **`baseHref` is `/`** because this is an apex-domain site. Before the domain resolves, deploy previews live at `kirillaphysio.github.io/pryma-solutions/` — build those with `--base-href=/pryma-solutions/`. Do not hardcode `/` in templates; always use Angular `routerLink`, never a raw `href="/services"`.

---

## 3. Repository layout

```
pryma-solutions/
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ CNAME                      # pryma.solutions
│  ├─ robots.txt
│  ├─ favicon.svg
│  └─ og/                        # OG PNGs land here later
├─ src/
│  ├─ index.html
│  ├─ main.ts                    # bootstrapApplication
│  ├─ main.server.ts
│  ├─ app/
│  │  ├─ app.config.ts           # providers: router, hydration, title strategy
│  │  ├─ app.routes.ts
│  │  ├─ app.component.ts        # NavBar + <router-outlet> + Footer + CookieBanner
│  │  ├─ ds/                     # the design system, 1:1
│  │  │  ├─ actions/             pry-button, pry-icon-button
│  │  │  ├─ forms/               pry-text-input, pry-text-area, pry-select
│  │  │  ├─ surfaces/            pry-card, pry-pricing-card, pry-stat-card
│  │  │  ├─ navigation/          pry-nav-bar, pry-footer
│  │  │  ├─ brand/               pry-wordmark, pry-eyebrow, pry-text-link,
│  │  │  │                       pry-mesh-backdrop, pry-mockup-frame, pry-icon
│  │  │  └─ layout/              pry-container, pry-section, pry-section-head,
│  │  │                          pry-feature-tile, pry-step-card, pry-check-list
│  │  ├─ pages/
│  │  │  ├─ home/  services/  contact/  legal/
│  │  │  └─ demo/                gallery + asztalos/ edzo/ szalon/ (lazy)
│  │  ├─ core/
│  │  │  ├─ seo.service.ts       # title, meta, canonical, OG per route
│  │  │  ├─ consent.service.ts   # signal-based, localStorage-backed
│  │  │  └─ analytics.service.ts # gtag loader, consent-gated
│  │  └─ shared/                 cookie-banner, skip-link
│  ├─ locale/
│  │  ├─ messages.xlf            # extracted source (hu)
│  │  └─ messages.en.xlf         # phase 2
│  └─ styles/
│     ├─ _tokens.scss            # $-variables + SCSS maps
│     ├─ _mixins.scss            # glow(), hairline(), display-tier(), media()
│     ├─ _reset.scss
│     ├─ _fonts.scss
│     ├─ _theme-light.scss
│     └─ styles.scss             # single entry, emits :root custom properties
├─ scripts/sitemap.mjs           # writes sitemap.xml post-build
├─ angular.json
└─ CLAUDE.md
```

---

## 4. Token conversion — SCSS layer over CSS custom properties

**Do not replace the custom properties with SCSS variables.** Two things at runtime need CSS vars: the `data-theme="light"` re-key and any future accent swap. The SCSS layer sits *above* them.

Shape it like this:

```scss
// _tokens.scss — authored values
$navy: (950: #05030f, 1000: #030209, 800: #140f38, 600: #2e1f74);
$pink: (500: #ff2e88, 400: #ff4d9b, 600: #e01f74);
$cyan: (400: #38e1ff, 700: #0b7f9c);
$violet:(500: #9d5cff, 300: #b78cff, 700: #6d33d6);

$space: (1: 4px, 2: 8px, 3: 12px, 4: 16px, 5: 20px, 6: 24px, 7: 28px, 8: 32px, 12: 48px, 24: 96px);
$radius:(input: 4px, chrome: 8px, mockup: 12px, card: 16px, badge: 48px, pill: 90px);
$bp:    (md: 768px, lg: 1024px, xl: 1240px);

$dur: (fast: 120ms, med: 220ms, slow: 420ms, ambient: 14s);
$ease-out: cubic-bezier(.22,.68,0,1);
```

```scss
// styles.scss — emit the runtime contract
:root {
  --surface-page: #{map.get($navy, 950)};
  --action-primary: #{map.get($pink, 500)};
  --radius-pill: #{map.get($radius, pill)};
  --dur-med: #{map.get($dur, med)};
  // …every semantic alias from reference/tokens/*.css
}
[data-theme="light"] { @include light-theme; }
```

Mixins worth writing, because these three rules are repeated everywhere in the DS and are the easiest to get subtly wrong:

```scss
@mixin hairline($strength: .14) {          // never a CSS border
  box-shadow: inset 0 0 0 1px rgba(179,174,212,$strength);
}
@mixin glow($hue: pink, $size: sm) { … }   // 1px coloured rim + soft bloom
@mixin display($tier: 1) {                 // 64/58/50/32 with mandatory negative tracking
  font-family: var(--font-display);
  @if $tier == 1 { font-size: 64px; letter-spacing: -.768px; line-height: 1.04; }
  …
}
@mixin media($k) { @media (min-width: map.get($bp, $k)) { @content; } }
```

Hard rules carried over from the DS (they are in `CLAUDE.md` too, because they are the ones that get violated):

- **90px radius on every button.** No exceptions.
- **One filled pink button per viewport.** Everything else secondary/outline/ghost.
- **Hairlines are `inset box-shadow`, never `border`.** Only the nav bottom edge and footer top rule are real borders.
- **Glow is the elevation system.** No grey `box-shadow` on navy.
- **Negative tracking on every display tier** — it is not optional polish.
- **No emoji.** Icons are Lucide only, via CSS mask so they inherit `currentColor`.
- **A `MockupFrame` never goes inside a `Card`**, and never gets its own shadow.

Fonts: `Space Grotesk` 500/600/700, `Inter` 400/500/700, `JetBrains Mono` 400/700. Self-host them in `public/fonts/` with `font-display: swap` rather than hitting `fonts.gstatic.com` — one fewer third-party connection to disclose in the privacy notice, and it removes a render-blocking request.

---

## 5. Routes and prerender targets

English slugs, HU content at the root.

| Route | Page | Prerendered | Notes |
|---|---|---|---|
| `/` | Home | ✅ | Hero on `MeshBackdrop`, three services, three work phases, "why one person", closing band |
| `/services` | Services | ✅ | Services, three typical packages (`PricingCard`), "jó tudni" list |
| `/demo` | Demo gallery | ✅ | Three `MockupFrame`s, each iframing a demo home |
| `/demo/asztalos` | Demo A home | ✅ | Lazy chunk, no NavBar/Footer shell |
| `/demo/asztalos/<sub>` | Demo A subpage | ✅ | |
| `/demo/edzo`, `/demo/edzo/<sub>` | Demo B | ✅ | |
| `/demo/szalon`, `/demo/szalon/<sub>` | Demo C | ✅ | |
| `/contact` | Contact | ✅ | Form composes `mailto:` |
| `/privacy` | Adatkezelési tájékoztató | ✅ | Copy needed |
| `/imprint` | Impresszum | ✅ | Copy needed |
| `/404.html` | Not found | ✅ | Pages serves this automatically on unknown paths |

Demo routes must render **without the site shell** — they are standalone mini-sites shown in a frame. Give them a separate layout component, not `AppComponent`.

Iframe hygiene for the gallery: `loading="lazy"`, `sandbox="allow-same-origin allow-scripts"`, `title` on every frame (a11y), and hide the scrollbar the way the kit does (`scrollbar-width: none`).

---

## 6. i18n mechanics

```jsonc
// angular.json (abridged)
"i18n": {
  "sourceLocale": { "code": "hu", "baseHref": "/" },
  "locales": { "en": { "translation": "src/locale/messages.en.xlf", "baseHref": "/en/" } }
}
```

- v1: mark **every** user-visible string with `i18n` / `i18n-*` attributes, plus `$localize` in TS. Run `ng extract-i18n` and commit `messages.xlf`. Do **not** create `messages.en.xlf` yet.
- Meaning/description on every marker: `i18n="hero|Main headline on the home page"`. Without it the phase-2 translation pass is guesswork.
- Phase 2: add the EN translation file, set `localize: ["hu","en"]`, and the build emits `dist/.../hu/` and `dist/.../en/`. The deploy step copies `hu/*` to the artifact root and `en/` alongside it.
- Add `<link rel="alternate" hreflang="hu" …>` / `hreflang="en"` / `x-default` in `SeoService` from phase 2 on, and a language switch in the nav that swaps the URL prefix rather than routing client-side.
- Slugs stay English in both locales — one route table, no per-locale slug map. This was your call and it keeps the router trivial.

---

## 7. Contact form → mailto:

No server, so submit builds a URL:

```ts
const body = [
  $localize`Név: ${f.name}`,
  $localize`Cég: ${f.company}`,
  $localize`E-mail: ${f.email}`,
  '', f.message, '',
].join('\n');
location.href = `mailto:hello@pryma.solutions`
  + `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

- Keep the existing client-side validation (required name, valid email, message ≥ 20 chars) — it still improves the message quality even without a backend.
- **Be honest in the UI**: after submit, the success state must say the mail client has opened, not "message sent". A `mailto:` that silently fails (webmail-only users) is the main risk here — pair it with a visible `hello@pryma.solutions` in mono type and a copy-to-clipboard button.
- `rel="noopener"`, and never put the address in plain text in the DOM more than once (light scrape defence; don't over-engineer it).

---

## 8. Consent + analytics

```ts
// consent.service.ts
readonly state = signal<'unknown'|'granted'|'denied'>(read() ?? 'unknown');
```

- `index.html` sets Consent Mode v2 defaults **before** anything else, all denied:
  ```html
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
  gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',
    ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});</script>
  ```
- The gtag.js `<script>` is injected by `AnalyticsService` **only** on `granted`, then `gtag('consent','update',{analytics_storage:'granted'})`.
- Banner: two explicit buttons (Elfogadom / Elutasítom) — no "X", no implied consent from scrolling. Decision persisted in `localStorage` (`pryma-consent`), re-askable from a link in the footer.
- Banner is `role="dialog"` + `aria-live`, focus-trapped, and must not block the page's first paint.
- Route changes send `page_view` manually (SPA navigation doesn't fire it), only when granted.
- Measurement ID goes in `src/environments/` as `G-XXXXXXXXXX` — a public ID, safe to commit.

---

## 9. SEO

`SeoService` called from each page's `ngOnInit` (or a `TitleStrategy` + route `data`):

- `title` — page-specific, `— Pryma Solutions` suffix, ≤ 60 chars.
- `meta description` — 140–160 chars, in brand voice, no "unlock/seamless".
- `link rel=canonical` — absolute, `https://pryma.solutions/...`.
- `og:type/title/description/url/image/image:alt`, `og:locale=hu_HU`, `twitter:card=summary_large_image`.
- **OG images**: wire `og:image` to `/og/<route>.png` (1200×630) now. The files don't exist yet — supply them later and nothing else changes. Add a JSON-LD `LocalBusiness`/`ProfessionalService` block on `/` once the legal details exist.
- `scripts/sitemap.mjs` reads the prerendered route list and writes `sitemap.xml`; `public/robots.txt` allows everything and points at it. Add the `/en/` URLs in phase 2.
- `noindex` on the demo routes — they are showcase fixtures, not content you want ranking against the real thing.

---

## 10. Deploy

```yaml
# .github/workflows/deploy.yml
name: deploy
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run build            # ng build --configuration production
      - run: node scripts/sitemap.mjs
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist/pryma-solutions/browser }
  deploy:
    needs: build
    environment: { name: github-pages, url: '${{ steps.deploy.outputs.page_url }}' }
    runs-on: ubuntu-latest
    steps:
      - id: deploy
        uses: actions/deploy-pages@v4
```

Watch for: the artifact path differs between Angular versions (`dist/<name>/browser` for application builder) — check what `ng build` actually emits before wiring it. Pages → Settings → Build and deployment → **Source: GitHub Actions**, not "Deploy from a branch".

---

## 11. Phases

**Phase 0 — scaffold (½ day)**
`ng new pryma-solutions --style=scss --ssr --routing`, prune the sample content, commit `CLAUDE.md`, `public/CNAME`, the workflow. First green deploy to `github.io/pryma-solutions/` with a single "Hamarosan" page. Prove the pipeline before writing any UI.

**Phase 1 — token + type foundation (1 day)**
Convert `reference/tokens/*.css` → `src/styles/`. Self-host fonts. Build a `/dev/tokens` throwaway route that renders every colour, type tier, radius, glow and spacing step, and eyeball it against `reference/guidelines/*.card.html`. Delete the route before launch.

**Phase 2 — DS component library (2–3 days)**
Port all 14 components + the 6 layout helpers from `reference/components/` and `reference/ui_kit/shared.jsx`. Each `.d.ts` in the reference folder is the prop contract — mirror it as `input()` signals. Each `.prompt.md` documents intent and variants; read it before porting. Build a `/dev/components` gallery route. No page work until this is done — the pages are then almost pure composition.

**Phase 3 — pages, HU only (2–3 days)**
Home, Services, Contact, Legal. Copy comes verbatim from the reference screens; it is written in brand voice and reviewed. `i18n` attributes on everything as you go, not after.

**Phase 4 — demos (2 days)**
Three demos × two routes, shell-less layout, gallery with iframes.

**Phase 5 — SEO, consent, GA, launch (1 day)**
`SeoService`, banner, gtag, sitemap, `404.html`. Register the domain, point DNS, enforce HTTPS. Lighthouse pass: target ≥ 95 on all four categories — the DS is glow-heavy, so watch for large paint areas and `filter: blur()` cost on mobile.

**Phase 6 — EN (1 day, after launch)**
Translate `messages.xlf`, enable the second locale, `hreflang`, language switch, sitemap update.

**Phase 7 — optional**
Intro animation, JSON-LD, OG image generation, blog if it ever earns its place.

---

## 12. Definition of done

- `pryma.solutions` and `www.pryma.solutions` both serve over HTTPS, www redirecting to apex.
- Every route returns real prerendered HTML with content in the source (view-source shows the headline).
- No console errors, no 404s on assets, no layout shift above 0.05 CLS.
- Keyboard-only pass: skip link, visible 2px cyan focus ring on every interactive element, no focus traps outside the banner.
- `prefers-reduced-motion` kills every transition and the ambient gradient drift.
- Nothing writes a cookie or contacts Google before consent — verify in DevTools → Application with a clean profile.
- 320px viewport has no horizontal scroll; 3-up grids collapse at 1024 then 768.
