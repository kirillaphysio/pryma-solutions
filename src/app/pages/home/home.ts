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
  PryFeatureTile,
  PryIcon,
  PryMeshBackdrop,
  PrySection,
  PrySectionHead,
  PryStepCard,
  PryTextLink,
} from '../../ds';

@Component({
  selector: 'pry-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PryButton,
    PryCard,
    PryCheckList,
    PryContainer,
    PryEyebrow,
    PryFeatureTile,
    PryIcon,
    PryMeshBackdrop,
    PrySection,
    PrySectionHead,
    PryStepCard,
    PryTextLink,
    PryReveal,
    PryRevealGroup,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.home.title:Pryma Solutions — weboldal és arculat`,
      description: $localize`:@@seo.home.desc:Fejlesztő és designer egy személyben. Arculat, weboldal és marketing alapok kis vállalkozásoknak — fix áron, egy kapcsolattartóval, két munkanapon belüli válasszal.`,
      path: '/',
      image: '/og/home.png',
    });
  }

  // Dynamic list content — localised in TS per the DS convention.
  protected readonly whyItems = [
    $localize`:@@home.why.item1:Egy kapcsolattartó a teljes munka alatt`,
    $localize`:@@home.why.item2:Fix ár, a munka megkezdése előtt egyeztetve`,
    $localize`:@@home.why.item3:Az oldal a tiéd: a fájlok és a hozzáférések nálad maradnak`,
  ];
}
