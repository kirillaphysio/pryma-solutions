import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/seo.service';
import { DemoChrome, DemoArt } from '../shared/demo-chrome';
import {
  TRAINER,
  TRAINER_HOME,
  TRAINER_PROGRAMS,
  TRAINER_NAV,
  TRAINER_FOOTER,
  TRAINER_LEGAL,
  TRAINER_STATS,
  TRAINER_PROGRAM_LIST,
  TRAINER_STEPS,
} from './edzo.data';

/** Trainer demo — home. Dark, condensed uppercase, card-led. Shell-less showcase (noindex). */
@Component({
  selector: 'pry-demo-edzo-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome, DemoArt],
  templateUrl: './edzo-home.html',
  styles: `
    .e-hero {
      display: flex;
      flex-direction: column;
      gap: 26px;
      max-width: 900px;
    }
    .e-hero__cta {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .e-stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1px;
      background: var(--d-line);
      border: 1px solid var(--d-line);
      margin-top: clamp(36px, 5vw, 64px);
    }
    .e-stat {
      background: var(--d-bg);
      padding: clamp(18px, 3vw, 26px);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .e-stat__val {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(26px, 3.6vw, 36px);
      letter-spacing: -0.03em;
      color: var(--d-accent);
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .e-stat__lbl {
      font-family: var(--d-font-mono);
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .e-grid3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(16px, 2vw, 24px);
    }
    .e-prog {
      background: var(--d-card);
      border: 1px solid var(--d-line);
      border-radius: var(--d-radius);
      padding: clamp(22px, 3vw, 30px);
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .e-prog__top {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }
    .e-prog__name {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: 24px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: var(--d-ink);
    }
    .e-prog__meta {
      font-family: var(--d-font-mono);
      font-size: 11px;
      color: var(--d-accent);
      letter-spacing: 0.08em;
    }
    .e-prog__body {
      color: var(--d-mute);
      font-size: 14px;
      margin: 0;
    }
    .e-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: auto;
    }
    .e-tag {
      font-family: var(--d-font-mono);
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--d-mute);
      border: 1px solid var(--d-line);
      border-radius: 99px;
      padding: 4px 10px;
    }
    .e-steps-grid {
      display: grid;
      grid-template-columns: 0.42fr 1fr;
      gap: clamp(26px, 4vw, 56px);
      align-items: start;
    }
    .e-steps {
      display: flex;
      flex-direction: column;
    }
    .e-step {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: clamp(12px, 2vw, 24px);
      padding: clamp(18px, 3vw, 24px) 8px;
      border-top: 1px solid var(--d-line);
    }
    .e-step__n {
      font-family: var(--d-font-mono);
      font-size: 12px;
      color: var(--d-accent);
      letter-spacing: 0.1em;
    }
    .e-step__h {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(19px, 2.6vw, 23px);
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: var(--d-ink);
    }
    .e-step__b {
      color: var(--d-mute);
      font-size: 14px;
      margin: 6px 0 0;
      max-width: 560px;
    }
    .e-band {
      background: var(--d-accent);
      padding: clamp(40px, 6vw, 64px) 0;
    }
    .e-band__in {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 clamp(20px, 5vw, 64px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .e-band__title {
      font-family: var(--d-font-display);
      font-weight: 800;
      font-size: clamp(26px, 4vw, 40px);
      letter-spacing: -0.025em;
      text-transform: uppercase;
      color: var(--d-on-accent);
      max-width: 640px;
      margin: 0;
    }
    .e-band__btn {
      display: inline-flex;
      align-items: center;
      font-family: var(--d-font-body);
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      background: var(--d-bg);
      color: var(--d-ink);
      padding: 15px 24px;
      border-radius: var(--d-radius);
      text-decoration: none;
      white-space: nowrap;
    }
    @media (max-width: 860px) {
      .e-stats {
        grid-template-columns: 1fr 1fr;
      }
      .e-grid3 {
        grid-template-columns: 1fr;
      }
      .e-steps-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class TrainerHome {
  protected readonly t = TRAINER;
  protected readonly homePath = TRAINER_HOME;
  protected readonly programsPath = TRAINER_PROGRAMS;
  protected readonly nav = TRAINER_NAV;
  protected readonly footer = TRAINER_FOOTER;
  protected readonly legal = TRAINER_LEGAL;
  protected readonly stats = TRAINER_STATS;
  protected readonly programs = TRAINER_PROGRAM_LIST;
  protected readonly steps = TRAINER_STEPS;

  constructor() {
    inject(SeoService).update({
      title: 'Személyi edzés — Pryma demó',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: sötét, kondenzált hangvételű személyi edző oldal.',
      path: '/demo/edzo',
      noindex: true,
    });
  }
}
