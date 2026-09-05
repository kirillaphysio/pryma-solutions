import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AnalyticsService } from './core/analytics.service';
import { PryIntro } from './shared/intro/pry-intro';

/** sessionStorage key: the intro plays once per browsing session. */
const INTRO_SEEN = 'pryma-intro-seen';

/**
 * Root shell. Deliberately thin: it holds only the top-level <router-outlet> and the global
 * page_view wiring, so routes can opt out of the site chrome (the demo mini-sites do). The
 * public pages get their nav/footer/consent banner from SiteShell, a layout route.
 *
 * It also mounts the one-per-session intro overlay — client-only, home route only, so the
 * prerendered HTML is untouched and deep links never hit it.
 */
@Component({
  selector: 'pry-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, PryIntro],
  template: `
    <router-outlet />
    @if (showIntro()) {
      <pry-intro (enter)="onIntroEnter($event)" />
    }
  `,
})
export class App {
  private readonly analytics = inject(AnalyticsService);
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly showIntro = signal(false);

  constructor() {
    // SPA navigation doesn't fire a page_view — send one manually (granted-only).
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((e) => this.analytics.pageView(e.urlAfterRedirects));

    // Show the intro once per session, and only when the visitor lands on the home route
    // (deep links skip it). Set after hydration to avoid an SSR mismatch.
    afterNextRender(() => {
      if (!this.isBrowser) return;
      try {
        if (sessionStorage.getItem(INTRO_SEEN)) return;
        if (this.router.url.split(/[?#]/)[0] !== '/') return;
        sessionStorage.setItem(INTRO_SEEN, '1');
        this.showIntro.set(true);
      } catch {
        /* storage blocked (private mode) — just skip the intro */
      }
    });
  }

  protected onIntroEnter(href: string) {
    if (href && href !== this.router.url) this.router.navigateByUrl(href);
    // Keep the overlay through its wipe-out, then remove it.
    setTimeout(() => this.showIntro.set(false), 640);
  }
}
