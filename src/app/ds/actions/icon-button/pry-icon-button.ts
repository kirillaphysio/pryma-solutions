import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Icon-only action (mockup chrome, footer social). Apply to a native element and project
 * a single <pry-icon>. `label` is mandatory — it becomes the accessible name.
 *   <button pry-icon-button label="Bezárás" variant="glass"><pry-icon name="x" [size]="16"/></button>
 */
@Component({
  selector: 'button[pry-icon-button], a[pry-icon-button]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    '[class]': '"pry-iconbtn v-" + variant() + " s-" + size()',
    '[attr.aria-label]': 'label()',
    '[attr.title]': 'label()',
    '[class.pry-iconbtn--disabled]': 'disabled()',
    '[attr.aria-disabled]': 'disabled() ? true : null',
    '[attr.tabindex]': 'disabled() ? -1 : null',
  },
  styleUrl: './pry-icon-button.scss',
})
export class PryIconButton {
  readonly label = input.required<string>();
  readonly variant = input<'ghost' | 'glass' | 'neon'>('ghost');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly disabled = input(false);
}
