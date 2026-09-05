import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { APP_BASE_HREF, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../../core/seo.service';
import {
  SALON_THEME,
  TRAINER_THEME,
  WORKSHOP_THEME,
  demoSkinCss,
  resolveDemoTheme,
  type DemoGfx,
  type DemoLayoutOption,
  type DemoTheme,
} from '../shared/demo-theme';
import {
  PryButton,
  PryContainer,
  PryEyebrow,
  PryIcon,
  PryMeshBackdrop,
  PrySection,
} from '../../../ds';

type DemoId = 'szalon' | 'edzo' | 'asztalos';
type Dev = 'mobile' | 'tablet' | 'desktop';

interface DemoDef {
  id: DemoId;
  rail: string;
  note: string;
  path: string; // route segment for the iframe src, e.g. "demo/szalon"
  route: string; // absolute app route for "open standalone"
  frameTitle: string;
  src: SafeResourceUrl; // default (query-less) src, used for the landing previews
  theme: DemoTheme; // base theme — supplies the colour moods + skin palette
  layouts: DemoLayoutOption[]; // the two selectable layout variants
}

/** Natural viewport of each device — the iframe renders at this width (so the demo picks the
 *  matching responsive layout) and is then scaled to fit the stage. */
const DEV_DIM: Record<Dev, { w: number; h: number }> = {
  mobile: { w: 390, h: 844 },
  tablet: { w: 834, h: 1112 },
  desktop: { w: 1440, h: 900 },
};

/** The palette each demo re-skins the outer shell to while it is open. */
const SKIN: Record<DemoId, DemoTheme> = {
  szalon: SALON_THEME,
  edzo: TRAINER_THEME,
  asztalos: WORKSHOP_THEME,
};

const SKIN_STYLE_ID = 'pryma-demo-skin';
const EXIT_OVERLAY_ID = 'pryma-demo-exit';

/** Auto-scroll tour: idle delay before it starts, and how long the full traversal takes. */
const AUTO_DELAY_MS = 1400;
const AUTO_DURATION_MS = 30000;
/** Show the scroll-to-top button once the framed page is scrolled past this many px. */
const TOP_THRESHOLD = 240;

/**
 * Demo viewer — the one demo route that keeps the site shell. A landing grid of the three
 * example sites; opening one shows it inside a switchable device frame (mobile / tablet /
 * desktop), rendered live from its own shell-less route. noindex: showcase fixtures.
 */
@Component({
  selector: 'pry-demo-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PryButton, PryContainer, PryEyebrow, PryIcon, PryMeshBackdrop, PrySection],
  templateUrl: './demo-gallery.html',
  styleUrl: './demo-gallery.scss',
})
export class DemoGallery {
  private readonly base = inject(APP_BASE_HREF, { optional: true }) ?? '/';
  private readonly sanitizer = inject(DomSanitizer);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly demos: DemoDef[] = [
    {
      id: 'szalon',
      rail: $localize`:@@demo.szalon.rail:Fodrászat & kozmetika`,
      note: $localize`:@@demo.szalon.note:Meleg, képvezérelt, hosszú oldal.`,
      path: 'demo/szalon',
      route: '/demo/szalon',
      frameTitle: $localize`:@@demo.frame.szalon:Fodrászat és kozmetika példaoldal`,
      src: this.frame('demo/szalon'),
      theme: SALON_THEME,
      layouts: [
        { id: 'split', label: $localize`:@@demo.layout.split:Osztott` },
        { id: 'magazine', label: $localize`:@@demo.layout.magazine:Magazin` },
      ],
    },
    {
      id: 'edzo',
      rail: $localize`:@@demo.edzo.rail:Személyi edző`,
      note: $localize`:@@demo.edzo.note:Sötét, rövid, kártyás felépítés.`,
      path: 'demo/edzo',
      route: '/demo/edzo',
      frameTitle: $localize`:@@demo.frame.edzo:Személyi edző példaoldal`,
      src: this.frame('demo/edzo'),
      theme: TRAINER_THEME,
      layouts: [
        { id: 'left', label: $localize`:@@demo.layout.left:Balra zárt` },
        { id: 'poster', label: $localize`:@@demo.layout.poster:Poszter` },
      ],
    },
    {
      id: 'asztalos',
      rail: $localize`:@@demo.asztalos.rail:Asztalos / kivitelező`,
      note: $localize`:@@demo.asztalos.note:Minimál, szöveges, kevés fotó.`,
      path: 'demo/asztalos',
      route: '/demo/asztalos',
      frameTitle: $localize`:@@demo.frame.asztalos:Asztalos és kivitelező példaoldal`,
      src: this.frame('demo/asztalos'),
      theme: WORKSHOP_THEME,
      layouts: [
        { id: 'list', label: $localize`:@@demo.layout.list:Listás` },
        { id: 'wide', label: $localize`:@@demo.layout.wide:Széles` },
      ],
    },
  ];

  /** Graphics modes (shared across demos). */
  protected readonly gfxOptions: { key: DemoGfx; label: string }[] = [
    { key: 'foto', label: $localize`:@@demo.gfx.foto:Fotóhely` },
    { key: 'ikon', label: $localize`:@@demo.gfx.ikon:Ikonok` },
    { key: 'illu', label: $localize`:@@demo.gfx.illu:Illusztráció` },
  ];

  protected readonly devices: { key: Dev; label: string }[] = [
    { key: 'mobile', label: $localize`:@@demo.dev.mobile:Mobil` },
    { key: 'tablet', label: $localize`:@@demo.dev.tablet:Tablet` },
    { key: 'desktop', label: $localize`:@@demo.dev.desktop:Desktop` },
  ];

  // ── State ────────────────────────────────────────────────
  protected readonly pick = signal<DemoId | null>(null);
  protected readonly dev = signal<Dev>('desktop');
  /** Whether the framed page is scrolled far enough to offer the scroll-to-top control. */
  protected readonly showTop = signal(false);
  // Demo playground controls — bound into the iframe src as query params.
  protected readonly mood = signal(0);
  protected readonly layout = signal<string>('split');
  protected readonly gfx = signal<DemoGfx>('foto');
  private readonly stageW = signal(900);
  private readonly stageH = signal(640);

  private readonly stageEl = viewChild<ElementRef<HTMLElement>>('stage');

  protected readonly current = computed(
    () => this.demos.find((d) => d.id === this.pick()) ?? this.demos[0],
  );
  protected readonly moods = computed(() => this.current().theme.moods);

  /** Stage iframe src, rebuilt whenever a control changes (brief reload is acceptable). */
  protected readonly frameSrc = computed<SafeResourceUrl>(() => {
    const q = `?mood=${this.mood()}&layout=${this.layout()}&gfx=${this.gfx()}`;
    return this.frame(this.current().path + q);
  });

  // ── Device-frame geometry (mirrors the design's DeviceFrame) ─
  private readonly dim = computed(() => DEV_DIM[this.dev()]);
  protected readonly bezel = computed(() =>
    this.dev() === 'mobile' ? 11 : this.dev() === 'tablet' ? 13 : 6,
  );
  protected readonly chrome = computed(() => (this.dev() === 'desktop' ? 30 : 0));
  protected readonly scale = computed(() => {
    const d = this.dim();
    const b = this.bezel();
    const c = this.chrome();
    const avail = Math.max(280, this.stageW());
    return Math.min((avail - b * 2) / d.w, (this.stageH() - b * 2 - c) / d.h, 1);
  });
  protected readonly frameW = computed(() => this.dim().w);
  protected readonly frameH = computed(() => this.dim().h);
  protected readonly screenW = computed(() => Math.round(this.dim().w * this.scale()));
  protected readonly screenH = computed(() => Math.round(this.dim().h * this.scale()));
  protected readonly shellW = computed(() => this.screenW() + this.bezel() * 2);
  protected readonly shellH = computed(() => this.screenH() + this.bezel() * 2 + this.chrome());
  protected readonly transform = computed(() => `scale(${this.scale()})`);

  private ro?: ResizeObserver;
  // Live stage-iframe references, refreshed on every (load); torn down before rewiring.
  private frameEl?: HTMLIFrameElement;
  private frameCleanup?: () => void;
  private autoStop?: () => void;
  // Background of the currently-applied demo skin — the colour the outro cover fades from.
  private lastSkinBg: string | null = null;

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.demo.title:Demó — Pryma Solutions`,
      description: $localize`:@@seo.demo.desc:Három szakma, három szándékosan különböző stílus. Nézd meg élő példaoldalakon, milyen lehet a te weboldalad — fodrászat, személyi edzés és asztalosmunka.`,
      path: '/demo',
      noindex: true,
    });

    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (window.innerWidth < 760) this.dev.set('mobile');
      this.updateStageH();
      const onResize = () => this.updateStageH();
      window.addEventListener('resize', onResize, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('resize', onResize));
    });

    // Track the stage width whenever the stage is on screen (it lives inside an @if).
    effect(() => {
      const el = this.stageEl()?.nativeElement;
      this.ro?.disconnect();
      if (!el || typeof ResizeObserver === 'undefined') return;
      this.ro = new ResizeObserver((entries) => this.stageW.set(entries[0].contentRect.width));
      this.ro.observe(el);
      this.stageW.set(el.getBoundingClientRect().width);
    });
    destroyRef.onDestroy(() => this.ro?.disconnect());

    // Re-skin the whole outer shell to the open demo's palette at the selected mood accent
    // (removed on exit / leaving).
    effect(() => {
      const id = this.pick();
      if (!this.isBrowser) return;
      this.applySkin(id ? resolveDemoTheme(SKIN[id], this.mood()) : null);
    });
    destroyRef.onDestroy(() => {
      if (this.isBrowser) this.applySkin(null);
    });
    destroyRef.onDestroy(() => this.teardownFrame());
  }

  protected open(id: DemoId) {
    this.pick.set(id);
    // Reset the playground to each demo's defaults (layout ids differ per demo).
    this.mood.set(0);
    this.layout.set(this.demos.find((d) => d.id === id)?.layouts[0].id ?? 'split');
    this.gfx.set('foto');
  }
  protected back() {
    this.teardownFrame();
    this.showTop.set(false);
    this.pick.set(null);
  }
  protected setDev(d: Dev) {
    this.dev.set(d);
  }
  protected setMood(i: number) {
    this.mood.set(i);
  }
  protected setLayout(id: string) {
    this.layout.set(id);
  }
  protected setGfx(g: DemoGfx) {
    this.gfx.set(g);
  }
  protected moodLabel(i: number): string {
    return $localize`:@@demo.color.dot:Szín ${i + 1}:index:`;
  }

  /**
   * Wire the two design behaviours onto the stage iframe each time it (re)loads: an auto-scroll
   * tour that starts after a short idle and hands control back on the first manual input, and the
   * scroll-to-top button's visibility. The frame is same-origin, so we drive its own contentWindow.
   */
  protected onFrameLoad(ev: Event) {
    if (!this.isBrowser) return;
    const iframe = ev.target as HTMLIFrameElement;
    this.frameEl = iframe;
    this.teardownFrame();

    let win: Window | null;
    let scroller: Element;
    try {
      win = iframe.contentWindow;
      const cdoc = iframe.contentDocument;
      if (!win || !cdoc) return;
      scroller = cdoc.scrollingElement ?? cdoc.documentElement;
    } catch {
      return; // cross-origin (shouldn't happen for our own routes) — skip gracefully
    }

    const reduce =
      this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    // Scroll-to-top button visibility.
    this.showTop.set(false);
    const onScroll = () => this.showTop.set(scroller.scrollTop > TOP_THRESHOLD);
    win.addEventListener('scroll', onScroll, { passive: true });

    // Auto-scroll tour (skipped entirely under reduced-motion).
    let raf = 0;
    let timer = 0;
    let stopped = false;
    let start: number | null = null;
    const stop = () => {
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
    };
    this.autoStop = stop;
    const step = (ts: number) => {
      if (stopped || !win) return;
      if (start === null) start = ts;
      const max = scroller.scrollHeight - win.innerHeight;
      if (max > 0) win.scrollTo(0, max * Math.min(1, (ts - start) / AUTO_DURATION_MS));
      if (ts - start < AUTO_DURATION_MS) raf = requestAnimationFrame(step);
    };
    const stopEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    try {
      win.scrollTo(0, 0);
    } catch {
      /* ignore */
    }
    if (!reduce) {
      timer = window.setTimeout(() => (raf = requestAnimationFrame(step)), AUTO_DELAY_MS);
      stopEvents.forEach((e) => win!.addEventListener(e, stop, { passive: true }));
    }

    this.frameCleanup = () => {
      stop();
      clearTimeout(timer);
      try {
        win?.removeEventListener('scroll', onScroll);
        stopEvents.forEach((e) => win?.removeEventListener(e, stop));
      } catch {
        /* frame already gone */
      }
    };
  }

  /** Cancel the tour and glide the framed page back to the top. */
  protected toTop() {
    this.autoStop?.();
    const win = this.frameEl?.contentWindow;
    if (!win) return;
    const reduce =
      this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;
    try {
      win.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    } catch {
      win.scrollTo(0, 0);
    }
  }

  private teardownFrame() {
    this.frameCleanup?.();
    this.frameCleanup = undefined;
    this.autoStop = undefined;
  }

  private updateStageH() {
    this.stageH.set(Math.max(360, Math.min(720, Math.round(window.innerHeight * 0.74))));
  }

  /** Inject/replace/remove the global token override that re-skins the shell. */
  private applySkin(theme: DemoTheme | null) {
    let el = this.doc.getElementById(SKIN_STYLE_ID) as HTMLStyleElement | null;
    if (!theme) {
      // Exiting a demo: cover with its background, drop the skin, then fade back to Pryma.
      if (el) this.fadeBackToPryma(this.lastSkinBg);
      el?.remove();
      this.lastSkinBg = null;
      return;
    }
    this.lastSkinBg = theme.bg;
    if (!el) {
      el = this.doc.createElement('style');
      el.id = SKIN_STYLE_ID;
      this.doc.head.appendChild(el);
    }
    el.textContent = demoSkinCss(theme);
  }

  /**
   * Smooth outro when the demo skin comes off: a full-viewport cover in the demo's background is
   * dropped over everything, the skin is removed underneath, and the cover eases out to reveal the
   * Pryma design. Skipped under reduced motion. Ported from the design's `fadeBackToPryma`.
   */
  private fadeBackToPryma(from: string | null) {
    if (!from || !this.isBrowser) return;
    const win = this.doc.defaultView;
    if (win?.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.doc.getElementById(EXIT_OVERLAY_ID)?.remove();
    const o = this.doc.createElement('div');
    o.id = EXIT_OVERLAY_ID;
    o.style.cssText = `position:fixed;inset:0;z-index:60;pointer-events:none;background:${from};opacity:1`;
    this.doc.body.appendChild(o);

    const D = 620;
    const t0 = performance.now();
    let raf = 0;
    let safety = 0;
    const kill = () => {
      if (raf) cancelAnimationFrame(raf);
      if (safety) clearTimeout(safety);
      o.remove();
    };
    const tick = (ts: number) => {
      const p = Math.min(1, (ts - t0) / D);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; // easeInOutQuad
      o.style.opacity = String(1 - eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else kill();
    };
    raf = requestAnimationFrame(tick);
    // Belt-and-braces: never let the cover linger if frames stop (throttled/background tab).
    safety = win?.setTimeout(kill, D + 500) ?? 0;
  }

  private frame(path: string): SafeResourceUrl {
    const base = this.base.endsWith('/') ? this.base : this.base + '/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(base + path);
  }
}
