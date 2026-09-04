import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import {
  PryNavBar,
  PryFooter,
  type PryNavLink,
  type PryFooterColumn,
} from './ds';
import { CookieBanner } from './shared/cookie-banner/cookie-banner';
import { ConsentService } from './core/consent.service';
import { AnalyticsService } from './core/analytics.service';

@Component({
  selector: 'pry-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, PryNavBar, PryFooter, CookieBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly consent = inject(ConsentService);
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

  protected readonly navLinks: PryNavLink[] = [
    { label: $localize`:@@nav.services:Szolgáltatások`, path: '/services' },
    { label: $localize`:@@nav.contact:Kapcsolat`, path: '/contact' },
  ];

  protected readonly footerColumns: PryFooterColumn[] = [
    {
      title: $localize`:@@footer.pages:Oldalak`,
      links: [
        { label: $localize`:@@footer.home:Kezdőlap`, path: '/' },
        { label: $localize`:@@nav.services:Szolgáltatások`, path: '/services' },
        { label: $localize`:@@nav.contact:Kapcsolat`, path: '/contact' },
      ],
    },
  ];

  protected readonly tagline = $localize`:@@footer.tagline:Weboldal, arculat és marketing alapok kis vállalkozásoknak.`;
  protected readonly legal = $localize`:@@footer.legal:© 2026 Pryma Solutions`;
  protected readonly note = $localize`:@@footer.note:A Pryma gridre építve`;
  protected readonly consentLabel = $localize`:@@footer.consent:Süti beállítások`;
}
