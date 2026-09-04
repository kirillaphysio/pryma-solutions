import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryWordmark } from '../../brand/wordmark/pry-wordmark';

export interface PryFooterLink {
  label: string;
  path: string;
}
export interface PryFooterColumn {
  title: string;
  links: PryFooterLink[];
}

/** Footer: brand + tagline, link columns, legal line and a mono build note. No social row. */
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
  readonly note = input('A Pryma gridre építve');
  /** When set, renders a ghost text button in the legal row (e.g. "Süti beállítások"). */
  readonly consentLabel = input<string>('');
  readonly consentClick = output<void>();
}
