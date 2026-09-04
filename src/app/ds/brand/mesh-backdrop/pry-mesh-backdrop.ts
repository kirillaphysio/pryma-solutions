import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * The signature atmosphere: neon mesh gradient + optional perspective grid floor + optional
 * horizon line. Sits behind content, never around it. Wraps heroes and closing bands only —
 * one horizon per page.
 */
@Component({
  selector: 'pry-mesh-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pry-mesh__wash" aria-hidden="true" [style.opacity]="strength()"></div>
    @if (grid()) {
      <div class="pry-mesh__grid" aria-hidden="true"></div>
    }
    @if (horizon()) {
      <div class="pry-mesh__horizon" aria-hidden="true"></div>
    }
    <div class="pry-mesh__body" [style.padding]="contentPad()">
      <ng-content />
    </div>
  `,
  host: {
    class: 'pry-mesh',
    '[style.min-height]': 'minHeight()',
  },
  styleUrl: './pry-mesh-backdrop.scss',
})
export class PryMeshBackdrop {
  readonly intensity = input<'soft' | 'full' | 'deep'>('full');
  readonly grid = input(true);
  readonly horizon = input(false);
  readonly minHeight = input<string | undefined>(undefined);
  /** CSS padding applied to the content wrapper (heroes set a clamp() vertical rhythm). */
  readonly contentPad = input<string | undefined>(undefined);

  protected readonly strength = computed(
    () => ({ soft: 0.45, full: 1, deep: 1.35 })[this.intensity()] ?? 1,
  );
}
