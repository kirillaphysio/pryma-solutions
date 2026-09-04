import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Dynamic list content — localised in TS per the DS convention.
  protected readonly whyItems = [
    $localize`:@@home.why.item1:Egy kapcsolattartó a teljes munka alatt`,
    $localize`:@@home.why.item2:Fix ár, a munka megkezdése előtt egyeztetve`,
    $localize`:@@home.why.item3:Az oldal a tiéd: a fájlok és a hozzáférések nálad maradnak`,
  ];
}
