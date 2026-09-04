import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PryCard } from '../../surfaces/card/pry-card';
import { PryIcon } from '../../brand/icon/pry-icon';

/** Icon-led feature card. tone tints the glyph (cyan / pink / violet). */
@Component({
  selector: 'pry-feature-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryCard, PryIcon],
  template: `
    <pry-card variant="surface" [interactive]="true" glow="none" class="pry-ft__card">
      <span class="pry-ft__mark">
        <pry-icon [name]="icon()" [size]="22" [color]="iconColor()" />
      </span>
      <h3 class="pry-ft__title">{{ title() }}</h3>
      <p class="pry-ft__body">{{ body() }}</p>
    </pry-card>
  `,
  host: { class: 'pry-ft' },
  styleUrl: './pry-feature-tile.scss',
})
export class PryFeatureTile {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly body = input.required<string>();
  readonly tone = input<'cyan' | 'pink' | 'violet'>('cyan');

  protected readonly iconColor = computed(
    () =>
      ({
        cyan: 'var(--cyan-400)',
        pink: 'var(--pink-400)',
        violet: 'var(--violet-400)',
      })[this.tone()],
  );
}
