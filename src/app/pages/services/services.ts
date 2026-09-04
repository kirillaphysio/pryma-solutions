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
  PryTextLink,
} from '../../ds';

@Component({
  selector: 'pry-services',
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
    PryTextLink,
    PryReveal,
    PryRevealGroup,
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.services.title:Szolgáltatások — Pryma Solutions`,
      description: $localize`:@@seo.services.desc:Arculat, weboldal és marketing alapok egy kézből. Három tipikus csomag fix áron, őszinte határidőkkel — nézd meg, mit tudok elvállalni a vállalkozásodnak.`,
      path: '/services',
      image: '/og/services.png',
    });
  }

  protected readonly pkg1 = [
    $localize`:@@svc.pkg1.item1:Egy oldal, mobilra optimalizálva`,
    $localize`:@@svc.pkg1.item2:Kapcsolatfelvételi űrlap`,
    $localize`:@@svc.pkg1.item3:Domain és élesítés beállítva`,
  ];
  protected readonly pkg2 = [
    $localize`:@@svc.pkg2.item1:3–6 aloldal`,
    $localize`:@@svc.pkg2.item2:Szerkeszthető tartalom`,
    $localize`:@@svc.pkg2.item3:Alap keresőoptimalizálás`,
  ];
  protected readonly pkg3 = [
    $localize`:@@svc.pkg3.item1:Logó és színvilág`,
    $localize`:@@svc.pkg3.item2:Tipográfia és használati útmutató`,
    $localize`:@@svc.pkg3.item3:A kész weboldal az új arculattal`,
  ];
  protected readonly good = [
    $localize`:@@svc.good.item1:Egy bemutatkozó oldal jellemzően 2–3 hét, összetettebb oldal 4–6 hét.`,
    $localize`:@@svc.good.item2:A szöveget közösen rakjuk össze, nem kell készen küldened.`,
    $localize`:@@svc.good.item3:Ha nincs fotód, mutatok megoldást arra is.`,
    $localize`:@@svc.good.item4:Élesítés után egy hónapig javítom, ami menet közben derül ki.`,
  ];
}
