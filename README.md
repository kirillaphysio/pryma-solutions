# pryma-solutions.hu

Marketing site for **Pryma Solutions**, built in Angular (standalone, signals, OnPush),
prerendered to static HTML and deployed to GitHub Pages on the apex domain `pryma-solutions.hu`.
Hungarian-first; English is a phase-2 build step.

See `CLAUDE.md` for the design-system rules and `design_handoff_pryma_angular/` for the full
handoff (PLAN, TASKS, and the `reference/` prototypes this was rebuilt from).

## Commands

```bash
npm start          # ng serve (dev)
npm run build      # static prerender → dist/pryma-solutions/browser (+ postbuild: sitemap.xml, 404.html)
npm run extract    # ng extract-i18n → src/locale/messages.xlf
```

Preview before the domain resolves (Pages project URL):
```bash
npx ng build --base-href=/pryma-solutions/
```

## Structure

```
src/
  styles/            SCSS token system → emits the :root custom-property contract
                     (_root, _theme-light, _responsive, _reset, _fonts, _tokens, _mixins, _layout-utils)
  app/
    ds/              Design system, prefixed pry-, presentational only
      actions/  brand/  forms/  surfaces/  navigation/  layout/   (+ index.ts barrel)
    pages/           home · services · contact · not-found (lazy)
    app.ts/.html     shell: skip link, pry-nav-bar, <router-outlet>, pry-footer
    app.routes.ts    English slugs, HU content at /
public/
  CNAME · robots.txt · favicon.svg · fonts/ (self-hosted woff2) · icons/ (self-hosted Lucide SVGs)
scripts/sitemap.mjs  postbuild: writes sitemap.xml + 404.html
.github/workflows/deploy.yml
```

## Status

**Done:**
- Phase 0 — scaffold, static prerender, CNAME/robots/favicon, deploy workflow
- Phase 1 — full token/type/font system (fonts self-hosted; no third-party embeds)
- Phase 2 — the DS component library, 1:1 with the reference
- Phase 3 — Home, Services, Contact pages (verbatim HU copy, i18n on every string), 404
- Contact form: reactive validation + `mailto:` compose + honest success state + copy-to-clipboard
- Phase 5 — `SeoService` (per-route title/description/canonical/OG/Twitter, set during prerender),
  `ConsentService` + focus-trapped cookie banner (re-openable from the footer), `AnalyticsService`
  (GA4 via gtag.js, injected only on consent). Consent Mode v2 denied-by-default in `index.html`.

**Pending / next:**
- Phase 4 — `/demo` gallery + the three demo mini-sites (asztalos / edző / szalon); re-add Demó to the nav
- `/privacy` + `/imprint` — blocked on legal copy from the client (company name, seat, tax no., host)
- Client inputs to activate what's built: **GA4 measurement id** (`src/environments/environment.ts`),
  **OG images** (`public/og/<route>.png`), logo SVG
- Nice-to-have — scroll-reveal entrance animations, `/dev/components` gallery
- Phase 6 — English locale (`/en/`), the second prerendered build

## Deploy

GitHub Actions builds on push to `main` and publishes `dist/pryma-solutions/browser` to Pages.
Repo → Settings → Pages → **Source: GitHub Actions**. Set the custom domain to `pryma-solutions.hu`
and tick **Enforce HTTPS** once the certificate provisions. DNS records are in `PLAN.md §2`.
