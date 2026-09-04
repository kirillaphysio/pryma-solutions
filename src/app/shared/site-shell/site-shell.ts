import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PryNavBar,
  PryFooter,
  type PryNavLink,
  type PryFooterColumn,
} from '../../ds';
import { CookieBanner } from '../cookie-banner/cookie-banner';
import { ConsentService } from '../../core/consent.service';

/**
 * The public site chrome: skip link, sticky nav, footer and the consent banner, wrapped
 * around a nested <router-outlet>. Applied as the layout for the marketing pages (home,
 * services, contact, demo gallery, 404). The demo mini-sites route outside this shell so
 * they render as standalone example sites.
 */
@Component({
  selector: 'pry-site-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, PryNavBar, PryFooter, CookieBanner],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShell {
  protected readonly consent = inject(ConsentService);

  protected readonly navLinks: PryNavLink[] = [
    { label: $localize`:@@nav.services:Szolgáltatások`, path: '/services' },
    { label: $localize`:@@nav.demo:Demó`, path: '/demo', dot: true },
    { label: $localize`:@@nav.contact:Kapcsolat`, path: '/contact' },
  ];

  protected readonly footerColumns: PryFooterColumn[] = [
    {
      title: $localize`:@@footer.pages:Oldalak`,
      links: [
        { label: $localize`:@@footer.home:Kezdőlap`, path: '/' },
        { label: $localize`:@@nav.services:Szolgáltatások`, path: '/services' },
        { label: $localize`:@@nav.demo:Demó`, path: '/demo' },
        { label: $localize`:@@nav.contact:Kapcsolat`, path: '/contact' },
      ],
    },
  ];

  protected readonly tagline = $localize`:@@footer.tagline:Weboldal, arculat és marketing alapok kis vállalkozásoknak.`;
  protected readonly legal = $localize`:@@footer.legal:© 2026 Pryma Solutions`;
  protected readonly note = $localize`:@@footer.note:A Pryma gridre építve`;
  protected readonly consentLabel = $localize`:@@footer.consent:Süti beállítások`;
}
