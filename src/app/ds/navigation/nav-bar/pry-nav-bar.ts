import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PryWordmark } from '../../brand/wordmark/pry-wordmark';
import { PryButton } from '../../actions/button/pry-button';
import { PryIcon } from '../../brand/icon/pry-icon';

export interface PryNavLink {
  label: string;
  path: string;
  /** Renders the small pink status dot after the label (the Demó item). */
  dot?: boolean;
}

/**
 * Sticky glass nav. Active item carries a 2px pink underline via inset shadow (hover shows
 * the same at 55%). Collapses to a sheet below 860px. Links route via routerLink; the active
 * state comes from routerLinkActive, so no activeHref plumbing is needed.
 */
@Component({
  selector: 'pry-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, PryWordmark, PryButton, PryIcon],
  templateUrl: './pry-nav-bar.html',
  host: {
    class: 'pry-nav',
    '[class.pry-nav--sticky]': 'sticky()',
  },
  styleUrl: './pry-nav-bar.scss',
})
export class PryNavBar {
  readonly links = input<PryNavLink[]>([]);
  readonly ctaLabel = input('Kérj ajánlatot');
  readonly ctaPath = input('/contact');
  readonly sticky = input(true);

  protected readonly open = signal(false);

  protected toggle() {
    this.open.update((v) => !v);
  }
  protected close() {
    this.open.set(false);
  }
}
