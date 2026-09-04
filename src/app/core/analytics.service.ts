import { Injectable, PLATFORM_ID, effect, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
import { ConsentService } from './consent.service';

type Gtag = (...args: unknown[]) => void;

/**
 * GA4 via gtag.js, injected ONLY after consent is granted. Consent Mode v2 defaults are
 * denied in index.html; this flips analytics_storage to granted and loads the script the
 * first time. No-ops entirely when no measurement id is configured.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly doc = inject(DOCUMENT);
  private readonly consent = inject(ConsentService);

  private readonly id = environment.gaMeasurementId;
  private loaded = false;

  constructor() {
    if (!this.isBrowser || !this.id) return;
    // Load + enable the moment consent becomes granted (and never before).
    effect(() => {
      if (this.consent.state() === 'granted') this.enable();
    });
  }

  /** Send a manual page_view — SPA navigation does not fire one. Granted-only. */
  pageView(path: string) {
    if (!this.isBrowser || !this.id || this.consent.state() !== 'granted') return;
    this.gtag('event', 'page_view', { page_path: path });
  }

  private enable() {
    if (this.loaded) return;
    this.loaded = true;

    const s = this.doc.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${this.id}`;
    this.doc.head.appendChild(s);

    this.gtag('consent', 'update', { analytics_storage: 'granted' });
    this.gtag('js', new Date());
    this.gtag('config', this.id, { anonymize_ip: true });
  }

  private gtag(...args: unknown[]) {
    const w = this.doc.defaultView as (Window & { gtag?: Gtag }) | null;
    w?.gtag?.(...args);
  }
}
