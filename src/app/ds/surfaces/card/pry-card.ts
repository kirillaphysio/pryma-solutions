import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type PryCardVariant = 'surface' | 'accent' | 'gradient' | 'band' | 'outline';
export type PryCardGlow = 'none' | 'pink' | 'cyan' | 'violet';

/**
 * Translucent navy glass, 16px radius, 32px padding, hairline via inset shadow — no border,
 * no grey shadow. Interactive cards lift 3px and glow; static ones do neither.
 * `band` is the closing-CTA fill (48px padding, pink bloom).
 */
@Component({
  selector: 'pry-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    '[class]': '"pry-card v-" + variant() + " g-" + glow()',
    '[class.pry-card--interactive]': 'interactive()',
    '[style.padding]': 'padding()',
    '[style.border-radius]': 'radius()',
  },
  styleUrl: './pry-card.scss',
})
export class PryCard {
  readonly variant = input<PryCardVariant>('surface');
  readonly interactive = input(false);
  readonly glow = input<PryCardGlow>('none');
  /** Override the variant's default padding (e.g. "var(--card-pad-band)"). */
  readonly padding = input<string | undefined>(undefined);
  readonly radius = input<string | undefined>(undefined);
}
