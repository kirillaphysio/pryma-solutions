import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ConsentState = 'unknown' | 'granted' | 'denied';

const STORAGE_KEY = 'pryma-consent';

/**
 * Signal-based consent, persisted in localStorage. Nothing writes a cookie or loads a Google
 * script before `state()` is 'granted'. The banner shows while the decision is 'unknown';
 * `reopen()` lets the footer bring it back so a choice can be changed.
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly state = signal<ConsentState>('unknown');
  /** Whether the cookie banner is visible. */
  readonly bannerOpen = signal(false);

  constructor() {
    if (!this.isBrowser) return;
    // Read the stored decision AFTER hydration, so the server (state 'unknown', banner
    // absent) and the client's first render agree — no hydration mismatch.
    afterNextRender(() => {
      const saved = this.read();
      if (saved === 'granted' || saved === 'denied') {
        this.state.set(saved);
      } else {
        this.bannerOpen.set(true);
      }
    });
  }

  grant() {
    this.set('granted');
  }
  deny() {
    this.set('denied');
  }

  /** Re-open the banner from the footer so the visitor can change their decision. */
  reopen() {
    this.bannerOpen.set(true);
  }

  private set(next: 'granted' | 'denied') {
    this.state.set(next);
    this.bannerOpen.set(false);
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage unavailable (private mode) — the choice holds for this session only.
      }
    }
  }

  private read(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
