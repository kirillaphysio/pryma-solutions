import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Floating product-UI frame: 12px radius, mono title bar, 65% traffic-light dots, cyan/pink
 * rim glow. Sits above the mesh, never inside a card, never with its own grey shadow.
 */
@Component({
  selector: 'pry-mockup-frame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pry-mock__bar">
      <span class="pry-mock__dots" aria-hidden="true">
        <span style="background:#ff5f57"></span>
        <span style="background:#febc2e"></span>
        <span style="background:#28c840"></span>
      </span>
      <span class="pry-mock__title">{{ title() }}</span>
    </div>
    <div class="pry-mock__body"><ng-content /></div>
  `,
  host: {
    '[class]': '"pry-mock rim-" + tone()',
    '[class.pry-mock--tilt]': 'tilt()',
    '[style.aspect-ratio]': 'aspect()',
  },
  styleUrl: './pry-mockup-frame.scss',
})
export class PryMockupFrame {
  readonly title = input('pryma.app');
  readonly tone = input<'cyan' | 'pink' | 'violet'>('cyan');
  readonly aspect = input<string | undefined>(undefined);
  readonly tilt = input(false);
}
