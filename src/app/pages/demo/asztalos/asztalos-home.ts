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
  WORKSHOP,
  WORKSHOP_HOME,
  WORKSHOP_WORK,
  WORKSHOP_NAV,
  WORKSHOP_FOOTER,
  WORKSHOP_LEGAL,
  WORK_ITEMS,
  WORK_PROCESS,
  WORK_CONTACT,
} from './asztalos.data';

/** Carpenter layout variants exposed by the demo viewer. */
export type WorkshopLayout = 'list' | 'wide';

/** Carpenter demo — home. Minimal, sans, warm wood tones. Shell-less showcase (noindex). */
@Component({
  selector: 'pry-demo-asztalos-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DemoChrome, DemoArt, PryIcon],
  templateUrl: './asztalos-home.html',
  styles: `
    .w-hero {
      display: flex;
      flex-direction: column;
      gap: clamp(22px, 3vw, 34px);
      max-width: 780px;
      align-items: flex-start;
    }
    .w-hero__cta {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      align-items: center;
    }
    .w-hero__note {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    /* Wide variant: full-bleed opener above, centred hero body. */
    .w-hero--center {
      align-items: center;
      text-align: center;
      margin: 0 auto;
    }
    .w-hero--center .w-hero__cta {
      justify-content: center;
    }
    .w-list {
      border-top: 1px solid var(--d-line);
    }
    .w-row {
      display: grid;
      grid-template-columns: 58px 1fr;
      gap: clamp(14px, 3vw, 40px);
      padding: clamp(22px, 3vw, 30px) 6px;
      border-bottom: 1px solid var(--d-line);
      align-items: baseline;
    }
    .w-row__n {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.1em;
      color: var(--d-accent);
    }
    .w-row__head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 6px;
    }
    .w-row__title {
      font-family: var(--d-font-display);
      font-weight: 600;
      font-size: clamp(19px, 2.6vw, 24px);
      letter-spacing: -0.02em;
      color: var(--d-ink);
      margin: 0;
    }
    .w-row__body {
      color: var(--d-mute);
      font-size: 15px;
      margin: 0;
      max-width: 560px;
    }
    .w-proc {
      display: grid;
      grid-template-columns: 0.44fr 1fr;
      gap: clamp(26px, 4vw, 64px);
      align-items: start;
    }
    .w-proc__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(24px, 3vw, 42px);
    }
    .w-step {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .w-step__n {
      display: flex;
      align-items: center;
      gap: 9px;
      font-family: var(--d-font-mono);
      font-size: 11px;
      color: var(--d-accent);
      letter-spacing: 0.1em;
    }
    .w-step__h {
      font-family: var(--d-font-display);
      font-weight: 600;
      font-size: 17px;
      letter-spacing: -0.01em;
      color: var(--d-ink);
    }
    .w-step__b {
      color: var(--d-mute);
      font-size: 14px;
      margin: 0;
    }
    .w-quote {
      max-width: 820px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .w-quote p {
      font-family: var(--d-font-display);
      font-weight: 500;
      font-size: clamp(20px, 3vw, 28px);
      line-height: 1.4;
      letter-spacing: -0.02em;
      color: var(--d-ink);
      margin: 0;
    }
    .w-quote span {
      font-family: var(--d-font-mono);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--d-mute);
    }
    .w-contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(26px, 4vw, 64px);
      align-items: end;
    }
    .w-contact__lines {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: var(--d-font-mono);
      font-size: 13px;
      letter-spacing: 0.04em;
      color: var(--d-ink);
    }
    .w-contact__line {
      display: inline-flex;
      align-items: center;
      gap: 9px;
    }
    .w-contact__line.mute {
      color: var(--d-mute);
    }
    @media (max-width: 860px) {
      .w-proc,
      .w-contact {
        grid-template-columns: 1fr;
      }
      .w-proc__grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class WorkshopHome {
  /** Colour mood index, layout variant and graphics mode — bound from the viewer's query string. */
  readonly mood = input(0, { transform: numberAttribute });
  readonly layout = input<WorkshopLayout>('list');
  readonly gfx = input<DemoGfx>('foto');

  protected readonly t = computed(() => resolveDemoTheme(WORKSHOP, this.mood()));
  protected readonly showIcons = computed(() => this.gfx() !== 'foto');

  protected readonly homePath = WORKSHOP_HOME;
  protected readonly workPath = WORKSHOP_WORK;
  protected readonly nav = WORKSHOP_NAV;
  protected readonly footer = WORKSHOP_FOOTER;
  protected readonly legal = WORKSHOP_LEGAL;
  protected readonly items = WORK_ITEMS;
  protected readonly process = WORK_PROCESS;
  protected readonly contactLines = WORK_CONTACT;

  constructor() {
    inject(SeoService).update({
      title: 'Asztalosmunka — Pryma demó',
      description:
        'Példaoldal a Pryma Solutions bemutatójához: minimál, szöveges asztalos- és kivitelező oldal.',
      path: '/demo/asztalos',
      noindex: true,
    });
  }
}
