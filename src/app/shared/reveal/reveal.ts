import {
  afterNextRender,
  booleanAttribute,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

const REVEALED = 'is-in';

/**
 * Reveal-on-scroll: the block starts faded + 8px low (via the global `.pry-reveal` rule) and
 * transitions in when it enters the viewport. This is the design system's entrance motion
 * (420ms, fade + 8px rise, no slide — per CLAUDE.md), which the static pages were missing.
 *
 * SSR/prerender-safe: the `pry-reveal` class is baked into the prerendered HTML so the text is
 * present in view-source; a <noscript> block in index.html forces everything visible when JS
 * is off; and `afterNextRender` (browser-only) wires the observer after hydration. A failsafe
 * timer reveals the block even if the observer never fires.
 */
@Directive({
  selector: '[pryReveal]',
  host: { class: 'pry-reveal' },
})
export class PryReveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  /** Reveal on load instead of on scroll (for above-the-fold content). */
  readonly immediate = input(false, { alias: 'pryRevealImmediate', transform: booleanAttribute });
  /** Extra transition delay in ms. */
  readonly delayMs = input(0, { alias: 'pryRevealDelay' });

  constructor() {
    afterNextRender(() => {
      const host = this.el.nativeElement;
      const delay = this.delayMs();
      if (delay) host.style.transitionDelay = `${delay}ms`;
      revealOnView(host, this.immediate());
    });
  }
}

/**
 * Same as PryReveal, but staggers the element's direct children (grids and stacks), matching
 * the prototype's `AppearGroup`. The stagger and initial state live in the global stylesheet.
 */
@Directive({
  selector: '[pryRevealGroup]',
  host: { class: 'pry-reveal-group' },
})
export class PryRevealGroup {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly immediate = input(false, {
    alias: 'pryRevealGroupImmediate',
    transform: booleanAttribute,
  });

  constructor() {
    afterNextRender(() => revealOnView(this.el.nativeElement, this.immediate()));
  }
}

function revealOnView(host: HTMLElement, immediate: boolean): void {
  if (immediate || typeof IntersectionObserver === 'undefined') {
    requestAnimationFrame(() => host.classList.add(REVEALED));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        host.classList.add(REVEALED);
        io.disconnect();
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  io.observe(host);

  // Failsafe: never leave a block stuck hidden if the observer misbehaves.
  setTimeout(() => {
    if (!host.classList.contains(REVEALED)) {
      host.classList.add(REVEALED);
      io.disconnect();
    }
  }, 1500);
}
