import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../../core/seo.service';
import { PryReveal, PryRevealGroup } from '../../../shared/reveal/reveal';
import {
  PryButton,
  PryCard,
  PryContainer,
  PryEyebrow,
  PryMeshBackdrop,
  PryMockupFrame,
  PrySection,
  PryTextLink,
} from '../../../ds';

/**
 * Demo gallery — the one demo route that keeps the site shell. Three MockupFrames, each
 * iframing a demo mini-site's home. noindex: the demos are showcase fixtures, not content
 * we want ranking against the real pages.
 */
@Component({
  selector: 'pry-demo-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PryButton,
    PryCard,
    PryContainer,
    PryEyebrow,
    PryMeshBackdrop,
    PryMockupFrame,
    PrySection,
    PryTextLink,
    PryReveal,
    PryRevealGroup,
  ],
  templateUrl: './demo-gallery.html',
  styleUrl: './demo-gallery.scss',
})
export class DemoGallery {
  private readonly base = inject(APP_BASE_HREF, { optional: true }) ?? '/';
  private readonly sanitizer = inject(DomSanitizer);

  /** Same-origin app routes — safe to trust as iframe sources. */
  protected readonly srcSalon = this.frame('demo/szalon');
  protected readonly srcEdzo = this.frame('demo/edzo');
  protected readonly srcAsztalos = this.frame('demo/asztalos');

  private frame(path: string): SafeResourceUrl {
    const base = this.base.endsWith('/') ? this.base : this.base + '/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(base + path);
  }

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.demo.title:Demó — Pryma Solutions`,
      description: $localize`:@@seo.demo.desc:Három szakma, három szándékosan különböző stílus. Nézd meg élő példaoldalakon, milyen lehet a te weboldalad — fodrászat, személyi edzés és asztalosmunka.`,
      path: '/demo',
      noindex: true,
    });
  }
}
