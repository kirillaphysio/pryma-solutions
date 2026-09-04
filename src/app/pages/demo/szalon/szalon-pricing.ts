import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/seo.service';
import { DemoChrome } from '../shared/demo-chrome';
import {
  SALON,
  SALON_HOME,
  SALON_NAV,
  SALON_FOOTER,
  SALON_LEGAL,
  SALON_PRICES,
  SALON_SERVICES,
} from './szalon.data';

/** Salon demo — price list subpage. Shell-less showcase route (noindex). */
@Component({
  selector: 'pry-demo-szalon-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome],
  templateUrl: './szalon-pricing.html',
  styles: `
    .p-head {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      gap: clamp(28px, 4vw, 56px);
      align-items: start;
    }
    .p-list {
      display: flex;
      flex-direction: column;
    }
    .p-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 15px 8px;
      border-bottom: 1px solid var(--d-line-soft);
      align-items: baseline;
    }
    .p-row__name {
      color: var(--d-ink);
      font-size: clamp(14px, 2vw, 16px);
    }
    .p-row__price {
      font-family: var(--d-font-mono);
      font-size: 12px;
      color: var(--d-mute);
      white-space: nowrap;
    }
    .p-note {
      font-family: var(--d-font-mono);
      font-size: 11px;
      color: var(--d-mute);
      margin-top: 16px;
      letter-spacing: 0.04em;
    }
    .p-services {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(20px, 3vw, 32px);
    }
    .p-service {
      display: flex;
      flex-direction: column;
      gap: 6px;
      border-top: 1px solid var(--d-line);
      padding-top: 16px;
    }
    .p-service__name {
      font-family: var(--d-font-display);
      font-size: 20px;
      color: var(--d-ink);
    }
    .p-service__meta {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .p-cta {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
    @media (max-width: 860px) {
      .p-head {
        grid-template-columns: minmax(0, 1fr);
      }
      .p-services {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class SalonPricing {
  protected readonly t = SALON;
  protected readonly homePath = SALON_HOME;
  protected readonly nav = SALON_NAV;
  protected readonly footer = SALON_FOOTER;
  protected readonly legal = SALON_LEGAL;
  protected readonly prices = SALON_PRICES;
  protected readonly services = SALON_SERVICES;

  constructor() {
    inject(SeoService).update({
      title: 'Árlista — fodrászat & kozmetika (Pryma demó)',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: tájékoztató árlista egy fodrászat- és kozmetikaoldalon.',
      path: '/demo/szalon/pricing',
      noindex: true,
    });
  }
}
