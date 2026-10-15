import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PryContainer, PryEyebrow, PryMeshBackdrop, PrySection } from '../../ds';
import { PryReveal } from '../../shared/reveal/reveal';
import { SeoService } from '../../core/seo.service';

/**
 * Impresszum (Imprint). The provider identification required of Hungarian websites by the
 * e-commerce act (Ekertv. 4. §). Shares the ÁSZF stylesheet (`terms-*` classes). English slug
 * (`/imprint`), Hungarian body.
 */
@Component({
  selector: 'pry-imprint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryContainer, PryEyebrow, PryMeshBackdrop, PrySection, PryReveal, RouterLink],
  templateUrl: './imprint.html',
  styleUrl: '../terms/terms.scss',
})
export class Imprint {
  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.imprint.title:Impresszum — Pryma Solutions`,
      description: $localize`:@@seo.imprint.desc:A pryma-solutions.hu weboldal üzemeltetőjének és tárhelyszolgáltatójának adatai.`,
      path: '/imprint',
    });
  }
}
