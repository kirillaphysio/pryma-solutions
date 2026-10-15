import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { PryReveal, PryRevealGroup } from '../../shared/reveal/reveal';
import {
  PryButton,
  PryCard,
  PryCheckList,
  PryContainer,
  PryEyebrow,
  PryMeshBackdrop,
  PryMockupFrame,
  PrySection,
  PryTextLink,
} from '../../ds';

/**
 * Munkák (Work). A short portfolio: finished sites shown as product UI in a MockupFrame on the
 * mesh. One reference so far — only add a project once it is real and live.
 */
@Component({
  selector: 'pry-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PryButton,
    PryCard,
    PryCheckList,
    PryContainer,
    PryEyebrow,
    PryMeshBackdrop,
    PryMockupFrame,
    PrySection,
    PryTextLink,
    PryReveal,
    PryRevealGroup,
  ],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  private readonly base = inject(APP_BASE_HREF, { optional: true }) ?? '/';

  protected readonly kirillaShot =
    (this.base.endsWith('/') ? this.base : this.base + '/') + 'work/kirillareka.jpg';

  protected readonly kirillaItems = [
    $localize`:@@work.kirilla.item1:Egyéni kezelések és online programok külön oldalon`,
    $localize`:@@work.kirilla.item2:Interaktív „Hol fáj?” testtérkép`,
    $localize`:@@work.kirilla.item3:Blog és esettanulmányok`,
    $localize`:@@work.kirilla.item4:Hozzájáruláson alapuló sütikezelés`,
    $localize`:@@work.kirilla.item5:Élesítés után is nálam van a karbantartás`,
  ];

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.work.title:Munkák — Pryma Solutions`,
      description: $localize`:@@seo.work.desc:Elkészült weboldalak a Pryma Solutionstől. Egyelőre egy referencia: egy budapesti gyógytornász-fizioterapeuta személyes weboldala.`,
      path: '/work',
    });
  }
}
