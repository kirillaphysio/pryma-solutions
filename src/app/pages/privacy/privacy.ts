import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryContainer, PryEyebrow, PryMeshBackdrop, PrySection } from '../../ds';
import { PryReveal } from '../../shared/reveal/reveal';
import { SeoService } from '../../core/seo.service';

/**
 * Adatkezelési tájékoztató (Privacy notice). A static legal page, laid out exactly like the ÁSZF
 * and sharing its stylesheet (`terms-*` classes). English slug (`/privacy`), Hungarian body.
 */
@Component({
  selector: 'pry-privacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryContainer, PryEyebrow, PryMeshBackdrop, PrySection, PryReveal, RouterLink],
  templateUrl: './privacy.html',
  styleUrl: '../terms/terms.scss',
})
export class Privacy {
  /** Effective date, shown in the hero. */
  protected readonly effective = '2026. 10. 15.';

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.privacy.title:Adatkezelési tájékoztató — Pryma Solutions`,
      description: $localize`:@@seo.privacy.desc:Milyen személyes adatokat kezelünk a pryma-solutions.hu oldalon, milyen célból és jogalappal, meddig, és milyen jogaid vannak.`,
      path: '/privacy',
    });
  }
}
