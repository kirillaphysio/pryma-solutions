import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/seo.service';
import { PryIcon } from '../../../ds';
import { DemoChrome, DemoArt } from '../shared/demo-chrome';
import { resolveDemoTheme, type DemoGfx } from '../shared/demo-theme';
import {
  SALON,
  SALON_HOME,
  SALON_PRICING,
  SALON_NAV,
  SALON_FOOTER,
  SALON_LEGAL,
  SALON_SERVICES,
  SALON_GALLERY,
  SALON_ABOUT,
  SALON_QUOTES,
} from './szalon.data';

/** Salon layout variants exposed by the demo viewer. */
export type SalonLayout = 'split' | 'magazine';

/** Salon demo — home. Warm, serif, image-led. Shell-less showcase route (noindex). */
@Component({
  selector: 'pry-demo-szalon-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome, DemoArt, PryIcon],
  templateUrl: './szalon-home.html',
  styles: `
    .s-hero {
      display: grid;
      grid-template-columns: 1.02fr 0.98fr;
      gap: clamp(32px, 5vw, 64px);
      align-items: center;
    }
    .s-hero__text {
      display: flex;
      flex-direction: column;
      gap: 22px;
      align-items: flex-start;
    }
    .s-hero__cta {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      align-items: center;
    }
    /* Magazine variant: offset portrait on the left, text overlapping from the right. */
    .s-hero--mag {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 0;
      align-items: center;
    }
    .s-hero--mag .s-hero__art {
      position: relative;
      z-index: 1;
    }
    .s-hero--mag .s-hero__text {
      position: relative;
      z-index: 2;
      background: var(--d-bg);
      margin-left: -64px;
      padding: 52px 0 52px 52px;
    }
    .s-grid3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(24px, 3vw, 34px);
    }
    .s-card {
      display: flex;
      flex-direction: column;
      gap: 14px;
      background: var(--d-card);
      border: 1px solid var(--d-line-soft);
      border-radius: var(--d-radius);
      padding: 14px;
    }
    .s-card__head {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .s-card__name {
      font-family: var(--d-font-display);
      font-size: 24px;
      color: var(--d-ink);
    }
    .s-card__meta {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .s-strip {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2px;
    }
    .s-about {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: clamp(30px, 5vw, 64px);
      align-items: center;
    }
    .s-about__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .s-about__list li {
      display: flex;
      gap: 12px;
      align-items: baseline;
      color: var(--d-ink);
    }
    .s-about__dash {
      width: 16px;
      height: 1px;
      background: var(--d-accent);
      flex: 0 0 auto;
      transform: translateY(-4px);
    }
    .s-about__ico {
      flex: 0 0 auto;
      transform: translateY(2px);
    }
    .s-quotes {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(28px, 4vw, 56px);
    }
    .s-quote {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-top: 1px solid var(--d-line);
      padding-top: 22px;
    }
    .s-quote p {
      font-family: var(--d-font-display);
      font-size: clamp(21px, 2.4vw, 25px);
      line-height: 1.35;
      color: var(--d-ink);
      margin: 0;
    }
    .s-quote span {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .s-book {
      background: var(--d-accent-soft);
    }
    .s-book__grid {
      display: grid;
      grid-template-columns: 1fr 0.8fr;
      gap: clamp(28px, 4vw, 56px);
      align-items: center;
    }
    .s-book__form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .s-field {
      background: var(--d-card);
      border: 1px solid var(--d-line);
      border-radius: var(--d-radius);
      padding: 13px 15px;
      font-size: 14px;
      color: var(--d-mute);
    }
    @media (max-width: 860px) {
      .s-hero,
      .s-about,
      .s-book__grid {
        grid-template-columns: minmax(0, 1fr);
      }
      .s-hero--mag {
        grid-template-columns: minmax(0, 1fr);
        gap: 28px;
      }
      .s-hero--mag .s-hero__text {
        margin-left: 0;
        padding: 0;
      }
      .s-grid3 {
        grid-template-columns: minmax(0, 1fr);
      }
      .s-strip,
      .s-quotes {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class SalonHome {
  /** Colour mood index, layout variant and graphics mode — bound from the viewer's query string. */
  readonly mood = input(0, { transform: numberAttribute });
  readonly layout = input<SalonLayout>('split');
  readonly gfx = input<DemoGfx>('foto');

  protected readonly t = computed(() => resolveDemoTheme(SALON, this.mood()));
  protected readonly showIcons = computed(() => this.gfx() !== 'foto');

  protected readonly homePath = SALON_HOME;
  protected readonly pricingPath = SALON_PRICING;
  protected readonly nav = SALON_NAV;
  protected readonly footer = SALON_FOOTER;
  protected readonly legal = SALON_LEGAL;
  protected readonly services = SALON_SERVICES;
  protected readonly gallery = SALON_GALLERY;
  protected readonly about = SALON_ABOUT;
  protected readonly quotes = SALON_QUOTES;

  constructor() {
    inject(SeoService).update({
      title: 'Fodrászat & kozmetika — Pryma demó',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: meleg, szerif hangvételű fodrászat- és kozmetikaoldal.',
      path: '/demo/szalon',
      noindex: true,
    });
  }
}
