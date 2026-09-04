import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryCard } from '../card/pry-card';
import { PryButton } from '../../actions/button/pry-button';
import { PryEyebrow } from '../../brand/eyebrow/pry-eyebrow';
import { PryIcon } from '../../brand/icon/pry-icon';

/**
 * Pricing tier. `featured` switches to the gradient fill + pink glow and the onAccent CTA.
 * Supply already-localised feature strings. `ctaPath` routes; omit for a plain button.
 */
@Component({
  selector: 'pry-pricing-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryCard, PryButton, PryEyebrow, PryIcon, RouterLink],
  templateUrl: './pry-pricing-card.html',
  host: { class: 'pry-pricing' },
  styleUrl: './pry-pricing-card.scss',
})
export class PryPricingCard {
  readonly tier = input.required<string>();
  readonly price = input.required<string>();
  readonly period = input('/hó');
  readonly blurb = input<string>('');
  readonly features = input<string[]>([]);
  readonly cta = input('Kérj ajánlatot');
  readonly ctaPath = input<string>('/contact');
  readonly featured = input(false);
  readonly badge = input<string>('');
}
