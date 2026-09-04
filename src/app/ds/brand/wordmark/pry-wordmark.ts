import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Type-only wordmark: PRYMA in display caps with a gradient prism bar. No logo file exists
 * in the source material — if one appears, it replaces the mark's inner content only.
 */
@Component({
  selector: 'pry-wordmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (showBar()) {
      <span
        class="pry-wm__bar"
        aria-hidden="true"
        [style.width.px]="barW()"
        [style.height.px]="barH()"
      ></span>
    }
    <span class="pry-wm__mark" [class]="'pry-wm__mark t-' + tone()" [style.font-size.px]="size()" [style.letter-spacing.px]="markLs()">PRYMA</span>
    @if (suffix()) {
      <span class="pry-wm__suffix" [style.font-size.px]="suffixSize()">{{ suffix() }}</span>
    }
  `,
  host: {
    class: 'pry-wm',
    '[style.gap.px]': 'gap()',
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
  },
  styleUrl: './pry-wordmark.scss',
})
export class PryWordmark {
  readonly size = input(22);
  readonly tone = input<'gradient' | 'mono' | 'pink'>('gradient');
  readonly showBar = input(true);
  readonly suffix = input<string>('SOLUTIONS');

  protected readonly gap = computed(() => Math.round(this.size() * 0.45));
  protected readonly barW = computed(() => Math.round(this.size() * 0.26));
  protected readonly barH = computed(() => Math.round(this.size() * 1.05));
  protected readonly markLs = computed(() => this.size() * 0.06);
  protected readonly suffixSize = computed(() => Math.max(9, Math.round(this.size() * 0.42)));
  protected readonly ariaLabel = computed(() => (this.suffix() ? `Pryma ${this.suffix()}` : 'Pryma'));
}
