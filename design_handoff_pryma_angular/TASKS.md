# TASKS.md — pryma.solutions

Work top to bottom. Tick as you go. Don't start a phase before the previous one is green.

> **Status — 2026-09-04.** Phases 0–3 implemented (scaffold, tokens, DS library, Home/Services/Contact/404).
> Build prerenders green to `dist/pryma-solutions/browser`. Remaining: demos (Phase 4), legal pages
> (blocked on client copy), consent + analytics + SEO (Phase 5), EN (Phase 6). Two manual steps that
> can't be done from code are marked _(manual)_.

## Phase 0 — scaffold

- [x] `ng new pryma-solutions` (Angular 22, standalone, SSR); prune sample content
- [x] Set `outputMode: "static"` so the build emits HTML per route, no Node server
- [x] Commit `CLAUDE.md`, `PLAN.md`, `reference/`
- [x] `public/CNAME` → `pryma.solutions`
- [x] `public/robots.txt`
- [x] `.github/workflows/deploy.yml`; repo Settings → Pages → Source: **GitHub Actions** _(workflow done; the Settings toggle is manual)_
- [x] Verify the artifact path matches what `ng build` emits (`dist/pryma-solutions/browser`)
- [ ] Single "Hamarosan" page deploys green to `kirillaphysio.github.io/pryma-solutions/` — _skipped: went straight to the full site; first live deploy still to run (manual)_

## Phase 1 — tokens

- [x] `src/styles/_tokens.scss` — colour maps, spacing, radius, breakpoints, motion
- [x] `styles.scss` emits every semantic alias as a `:root` custom property (`_root.scss`)
- [x] `_theme-light.scss` — `[data-theme="light"]` re-key
- [x] `_mixins.scss` — `hairline()`, `glow()`, `display()`, `media()`
- [x] Self-host Space Grotesk / Inter / JetBrains Mono in `public/fonts/`, `font-display: swap`
- [x] `_reset.scss` — body, headings, links, focus ring, scrollbar (+ reduced-motion kill-switch)
- [ ] Throwaway `/dev/tokens` route — _skipped; not needed, tokens verified against the reference values_

## Phase 2 — DS component library

- [x] `pry-button` — primary · secondary · outline · onAccent · ghost; lg/md/cap; 90px radius always
- [x] `pry-icon-button` — ghost · glass · neon
- [x] `pry-icon` — Lucide via CSS mask, `currentColor`, self-hosted, base-href-aware
- [x] `pry-text-input`, `pry-text-area`, `pry-select` (ControlValueAccessors)
- [x] `pry-card` — surface · accent · gradient · band · outline
- [x] `pry-pricing-card`, `pry-stat-card`
- [x] `pry-nav-bar` — sticky glass, 2px pink active underline via inset shadow (routerLinkActive)
- [x] `pry-footer` — columns, tagline, legal, note; no social row
- [x] `pry-wordmark`, `pry-eyebrow`, `pry-text-link` (arrow variant)
- [x] `pry-mesh-backdrop` — three radial washes + optional grid floor + optional horizon rule
- [x] `pry-mockup-frame` — 12px radius, mono title bar, 65% traffic lights
- [x] Layout helpers: `pry-container`, `pry-section`, `pry-section-head`, `pry-feature-tile`, `pry-step-card`, `pry-check-list`
- [ ] `/dev/components` gallery route — _deferred (nice-to-have)_

## Phase 3 — pages (HU)

- [x] `AppComponent` shell: skip link, `pry-nav-bar`, `<router-outlet>`, `pry-footer` _(cookie banner → Phase 5)_
- [x] `/` Home — hero on mesh, three services, four work phases, "miért egy emberrel", closing band
- [x] `/services` — services, three packages, "jó tudni" list, maintenance, closing band
- [x] `/contact` — form on mesh, validation, `mailto:` compose, honest success state, mono e-mail + copy button
- [ ] `/privacy`, `/imprint` — **blocked: needs real copy from the client**
- [x] `i18n` attributes with meaning + description on every string as written
- [x] `ng extract-i18n`, commit `messages.xlf` (136 messages)
- [x] Responsive pass: 3-up → 2-up → 1-up grids; nav collapses to a sheet at 860px

## Phase 4 — demos

- [ ] Shell-less demo layout component
- [ ] `/demo/asztalos` + one subpage
- [ ] `/demo/edzo` + one subpage
- [ ] `/demo/szalon` + one subpage
- [ ] `/demo` gallery — three `pry-mockup-frame`s, lazy sandboxed iframes with titles, hidden scrollbars
- [ ] `noindex` on all `/demo/*`
- [ ] Re-add the Demó item (with pink dot) to the nav once the routes exist

## Phase 5 — SEO, consent, launch

- [ ] `SeoService` — title, description, canonical, OG, Twitter per route
- [ ] `og:image` tags pointing at `/og/<route>.png` (files supplied later)
- [ ] `ConsentService` (signal + localStorage), cookie banner with explicit accept/reject, re-openable from the footer
- [x] Consent Mode v2 denied-by-default snippet in `index.html`
- [ ] `AnalyticsService` — inject gtag only on grant, manual `page_view` per navigation _(needs GA4 id)_
- [x] `scripts/sitemap.mjs` + `robots.txt` pointing at it
- [x] `404.html` emitted (SPA fallback via postbuild)
- [ ] Register `pryma.solutions`, add A/AAAA/CNAME records, set custom domain, enforce HTTPS _(manual)_
- [ ] Rebuild with `base-href=/`
- [ ] Lighthouse ≥ 95 ×4; watch blur cost on mobile
- [x] `prefers-reduced-motion` kill-switch; keyboard skip link + visible focus ring
- [ ] Clean-profile cookie check (verify nothing hits Google pre-consent)

## Phase 6 — EN (after launch)

- [ ] `messages.en.xlf`, `localize: ["hu","en"]` (build option currently off for HU-only v1)
- [ ] Deploy step assembles `hu/*` at root + `en/` alongside
- [ ] `hreflang` alternates incl. `x-default`
- [ ] Language switch in the nav (URL prefix swap, not client-side)
- [ ] Sitemap includes `/en/` URLs

## Blocked / needs the client

- [ ] Legal copy: company name, seat, tax number, hosting provider, data-processing notice
- [ ] GA4 measurement ID
- [ ] OG images (1200×630 PNGs)
- [ ] Logo SVG, if one exists — the DS currently renders `pry-wordmark` as type
- [x] Decision: intro animation deferred to a later phase; tweaks panel dropped (both were review-only devices)
