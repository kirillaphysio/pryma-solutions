import { Routes } from '@angular/router';

/**
 * English slugs, Hungarian content at the root (PLAN §5). Pages are lazy-loaded so each
 * route is its own chunk and prerenders to a static HTML file.
 *
 * Two layers:
 *  - The demo mini-sites (`/demo/<profession>` + one subpage each) render OUTSIDE the site
 *    shell — they are standalone example sites. They are listed first so they win over the
 *    empty-path shell parent below.
 *  - Everything else is a child of SiteShell, which supplies the nav, footer and consent
 *    banner. That includes the `/demo` gallery, which is a normal site page.
 *
 * Still pending: /privacy + /imprint (blocked on legal copy from the client).
 */
export const routes: Routes = [
  // --- Demo mini-sites: shell-less, noindex showcase fixtures (Phase 4) -----
  {
    path: 'demo/szalon',
    loadComponent: () => import('./pages/demo/szalon/szalon-home').then((m) => m.SalonHome),
  },
  {
    path: 'demo/szalon/pricing',
    loadComponent: () =>
      import('./pages/demo/szalon/szalon-pricing').then((m) => m.SalonPricing),
  },
  {
    path: 'demo/edzo',
    loadComponent: () => import('./pages/demo/edzo/edzo-home').then((m) => m.TrainerHome),
  },
  {
    path: 'demo/edzo/programs',
    loadComponent: () =>
      import('./pages/demo/edzo/edzo-programs').then((m) => m.TrainerPrograms),
  },
  {
    path: 'demo/asztalos',
    loadComponent: () =>
      import('./pages/demo/asztalos/asztalos-home').then((m) => m.WorkshopHome),
  },
  {
    path: 'demo/asztalos/work',
    loadComponent: () =>
      import('./pages/demo/asztalos/asztalos-work').then((m) => m.WorkshopWork),
  },

  // --- Public site: everything below wears the SiteShell chrome ------------
  {
    path: '',
    loadComponent: () => import('./shared/site-shell/site-shell').then((m) => m.SiteShell),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
        title: 'Pryma Solutions — weboldal és arculat',
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then((m) => m.Services),
        title: 'Szolgáltatások — Pryma Solutions',
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./pages/demo/gallery/demo-gallery').then((m) => m.DemoGallery),
        title: 'Demó — Pryma Solutions',
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
        title: 'Kapcsolat — Pryma Solutions',
      },
      {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
        title: 'Az oldal nem található — Pryma Solutions',
      },
    ],
  },
];
