import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

/**
 * Lucide glyph rendered as a currentColor mask — recolourable, no inline path data.
 * SVGs are self-hosted in `public/icons/` (no runtime third-party fetch). The mask URL
 * is resolved against APP_BASE_HREF so it survives the preview base-href swap.
 */
@Component({
  selector: 'pry-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: {
    'aria-hidden': 'true',
    '[attr.data-icon]': 'name()',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.background-color]': 'color() || "currentColor"',
    '[style.-webkit-mask-image]': 'maskUrl()',
    '[style.mask-image]': 'maskUrl()',
    '[style.vertical-align]': 'strokeAlign() === "text" ? "-0.15em" : "middle"',
  },
  styles: `
    :host {
      display: inline-block;
      flex: 0 0 auto;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-size: contain;
      mask-size: contain;
    }
  `,
})
export class PryIcon {
  private readonly baseHref = inject(APP_BASE_HREF, { optional: true }) ?? '/';

  /** Lucide glyph name, e.g. "arrow-right". Must exist in public/icons/. */
  readonly name = input.required<string>();
  readonly size = input(20);
  /** Explicit colour; defaults to currentColor so the glyph inherits its parent. */
  readonly color = input<string | undefined>(undefined);
  /** "text" nudges the glyph onto the text baseline for inline use. */
  readonly strokeAlign = input<'middle' | 'text'>('middle');

  protected readonly maskUrl = computed(() => {
    const base = this.baseHref.endsWith('/') ? this.baseHref : this.baseHref + '/';
    return `url("${base}icons/${this.name()}.svg")`;
  });
}
