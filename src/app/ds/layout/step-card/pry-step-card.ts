import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PryCard } from '../../surfaces/card/pry-card';

/** Numbered process step. `n` is the mono index label, e.g. "01". */
@Component({
  selector: 'pry-step-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryCard],
  template: `
    <pry-card variant="outline" class="pry-step__card">
      <span class="pry-step__n">{{ n() }}</span>
      <h3 class="pry-step__title">{{ title() }}</h3>
      <p class="pry-step__body">{{ body() }}</p>
    </pry-card>
  `,
  host: { class: 'pry-step' },
  styleUrl: './pry-step-card.scss',
})
export class PryStepCard {
  readonly n = input.required<string>();
  readonly title = input.required<string>();
  readonly body = input.required<string>();
}
