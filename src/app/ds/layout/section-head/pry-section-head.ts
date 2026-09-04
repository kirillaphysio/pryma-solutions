import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PryEyebrow, PryTone } from '../../brand/eyebrow/pry-eyebrow';

/**
 * Section intro: eyebrow + headline + optional lead. Pass copy as static attributes and
 * mark them with i18n-eyebrow / i18n-title / i18n-lead at the call site.
 */
@Component({
  selector: 'pry-section-head',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryEyebrow],
  template: `
    @if (eyebrow()) {
      <pry-eyebrow [tone]="tone()">{{ eyebrow() }}</pry-eyebrow>
    }
    <h2 class="pry-sh__title">{{ title() }}</h2>
    @if (lead()) {
      <p class="pry-sh__lead">{{ lead() }}</p>
    }
  `,
  host: {
    '[class]': '"pry-sh align-" + align()',
    '[style.max-width.px]': 'maxWidth()',
  },
  styleUrl: './pry-section-head.scss',
})
export class PrySectionHead {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly lead = input<string>('');
  readonly align = input<'left' | 'center'>('left');
  readonly tone = input<PryTone>('violet');
  readonly maxWidth = input(720);
}
