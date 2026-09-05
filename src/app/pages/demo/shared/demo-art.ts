import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PryIcon } from '../../../ds';
import type { DemoGfx } from './demo-theme';

/** accent tint at `o`% over transparent (demo scope: keys off --d-accent). */
const A = (o: number) => `color-mix(in srgb, var(--d-accent) ${o}%, transparent)`;
/** ink tint at `o`% over transparent. */
const I = (o: number) => `color-mix(in srgb, var(--d-ink) ${o}%, transparent)`;

/**
 * Geometric illustration motifs — ported from the design kit's `Illu`. Each entry is a list of
 * absolutely-positioned span styles drawn only from circles, rectangles and hairlines in the
 * theme colours, so an illustration replaces a photo placeholder without any raster asset.
 */
const MOTIFS: Record<string, string[]> = {
  arcs: [
    `top:-16%;left:4%;width:56%;aspect-ratio:1;border-radius:50%;border:1px solid ${I(16)}`,
    `bottom:-24%;right:-8%;width:68%;aspect-ratio:1;border-radius:50%;background:${A(11)}`,
    `top:28%;right:13%;width:22%;aspect-ratio:1;border-radius:50%;border:1px solid ${A(55)}`,
    `left:0;right:0;top:58%;height:1px;background:${I(9)}`,
  ],
  bloom: [
    `top:20%;left:5%;width:44%;aspect-ratio:1;border-radius:50%;background:${A(13)}`,
    `top:32%;left:28%;width:44%;aspect-ratio:1;border-radius:50%;border:1px solid ${A(45)}`,
    `top:10%;right:3%;width:34%;aspect-ratio:1;border-radius:50%;background:${I(6)}`,
  ],
  bars: [
    `left:0;right:0;bottom:13%;height:1px;background:${I(14)}`,
    `left:9%;bottom:13%;width:10%;height:30%;background:${I(12)}`,
    `left:26%;bottom:13%;width:10%;height:52%;background:${I(12)}`,
    `left:43%;bottom:13%;width:10%;height:74%;background:${A(72)}`,
    `left:60%;bottom:13%;width:10%;height:44%;background:${I(12)}`,
    `left:77%;bottom:13%;width:10%;height:62%;background:${I(12)}`,
  ],
  rings: [
    `top:50%;left:50%;width:82%;aspect-ratio:1;border-radius:50%;border:1px solid ${I(12)};transform:translate(-50%,-50%)`,
    `top:50%;left:50%;width:58%;aspect-ratio:1;border-radius:50%;border:1px solid ${A(42)};transform:translate(-50%,-50%)`,
    `top:50%;left:50%;width:32%;aspect-ratio:1;border-radius:50%;background:${A(14)};transform:translate(-50%,-50%)`,
  ],
  plan: [
    `inset:13%;border:1px solid ${I(20)}`,
    `inset:25%;border:1px solid ${A(45)}`,
    `left:13%;right:13%;top:50%;height:1px;background:${I(11)}`,
    `top:13%;bottom:13%;left:50%;width:1px;background:${I(11)}`,
    `left:13%;right:13%;top:7%;height:1px;background:${A(50)}`,
  ],
  grain: Array.from(
    { length: 7 },
    (_, i) => `left:7%;right:7%;top:${13 + i * 11}%;height:1px;background:${i % 3 === 0 ? A(40) : I(11)}`,
  ),
  grid: [
    `top:0;bottom:0;left:25%;width:1px;background:${I(10)}`,
    `top:0;bottom:0;left:50%;width:1px;background:${I(10)}`,
    `top:0;bottom:0;left:75%;width:1px;background:${I(10)}`,
    `left:0;right:0;top:33%;height:1px;background:${I(10)}`,
    `left:0;right:0;top:66%;height:1px;background:${I(10)}`,
    `left:50%;top:33%;width:25%;height:33%;background:${A(15)}`,
  ],
};

/**
 * Image slot for the demo mini-sites, switchable by the viewer's graphics control:
 * - `foto` / `ikon` — a marked photo placeholder (diagonal stripes, or an oak-grain fill for the
 *   carpenter demo) with a mono caption naming the intended image.
 * - `illu` — a geometric illustration ({@link MOTIFS}) with an optional trade glyph, so the slot
 *   reads without any stock photography.
 *
 * The demos ship without photos on purpose — on a real project these become the client's images.
 * Themed entirely via the `--d-*` variables.
 */
@Component({
  selector: 'pry-demo-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryIcon],
  template: `
    @if (isIllu()) {
      @for (s of motifSpans(); track $index) {
        <span class="mark" [style]="s"></span>
      }
      @if (icon()) {
        <span class="badge" [style.width.px]="glyph() * 2" [style.height.px]="glyph() * 2">
          <pry-icon [name]="icon()!" [size]="glyph()" />
        </span>
      }
    } @else {
      <span class="cap">{{ label() }}</span>
    }
  `,
  host: {
    class: 'demo-art',
    role: 'img',
    '[attr.aria-label]': 'label()',
    '[style.aspect-ratio]': 'ratio()',
    '[class.demo-art--flush]': 'flush()',
    '[class.demo-art--illu]': 'isIllu()',
    '[class.demo-art--wood]': '!isIllu() && variant() === "wood"',
  },
  styles: `
    :host {
      position: relative;
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
    /* Illustration mode: flat card ground, geometric marks drawn on top. */
    :host(.demo-art--illu) {
      background: var(--d-card);
    }
    .mark {
      position: absolute;
      pointer-events: none;
    }
    .badge {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 99px;
      color: var(--d-accent);
      background: color-mix(in srgb, var(--d-bg) 84%, transparent);
      border: 1px solid color-mix(in srgb, var(--d-accent) 30%, transparent);
    }
    .cap {
      position: relative;
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
  /** Mono caption describing the intended image (also the accessible name in illustration mode). */
  readonly label = input.required<string>();
  /** CSS aspect-ratio, e.g. "4 / 3" or "16 / 9". */
  readonly ratio = input('4 / 3');
  /** Drop the border/radius when the panel bleeds to a section edge. */
  readonly flush = input(false);
  /** "wood" swaps the diagonal stripes for an oak-grain fill (carpenter demo). */
  readonly variant = input<'stripe' | 'wood'>('stripe');
  /** Graphics mode from the viewer; "illu" replaces the placeholder with an illustration. */
  readonly gfx = input<DemoGfx>('foto');
  /** Illustration motif (see {@link MOTIFS}); used only when `gfx === 'illu'`. */
  readonly motif = input<keyof typeof MOTIFS | string>('arcs');
  /** Optional Lucide glyph centred over the illustration. */
  readonly icon = input<string | undefined>(undefined);
  /** Glyph size in px for the centred icon. */
  readonly glyph = input(26);

  protected readonly isIllu = computed(() => this.gfx() === 'illu');
  protected readonly motifSpans = computed(() => MOTIFS[this.motif()] ?? MOTIFS['arcs']);
}
