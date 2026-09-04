import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PryIcon } from '../../brand/icon/pry-icon';

/**
 * Ticked list. Supply already-localised strings (use $localize in the page component) —
 * items are dynamic content, so they are translated in TS, not via template i18n.
 */
@Component({
  selector: 'pry-check-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryIcon],
  template: `
    <ul class="pry-cl">
      @for (item of items(); track item) {
        <li class="pry-cl__item">
          <pry-icon class="pry-cl__tick" name="check" [size]="16" [color]="tickColor()" />
          <span>{{ item }}</span>
        </li>
      }
    </ul>
  `,
  styleUrl: './pry-check-list.scss',
})
export class PryCheckList {
  readonly items = input.required<string[]>();
  readonly tone = input<'cyan' | 'pink'>('cyan');

  protected readonly tickColor = computed(() =>
    this.tone() === 'pink' ? 'var(--pink-400)' : 'var(--cyan-400)',
  );
}
