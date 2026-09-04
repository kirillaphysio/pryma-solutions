import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PryNavBar,
  PryFooter,
  type PryNavLink,
  type PryFooterColumn,
} from './ds';

@Component({
  selector: 'pry-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, PryNavBar, PryFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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
}
