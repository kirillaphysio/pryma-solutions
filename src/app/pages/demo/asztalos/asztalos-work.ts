import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/seo.service';
import { DemoChrome, DemoArt } from '../shared/demo-chrome';
import {
  WORKSHOP,
  WORKSHOP_HOME,
  WORKSHOP_NAV,
  WORKSHOP_FOOTER,
  WORKSHOP_LEGAL,
  WORK_ITEMS,
  WORK_SPECIES,
  WORK_SPEC,
} from './asztalos.data';

/** Carpenter demo — work & materials subpage. Shell-less showcase (noindex). */
@Component({
  selector: 'pry-demo-asztalos-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome, DemoArt],
  templateUrl: './asztalos-work.html',
  styles: `
    .ww-item {
      display: grid;
      grid-template-columns: 1fr 0.8fr;
      gap: clamp(20px, 4vw, 48px);
      align-items: center;
      padding: clamp(28px, 4vw, 44px) 0;
      border-top: 1px solid var(--d-line);
    }
    .ww-item:nth-child(even) .ww-item__art {
      order: -1;
    }
    .ww-item__n {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.1em;
      color: var(--d-accent);
    }
    .ww-item__title {
      font-family: var(--d-font-display);
      font-weight: 600;
      font-size: clamp(22px, 3vw, 30px);
      letter-spacing: -0.02em;
      color: var(--d-ink);
      margin: 10px 0 12px;
    }
    .ww-item__body {
      color: var(--d-mute);
      font-size: 15px;
      margin: 0;
      max-width: 460px;
    }
    .ww-species {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: clamp(12px, 2vw, 18px);
      margin-bottom: clamp(28px, 4vw, 40px);
    }
    .ww-species__cell {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
    .ww-species__name {
      font-family: var(--d-font-display);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: -0.01em;
      color: var(--d-ink);
    }
    .ww-species__note {
      font-family: var(--d-font-mono);
      font-size: 9.5px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--d-mute);
      line-height: 1.5;
    }
    .ww-spec {
      display: grid;
      grid-template-columns: 190px 1fr;
      gap: 16px;
      padding: 14px 8px;
      border-top: 1px solid var(--d-line);
      align-items: baseline;
    }
    .ww-spec__k {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .ww-spec__v {
      font-size: clamp(14px, 2vw, 16px);
      color: var(--d-ink);
    }
    .ww-cta {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
    @media (max-width: 720px) {
      .ww-item {
        grid-template-columns: 1fr;
      }
      .ww-item:nth-child(even) .ww-item__art {
        order: 0;
      }
      .ww-species {
        grid-template-columns: 1fr 1fr;
      }
      .ww-spec {
        grid-template-columns: 120px 1fr;
      }
    }
  `,
})
export class WorkshopWork {
  protected readonly t = WORKSHOP;
  protected readonly homePath = WORKSHOP_HOME;
  protected readonly nav = WORKSHOP_NAV;
  protected readonly footer = WORKSHOP_FOOTER;
  protected readonly legal = WORKSHOP_LEGAL;
  protected readonly items = WORK_ITEMS;
  protected readonly species = WORK_SPECIES;
  protected readonly spec = WORK_SPEC;

  constructor() {
    inject(SeoService).update({
      title: 'Munkák és anyagok — asztalosmunka (Pryma demó)',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: elkészült munkák és felhasznált anyagok egy asztalos oldalon.',
      path: '/demo/asztalos/work',
      noindex: true,
    });
  }
}
