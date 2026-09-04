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
  src: SafeResourceUrl;
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
    },
    {
      id: 'edzo',
      rail: $localize`:@@demo.edzo.rail:Személyi edző`,
      note: $localize`:@@demo.edzo.note:Sötét, rövid, kártyás felépítés.`,
      path: 'demo/edzo',
      route: '/demo/edzo',
      frameTitle: $localize`:@@demo.frame.edzo:Személyi edző példaoldal`,
      src: this.frame('demo/edzo'),
    },
    {
      id: 'asztalos',
      rail: $localize`:@@demo.asztalos.rail:Asztalos / kivitelező`,
      note: $localize`:@@demo.asztalos.note:Minimál, szöveges, kevés fotó.`,
      path: 'demo/asztalos',
      route: '/demo/asztalos',
      frameTitle: $localize`:@@demo.frame.asztalos:Asztalos és kivitelező példaoldal`,
      src: this.frame('demo/asztalos'),
    },
  ];

  protected readonly devices: { key: Dev; label: string }[] = [
    { key: 'mobile', label: $localize`:@@demo.dev.mobile:Mobil` },
    { key: 'tablet', label: $localize`:@@demo.dev.tablet:Tablet` },
    { key: 'desktop', label: $localize`:@@demo.dev.desktop:Desktop` },
  ];

  // ── State ────────────────────────────────────────────────
  protected readonly pick = signal<DemoId | null>(null);
  protected readonly dev = signal<Dev>('desktop');
  private readonly stageW = signal(900);
  private readonly stageH = signal(640);

  private readonly stageEl = viewChild<ElementRef<HTMLElement>>('stage');

  protected readonly current = computed(
    () => this.demos.find((d) => d.id === this.pick()) ?? this.demos[0],
  );

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

    // Re-skin the whole outer shell to the open demo's palette (removed on exit / leaving).
    effect(() => {
      const id = this.pick();
      if (!this.isBrowser) return;
      this.applySkin(id ? SKIN[id] : null);
    });
    destroyRef.onDestroy(() => {
      if (this.isBrowser) this.applySkin(null);
    });
  }

  protected open(id: DemoId) {
    this.pick.set(id);
  }
  protected back() {
    this.pick.set(null);
  }
  protected setDev(d: Dev) {
    this.dev.set(d);
  }

  private updateStageH() {
    this.stageH.set(Math.max(360, Math.min(720, Math.round(window.innerHeight * 0.74))));
  }

  /** Inject/replace/remove the global token override that re-skins the shell. */
  private applySkin(theme: DemoTheme | null) {
    let el = this.doc.getElementById(SKIN_STYLE_ID) as HTMLStyleElement | null;
    if (!theme) {
      el?.remove();
      return;
    }
    if (!el) {
      el = this.doc.createElement('style');
      el.id = SKIN_STYLE_ID;
      this.doc.head.appendChild(el);
    }
    el.textContent = demoSkinCss(theme);
  }

  private frame(path: string): SafeResourceUrl {
    const base = this.base.endsWith('/') ? this.base : this.base + '/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(base + path);
  }
}
