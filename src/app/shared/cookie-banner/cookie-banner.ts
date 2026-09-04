import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { ConsentService } from '../../core/consent.service';
import { PryButton } from '../../ds';

/**
 * GDPR cookie banner. Explicit accept/reject, no implied consent. Focus-trapped while open,
 * does not block first paint (rendered only after hydration, when the decision is unknown).
 * Re-openable from the footer via ConsentService.reopen().
 */
@Component({
  selector: 'pry-cookie-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryButton],
  template: `
    @if (consent.bannerOpen()) {
      <div
        class="cb"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cb-title"
        aria-describedby="cb-desc"
        (keydown)="onKeydown($event)"
      >
        <div class="cb__text">
          <p id="cb-title" class="cb__title" i18n="@@cookie.title">Sütik</p>
          <p id="cb-desc" class="cb__desc" i18n="@@cookie.desc">
            A látogatottság méréséhez sütiket használnék, de csak a beleegyezéseddel. Enélkül is
            minden működik az oldalon.
          </p>
        </div>
        <div class="cb__actions">
          <button #accept pry-button variant="primary" size="cap" type="button" (click)="consent.grant()" i18n="@@cookie.accept">
            Elfogadom
          </button>
          <button pry-button variant="ghost" size="cap" type="button" (click)="consent.deny()" i18n="@@cookie.reject">
            Elutasítom
          </button>
        </div>
      </div>
    }
  `,
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner {
  protected readonly consent = inject(ConsentService);
  private readonly accept = viewChild<ElementRef<HTMLButtonElement>>('accept');

  constructor() {
    // Move focus into the banner when it appears (after the @if renders its content).
    effect(() => {
      if (this.consent.bannerOpen()) {
        setTimeout(() => this.accept()?.nativeElement.focus(), 0);
      }
    });
  }

  // Trap Tab within the two actions while the banner is open.
  protected onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.consent.deny();
      return;
    }
    if (e.key !== 'Tab') return;
    const dialog = (e.currentTarget as HTMLElement) ?? null;
    const focusable = dialog
      ? Array.from(dialog.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'))
      : [];
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = dialog.ownerDocument.activeElement as HTMLElement | null;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }
}
