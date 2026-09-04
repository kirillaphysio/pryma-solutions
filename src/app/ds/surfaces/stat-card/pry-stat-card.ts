import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Glass tile whose value is set in the gradient. The brand argues with figures. */
@Component({
  selector: 'pry-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="pry-stat__value" [class]="'tone-' + tone()">{{ value() }}</span>
    @if (label()) {
      <span class="pry-stat__label">{{ label() }}</span>
    }
    @if (caption()) {
      <span class="pry-stat__caption">{{ caption() }}</span>
    }
  `,
  host: {
    '[class]': '"pry-stat align-" + align()',
  },
  styleUrl: './pry-stat-card.scss',
})
export class PryStatCard {
  readonly value = input.required<string>();
  readonly label = input<string>('');
  readonly caption = input<string>('');
  readonly tone = input<'pink' | 'cyan' | 'violet'>('pink');
  readonly align = input<'left' | 'center'>('left');
}
