import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type PryButtonVariant = 'primary' | 'secondary' | 'outline' | 'onAccent' | 'ghost';
export type PryButtonSize = 'lg' | 'md' | 'cap';

/**
 * The one button in the system. 90px pill radius, always. Apply to a native element so
 * routing, focus and disabled semantics come for free:
 *   <a pry-button variant="primary" routerLink="/contact">Kérj ajánlatot</a>
 *   <button pry-button variant="outline" (click)="…">Mit vállalok</button>
 * Project a <pry-icon> with the `icon-left` / `icon-right` attribute for leading/trailing glyphs.
 * One filled pink (primary) button per viewport — everything else is secondary/outline/ghost.
 */
@Component({
  selector: 'button[pry-button], a[pry-button]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="pry-btn__ico"><ng-content select="[icon-left]" /></span>
    <span class="pry-btn__label"><ng-content /></span>
    <span class="pry-btn__ico"><ng-content select="[icon-right]" /></span>
  `,
  host: {
    class: 'pry-btn',
    '[class]': 'classes()',
    '[class.pry-btn--full]': 'fullWidth()',
    '[class.pry-btn--disabled]': 'disabled()',
    '[attr.aria-disabled]': 'disabled() ? true : null',
    '[attr.tabindex]': 'disabled() ? -1 : null',
  },
  styleUrl: './pry-button.scss',
})
export class PryButton {
  readonly variant = input<PryButtonVariant>('primary');
  readonly size = input<PryButtonSize>('md');
  readonly fullWidth = input(false);
  readonly disabled = input(false);

  protected readonly classes = computed(() => `pry-btn v-${this.variant()} s-${this.size()}`);
}
