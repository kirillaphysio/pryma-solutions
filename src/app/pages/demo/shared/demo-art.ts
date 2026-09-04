import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Marked photo placeholder for the demo mini-sites: a diagonal-striped panel with a mono
 * caption naming what belongs there. The demos ship without stock photography on purpose —
 * on a real project these become the client's own images. Themed via the `--d-*` variables.
 */
@Component({
  selector: 'pry-demo-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="cap">{{ label() }}</span>`,
  host: {
    class: 'demo-art',
    role: 'img',
    '[attr.aria-label]': 'label()',
    '[style.aspect-ratio]': 'ratio()',
    '[class.demo-art--flush]': 'flush()',
    '[class.demo-art--wood]': 'variant() === "wood"',
  },
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: repeating-linear-gradient(
        135deg,
        color-mix(in srgb, var(--d-ink) 9%, transparent) 0 5px,
        color-mix(in srgb, var(--d-ink) 2%, transparent) 5px 11px
      );
      border: 1px solid var(--d-line);
      border-radius: var(--d-radius);
    }
    :host(.demo-art--flush) {
      border: none;
      border-radius: 0;
    }
    /* Oak-grain fill for the carpenter demo: three grain layers over a warm base. */
    :host(.demo-art--wood) {
      background:
        repeating-linear-gradient(0deg, color-mix(in srgb, #8a5f2c 24%, transparent) 0 1px, transparent 1px 6px),
        repeating-linear-gradient(0deg, color-mix(in srgb, #8a5f2c 13%, transparent) 0 2px, transparent 2px 15px),
        repeating-linear-gradient(0deg, transparent 0 37px, color-mix(in srgb, #8a5f2c 32%, transparent) 37px 39px, transparent 39px 96px),
        linear-gradient(180deg, #c9a469, color-mix(in srgb, #c9a469 90%, #8a5f2c));
    }
    :host(.demo-art--wood) .cap {
      color: var(--d-ink);
      background: color-mix(in srgb, var(--d-bg) 90%, transparent);
    }
    .cap {
      font-family: var(--d-font-mono);
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: center;
      line-height: 1.4;
      color: var(--d-mute);
      background: var(--d-bg);
      padding: 5px 9px;
      border: 1px solid var(--d-line);
    }
  `,
})
export class DemoArt {
  /** Mono caption describing the intended image. */
  readonly label = input.required<string>();
  /** CSS aspect-ratio, e.g. "4 / 3" or "16 / 9". */
  readonly ratio = input('4 / 3');
  /** Drop the border/radius when the panel bleeds to a section edge. */
  readonly flush = input(false);
  /** "wood" swaps the diagonal stripes for an oak-grain fill (carpenter demo). */
  readonly variant = input<'stripe' | 'wood'>('stripe');
}
