import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryButton, PryContainer, PryEyebrow, PryIcon, PryMeshBackdrop } from '../../ds';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'pry-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PryButton, PryContainer, PryEyebrow, PryIcon, PryMeshBackdrop],
  template: `
    <pry-mesh-backdrop intensity="full" [grid]="true" [horizon]="true" contentPad="clamp(72px,12vw,140px) 0">
      <pry-container>
        <div class="nf">
          <pry-eyebrow tone="pink" i18n="@@nf.eyebrow">404</pry-eyebrow>
          <h1 class="nf__title" i18n="@@nf.title">Ez az oldal nincs meg.</h1>
          <p class="nf__lead" i18n="@@nf.lead">
            Lehet, hogy elköltözött, vagy sosem létezett. Vissza a kezdőlapra, és onnan
            megtaláljuk, amit keresel.
          </p>
          <a pry-button variant="primary" size="lg" routerLink="/">
            <span i18n="@@nf.cta">Vissza a kezdőlapra</span>
            <pry-icon icon-right name="arrow-right" [size]="18" />
          </a>
        </div>
      </pry-container>
    </pry-mesh-backdrop>
  `,
  styles: `
    .nf {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-xl);
      max-width: 620px;
      margin: 0 auto;
    }
    .nf__title {
      font-size: var(--display-xl-size);
      font-weight: var(--display-xl-weight);
      line-height: var(--display-xl-lh);
      letter-spacing: var(--display-xl-ls);
      color: var(--text-hi);
    }
    .nf__lead {
      font-size: var(--body-lg-size);
      line-height: var(--body-lg-lh);
      color: var(--text-mute);
    }
  `,
})
export class NotFound {
  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.nf.title:Az oldal nem található — Pryma Solutions`,
      description: $localize`:@@seo.nf.desc:Ez az oldal nincs meg. Vissza a kezdőlapra, és onnan megtaláljuk, amit keresel.`,
      path: '/404',
      noindex: true,
    });
  }
}
