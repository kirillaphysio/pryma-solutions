import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryWordmark } from '../../brand/wordmark/pry-wordmark';

export interface PryFooterLink {
  label: string;
  /** Internal route (routerLink). Omit when `href` is set. */
  path?: string;
  /** External URL, opened in a new tab. Takes precedence over `path`. */
  href?: string;
}
export interface PryFooterColumn {
  title: string;
  links: PryFooterLink[];
}

/** Footer: brand + tagline, link columns, legal line and the consent control. No social row beyond a plain external link. */
@Component({
  selector: 'pry-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PryWordmark],
  templateUrl: './pry-footer.html',
  host: { class: 'pry-footer' },
  styleUrl: './pry-footer.scss',
})
export class PryFooter {
  readonly columns = input<PryFooterColumn[]>([]);
  readonly tagline = input<string>('');
  readonly legal = input('© 2026 Pryma Solutions');
  /** When set, renders a ghost text button in the legal row (e.g. "Süti beállítások"). */
  readonly consentLabel = input<string>('');
  readonly consentClick = output<void>();
}
