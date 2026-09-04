import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type PryTone = 'violet' | 'pink' | 'cyan' | 'onAccent';

/** All-caps micro label — pill (chip) or bare kicker above a headline. */
@Component({
  selector: 'pry-eyebrow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    '[class]': '"pry-eyebrow t-" + tone() + " v-" + variant()',
  },
  styleUrl: './pry-eyebrow.scss',
})
export class PryEyebrow {
  readonly variant = input<'pill' | 'bare'>('pill');
  readonly tone = input<PryTone>('violet');
}
