import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  output,
  signal,
} from '@angular/core';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { PryIcon, PryWordmark } from '../../ds';

type Stage = 'boot' | 'gate' | 'exit';

interface Gate {
  n: string;
  title: string;
  desc: string;
  href: string;
  tone: 'pink' | 'violet' | 'cyan';
}

/** Total boot time before the entry gate appears. */
const BOOT_MS = 3400;

/**
 * Pryma intro — a one-per-session boot sequence: the core drops in and powers on frame by
 * frame, the wordmark locks, then a three-way entry gate. Overlay only; it sits on top of the
 * already-rendered (prerendered) page, so crawlers and no-JS clients see the real content. The
 * shell decides when to mount it; this component just plays and emits the chosen destination.
 * Skippable (click / Esc), and under reduced motion it opens straight on the gate with no boot.
 */
@Component({
  selector: 'pry-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryWordmark, PryIcon],
  templateUrl: './pry-intro.html',
  styleUrl: './pry-intro.scss',
  host: {
    '[class.is-exit]': "stage() === 'exit'",
    '[class.is-gate]': "stage() !== 'boot'",
  },
})
export class PryIntro {
  /** Chosen destination route path; the shell navigates there and removes the overlay. */
  readonly enter = output<string>();

  private readonly base = inject(APP_BASE_HREF, { optional: true }) ?? '/';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly reduced =
    this.isBrowser && matchMedia('(prefers-reduced-motion: reduce)').matches;

  protected readonly stage = signal<Stage>(this.reduced ? 'gate' : 'boot');
  protected readonly pct = signal(0);
  /** Fit the rigid boot block to whatever the device actually shows. */
  protected readonly scale = signal(1);

  /**
   * Six-frame power-on sequence; frame 1 is dark, each following frame lights one more system.
   * The per-frame reveal timing lives in the stylesheet (`.core__frame--fN`) — not inline — so
   * the scoped @keyframes resolve. (Angular renames component keyframes under emulated
   * encapsulation, so an inline `animation: pi-frame` would reference a name that no longer exists.)
   */
  protected readonly frames = [
    { src: this.asset('assets/intro/robot_1.jpg'), cls: 'core__frame--f1' },
    { src: this.asset('assets/intro/robot_2.jpg'), cls: 'core__frame--f2' },
    { src: this.asset('assets/intro/robot_3.jpg'), cls: 'core__frame--f3' },
    { src: this.asset('assets/intro/robot_4.jpg'), cls: 'core__frame--f4' },
    { src: this.asset('assets/intro/robot_5.jpg'), cls: 'core__frame--f5' },
    { src: this.asset('assets/intro/robot_6.jpg'), cls: 'core__frame--f6' },
  ];

  protected readonly gates: Gate[] = [
    {
      n: '01',
      title: $localize`:@@intro.gate.services.title:Szolgáltatások`,
      desc: $localize`:@@intro.gate.services.desc:Weboldal, arculat és marketing alapok kis vállalkozásoknak.`,
      href: '/services',
      tone: 'pink',
    },
    {
      n: '02',
      title: $localize`:@@intro.gate.demo.title:Demó`,
      desc: $localize`:@@intro.gate.demo.desc:Élő minták valódi kisvállalkozásokra szabva.`,
      href: '/demo',
      tone: 'violet',
    },
    {
      n: '03',
      title: $localize`:@@intro.gate.contact.title:Kapcsolat`,
      desc: $localize`:@@intro.gate.contact.desc:Kérj ajánlatot, 3 munkanapon belül válaszolunk.`,
      href: '/contact',
      tone: 'cyan',
    },
  ];

  constructor() {
    const destroyRef = inject(DestroyRef);
    if (!this.isBrowser || this.reduced) return;

    afterNextRender(() => {
      this.fit();
      const onResize = () => this.fit();
      addEventListener('resize', onResize, { passive: true });
      addEventListener('orientationchange', onResize, { passive: true });
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.stage() === 'boot') this.skip();
      };
      addEventListener('keydown', onKey);
      destroyRef.onDestroy(() => {
        removeEventListener('resize', onResize);
        removeEventListener('orientationchange', onResize);
        removeEventListener('keydown', onKey);
      });

      // Loading percentage (0→100) and the auto-advance to the gate.
      const start = 900;
      const span = 1420;
      const t0 = performance.now();
      let raf = 0;
      const tick = (now: number) => {
        const p = Math.max(0, Math.min(1, (now - t0 - start) / span));
        this.pct.set(Math.round(p * 100));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      const toGate = setTimeout(() => this.stage.set('gate'), BOOT_MS);
      destroyRef.onDestroy(() => {
        cancelAnimationFrame(raf);
        clearTimeout(toGate);
      });
    });
  }

  /** Jump straight to the gate (click on the boot stage, or Esc). */
  protected skip() {
    if (this.stage() === 'boot') this.stage.set('gate');
  }

  /** Pick a destination: play the wipe-out and tell the shell where to go. */
  protected choose(href: string) {
    this.stage.set('exit');
    this.enter.emit(href);
  }

  private fit() {
    const w = visualViewport?.width ?? innerWidth;
    const h = visualViewport?.height ?? innerHeight;
    // 448 = the widest locked element (the PRYMA SOLUTIONS wordmark), not the robot frame.
    this.scale.set(Math.min(1, (w - 32) / 448, (h - 48) / 760));
  }

  private asset(path: string): string {
    const base = this.base.endsWith('/') ? this.base : this.base + '/';
    return base + path;
  }
}
