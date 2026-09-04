import { Routes } from '@angular/router';

/**
 * English slugs, Hungarian content at the root (PLAN §5). Pages are lazy-loaded so each
 * route is its own chunk and prerenders to a static HTML file.
 *
 * Not yet wired (follow-ups): /demo gallery + the three demo mini-sites (Phase 4),
 * /privacy + /imprint (blocked on legal copy from the client).
 */
export const routes: Routes = [
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
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Kapcsolat — Pryma Solutions',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Az oldal nem található — Pryma Solutions',
  },
];
