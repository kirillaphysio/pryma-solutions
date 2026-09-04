import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AnalyticsService } from './core/analytics.service';

/**
 * Root shell. Deliberately thin: it holds only the top-level <router-outlet> and the global
 * page_view wiring, so routes can opt out of the site chrome (the demo mini-sites do). The
 * public pages get their nav/footer/consent banner from SiteShell, a layout route.
 */
@Component({
  selector: 'pry-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  private readonly analytics = inject(AnalyticsService);
  private readonly router = inject(Router);

  constructor() {
    // SPA navigation doesn't fire a page_view — send one manually (granted-only).
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((e) => this.analytics.pageView(e.urlAfterRedirects));
  }
}
