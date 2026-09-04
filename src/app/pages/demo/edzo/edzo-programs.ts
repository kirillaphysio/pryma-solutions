import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/seo.service';
import { DemoChrome } from '../shared/demo-chrome';
import {
  TRAINER,
  TRAINER_HOME,
  TRAINER_NAV,
  TRAINER_FOOTER,
  TRAINER_LEGAL,
  TRAINER_PROGRAM_LIST,
  TRAINER_PRICES,
} from './edzo.data';

/** Trainer demo — programs + pricing subpage. Shell-less showcase (noindex). */
@Component({
  selector: 'pry-demo-edzo-programs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome],
  templateUrl: './edzo-programs.html',
  styles: `
    .ep-list {
      display: flex;
      flex-direction: column;
      gap: clamp(18px, 2.4vw, 26px);
    }
    .ep-prog {
      background: var(--d-card);
      border: 1px solid var(--d-line);
      border-radius: var(--d-radius);
      padding: clamp(24px, 3.4vw, 34px);
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      gap: clamp(20px, 3vw, 40px);
    }
    .ep-prog__head {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .ep-prog__name {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(26px, 3.4vw, 34px);
      letter-spacing: -0.025em;
      text-transform: uppercase;
      color: var(--d-ink);
    }
    .ep-prog__meta {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--d-accent);
    }
    .ep-prog__body {
      color: var(--d-mute);
      font-size: 14px;
      margin: 0;
    }
    .ep-more {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .ep-more li {
      display: flex;
      gap: 12px;
      font-size: 14px;
      color: var(--d-ink);
    }
    .ep-more li::before {
      content: '';
      width: 12px;
      height: 1px;
      background: var(--d-accent);
      flex: 0 0 auto;
      margin-top: 10px;
    }
    .ep-price-group {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(16px, 2vw, 24px);
    }
    .ep-price {
      border: 1px solid var(--d-line);
      border-radius: var(--d-radius);
      padding: clamp(22px, 3vw, 30px);
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--d-card);
    }
    .ep-price--hi {
      background: var(--d-accent);
      border-color: var(--d-accent);
    }
    .ep-price__name {
      font-family: var(--d-font-mono);
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .ep-price--hi .ep-price__name {
      color: var(--d-on-accent);
      opacity: 0.7;
    }
    .ep-price__val {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(26px, 3vw, 32px);
      letter-spacing: -0.03em;
      color: var(--d-ink);
      line-height: 1;
    }
    .ep-price--hi .ep-price__val {
      color: var(--d-on-accent);
    }
    .ep-price__body {
      font-size: 14px;
      margin: 0;
      color: var(--d-mute);
    }
    .ep-price--hi .ep-price__body {
      color: var(--d-on-accent);
      opacity: 0.82;
    }
    .ep-group-label {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(20px, 2.6vw, 26px);
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: var(--d-ink);
      margin: 0 0 18px;
    }
    @media (max-width: 860px) {
      .ep-prog {
        grid-template-columns: 1fr;
      }
      .ep-price-group {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class TrainerPrograms {
  protected readonly t = TRAINER;
  protected readonly homePath = TRAINER_HOME;
  protected readonly nav = TRAINER_NAV;
  protected readonly footer = TRAINER_FOOTER;
  protected readonly legal = TRAINER_LEGAL;
  protected readonly programs = TRAINER_PROGRAM_LIST;
  protected readonly alkalmi = TRAINER_PRICES.alkalmi;
  protected readonly berlet = TRAINER_PRICES.berlet;

  constructor() {
    inject(SeoService).update({
      title: 'Programok és árak — személyi edzés (Pryma demó)',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: edzésprogramok és árak egy személyi edző oldalon.',
      path: '/demo/edzo/programs',
      noindex: true,
    });
  }
}
