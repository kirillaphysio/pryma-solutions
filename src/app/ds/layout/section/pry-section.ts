import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PryContainer } from '../container/pry-container';

/** A vertical rhythm band. `tight` uses the 48px related-band rhythm; default is 96px. */
@Component({
  selector: 'pry-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryContainer],
  template: `<pry-container><ng-content /></pry-container>`,
  host: {
    class: 'pry-section',
    '[class.pry-section--tight]': 'tight()',
  },
  styles: `
    .pry-section {
      display: block;
      padding: var(--section-pad-y) 0;
    }
    .pry-section--tight {
      padding: var(--section-pad-y-tight) 0;
    }
  `,
})
export class PrySection {
  readonly tight = input(false);
}
