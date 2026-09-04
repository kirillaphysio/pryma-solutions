import { WORKSHOP_THEME } from '../shared/demo-theme';
import type { DemoNavLink, DemoFooterBlock } from '../shared/demo-chrome';

/**
 * Fixture content for the carpenter demo mini-site — illustrative showcase copy (noindex),
 * not Pryma's own marketing copy, so intentionally kept out of the i18n catalog.
 */

export const WORKSHOP = WORKSHOP_THEME;
export const WORKSHOP_HOME = '/demo/asztalos';
export const WORKSHOP_WORK = '/demo/asztalos/work';

export const WORKSHOP_NAV: DemoNavLink[] = [
  { label: 'Kezdőlap', path: WORKSHOP_HOME, exact: true },
  { label: 'Munkák', path: WORKSHOP_WORK },
];

export const WORKSHOP_FOOTER: DemoFooterBlock[] = [
  { title: 'Telefon', lines: ['+36 20 987 6543'] },
  { title: 'E-mail', lines: ['muhely@example.hu'] },
  { title: 'Műhely', lines: ['Pest megye\nH–P 7:00–16:00'] },
];

export const WORKSHOP_LEGAL =
  'Asztalosmunka · példaoldal a Pryma Solutions bemutatójához';

export interface WorkItem {
  n: string;
  title: string;
  body: string;
  img: string;
}
export const WORK_ITEMS: WorkItem[] = [
  {
    n: '01',
    title: 'Konyhabútor',
    body: 'Felmérés a helyszínen, gyártás műhelyben, beépítés egy nap alatt. Gépesítés egyeztetve.',
    img: 'konyha · beépítés után',
  },
  {
    n: '02',
    title: 'Gardrób és előszoba',
    body: 'Beépített szekrény ferde falra, tetőtérbe, lépcső alá is. Tolóajtós és nyílóajtós kivitel.',
    img: 'gardrób · tolóajtó',
  },
  {
    n: '03',
    title: 'Fürdőszobabútor',
    body: 'Vízálló lapból, mosdó alá szabva, felül fali szekrénnyel.',
    img: 'fürdőszobabútor · mosdó',
  },
  {
    n: '04',
    title: 'Egyedi asztalok',
    body: 'Tömörfa lappal, fém vagy fa lábbal, méretre.',
    img: 'étkezőasztal · tömörfa',
  },
];

export const WORK_PROCESS: [string, string][] = [
  ['Felmérés', 'Kimegyek, lemérem a helyet, és átbeszéljük, mire használod majd. Ez díjmentes.'],
  ['Terv és ajánlat', 'Rajz és fix árajánlat, tételesen. Ebben már benne van az anyag és a beépítés is.'],
  ['Gyártás', 'Műhelyben készül el, jellemzően 3–5 hét. Közben fotót küldök az állásról.'],
  ['Beépítés', 'Egy-két nap a helyszínen. Utána takarítva, a hulladékot elviszem.'],
];

export const WORK_SPECIES: [string, string][] = [
  ['Tölgy', 'front, lakkozva'],
  ['Bükk', 'gőzölt, munkalaphoz'],
  ['Kőris', 'nyílt pórusú, világos'],
  ['Dió', 'betétek, olajozva'],
  ['Festett MDF', 'matt, RAL szerint'],
];

export const WORK_SPEC: [string, string][] = [
  ['Korpusz', 'bútorlap, 18 mm'],
  ['Front', 'festett MDF vagy tömör tölgy'],
  ['Vasalat', 'csillapított pántok, teleláthatós fiók'],
  ['Munkalap', 'kompakt lemez vagy tömörfa'],
  ['Garancia', '5 év a szerkezetre'],
];
