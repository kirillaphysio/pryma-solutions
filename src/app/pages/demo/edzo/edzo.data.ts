import { TRAINER_THEME } from '../shared/demo-theme';
import type { DemoNavLink, DemoFooterBlock } from '../shared/demo-chrome';

/**
 * Fixture content for the personal-trainer demo mini-site — illustrative showcase copy
 * (noindex), not Pryma's own marketing copy, so intentionally outside the i18n catalog.
 */

export const TRAINER = TRAINER_THEME;
export const TRAINER_HOME = '/demo/edzo';
export const TRAINER_PROGRAMS = '/demo/edzo/programs';

export const TRAINER_NAV: DemoNavLink[] = [
  { label: 'Kezdőlap', path: TRAINER_HOME, exact: true },
  { label: 'Programok', path: TRAINER_PROGRAMS },
];

export const TRAINER_FOOTER: DemoFooterBlock[] = [
  { title: 'Telefon', lines: ['+36 30 123 4567'] },
  { title: 'E-mail', lines: ['edzes@example.hu'] },
  { title: 'Helyszín', lines: ['Budapest · saját terem'] },
];

export const TRAINER_LEGAL =
  'Személyi edzés · példaoldal a Pryma Solutions bemutatójához';

export const TRAINER_STATS: [string, string][] = [
  ['1:1', 'edzés, nem csoport'],
  ['12', 'hetes felépítés'],
  ['60', 'perc alkalmanként'],
  ['H–Szo', 'reggel 6-tól'],
];

export interface TrainerProgram {
  name: string;
  meta: string;
  body: string;
  tags: string[];
  more: string[];
}
export const TRAINER_PROGRAM_LIST: TrainerProgram[] = [
  {
    name: 'Alapozó',
    meta: '12 hét',
    body: 'Ha évek óta nem edzettél. Technika, terhelés lassan felépítve, hetente két alkalom.',
    tags: ['kezdő', '2×/hét'],
    more: [
      'Mozgásvizsgálat az első alkalommal',
      'Saját testsúlyos alapok, majd súlyzó',
      'Heti visszamérés, írásos terv',
    ],
  },
  {
    name: 'Erő',
    meta: 'haladó',
    body: 'Ha már van rutinod, de megállt a fejlődés. Számok, terv, kontrollált progresszió.',
    tags: ['haladó', '3×/hét'],
    more: [
      'Erőfelmérés guggolás, nyomás, húzás',
      'Blokkokra bontott, számolt terhelés',
      'Technikavideó-elemzés',
    ],
  },
  {
    name: 'Visszatérés',
    meta: 'rehab után',
    body: 'Gyógytorna után, orvosi javaslat mentén. Óvatos tempó, folyamatos visszajelzés.',
    tags: ['rehab', '1–2×/hét'],
    more: [
      'Egyeztetés a gyógytornásszal',
      'Fájdalomskála minden alkalommal',
      'Lassított tempó, sok kontroll',
    ],
  },
];

export const TRAINER_STEPS: [string, string, string][] = [
  [
    '01',
    'Felmérés',
    'Mozgásvizsgálat és egy beszélgetés arról, mit szeretnél elérni. Ez ingyenes és nem kötelez semmire.',
  ],
  [
    '02',
    'Terv',
    'Kapsz egy 12 hetes vázlatot: mit, mikor, milyen terheléssel. Írásban, hogy vissza tudd olvasni.',
  ],
  [
    '03',
    'Edzés',
    'Heti alkalmak, közben rendszeres visszamérés. Ha valami nem működik, menet közben átalakítjuk.',
  ],
];

export interface TrainerPrice {
  name: string;
  price: string;
  body: string;
  hi: boolean;
}
export const TRAINER_PRICES: Record<'alkalmi' | 'berlet', TrainerPrice[]> = {
  alkalmi: [
    { name: '1 alkalom', price: '12 000 Ft', body: 'Ha csak ki akarod próbálni.', hi: false },
    {
      name: '8 alkalom',
      price: '88 000 Ft',
      body: 'A legtöbben ezt választják. Két hónap, heti egy edzés.',
      hi: true,
    },
    {
      name: 'Online terv',
      price: '24 000 Ft / hó',
      body: 'Havi terv, videós technikaellenőrzés.',
      hi: false,
    },
  ],
  berlet: [
    {
      name: 'Heti 1 alkalom',
      price: '44 000 Ft / hó',
      body: 'Négy edzés havonta, fix időpontban.',
      hi: false,
    },
    {
      name: 'Heti 2 alkalom',
      price: '82 000 Ft / hó',
      body: 'A felépített programokhoz ez az alap.',
      hi: true,
    },
    {
      name: 'Heti 2 + online',
      price: '99 000 Ft / hó',
      body: 'Edzések és a közbeni napok terve is.',
      hi: false,
    },
  ],
};
