import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Inline link. Cyan on dark surfaces; inherits white with a persistent underline on
 * gradient bands (tone="onAccent"). Apply to a native anchor so href / routerLink and
 * focus come for free:
 *   <a pry-text-link href="mailto:hello@pryma.solutions">hello@pryma.solutions</a>
 *   <a pry-text-link [arrow]="true" routerLink="/services">Mit vállalok</a>
 * The trailing arrow is the one licensed Unicode glyph (→), which is type, not iconography.
 */
@Component({
  selector: 'a[pry-text-link]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />@if (arrow()) {<span class="pry-tl__arrow" aria-hidden="true">&#8594;</span>}`,
  host: {
    '[class]': '"pry-tl t-" + tone()',
    '[class.pry-tl--arrow]': 'arrow()',
  },
  styleUrl: './pry-text-link.scss',
})
export class PryTextLink {
  readonly tone = input<'default' | 'onAccent'>('default');
  readonly arrow = input(false);
}
