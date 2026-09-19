import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PryContainer, PryEyebrow, PryMeshBackdrop, PrySection } from '../../ds';
import { PryReveal } from '../../shared/reveal/reveal';
import { SeoService } from '../../core/seo.service';

/**
 * Általános Szerződési Feltételek (Terms & Conditions). A static legal page: mesh hero with the
 * effective date, then the numbered clauses in a single narrow reading column. Content is fixed,
 * reviewed copy — do not rewrite it (see CLAUDE.md copy rules). English slug (`/terms`), Hungarian
 * body, per PLAN §5.
 */
@Component({
  selector: 'pry-terms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryContainer, PryEyebrow, PryMeshBackdrop, PrySection, PryReveal],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  /** Effective date, shown in the hero and reused in the SEO description. */
  protected readonly effective = '2026. 09. 19.';

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.terms.title:ÁSZF — Pryma Solutions`,
      description: $localize`:@@seo.terms.desc:A pryma-solutions.hu weboldal használatára vonatkozó Általános Szerződési Feltételek: az elérhető szolgáltatások, a szerzői jog, az adatkezelés és a záró rendelkezések.`,
      path: '/terms',
    });
  }
}
