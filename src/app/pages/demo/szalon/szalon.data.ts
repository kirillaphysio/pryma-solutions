import { SALON_THEME } from '../shared/demo-theme';
import type { DemoNavLink, DemoFooterBlock } from '../shared/demo-chrome';

/**
 * Fixture content for the salon demo mini-site. This is illustrative example copy for a
 * showcase page (noindex), not Pryma's own reviewed marketing copy, so it is deliberately
 * kept out of the i18n catalog. No invented business name — a generic descriptor only.
 */

export const SALON = SALON_THEME;
export const SALON_HOME = '/demo/szalon';
export const SALON_PRICING = '/demo/szalon/pricing';

export const SALON_NAV: DemoNavLink[] = [
  { label: 'Kezdőlap', path: SALON_HOME, exact: true },
  { label: 'Árlista', path: SALON_PRICING },
];

export const SALON_FOOTER: DemoFooterBlock[] = [
  { title: 'Nyitvatartás', lines: ['H–P 9:00–18:00\nSzo 9:00–13:00'] },
  { title: 'Cím', lines: ['Belváros, főutca 12.\n1. emelet'] },
  { title: 'Elérhetőség', lines: ['+36 1 234 5678\nidopont@example.hu'] },
];

export const SALON_LEGAL =
  'Fodrászat & kozmetika · példaoldal a Pryma Solutions bemutatójához';

export interface SalonService {
  name: string;
  meta: string;
  img: string;
}
export const SALON_SERVICES: SalonService[] = [
  { name: 'Vágás és formázás', meta: '60 perc · 8 000 Ft-tól', img: 'vágás közben · közeli' },
  { name: 'Festés és melír', meta: '120 perc · 16 000 Ft-tól', img: 'festés · előtte-utána' },
  { name: 'Arckezelés', meta: '75 perc · 12 000 Ft-tól', img: 'kozmetikai kezelés' },
];

export const SALON_GALLERY: string[] = [
  'hajfestés · részlet',
  'szalonbelső · szék',
  'termékpolc',
];

export const SALON_ABOUT: string[] = [
  'Konzultáció minden új vendégnek',
  'Illatmentes termékek kérésre',
  'Kártyás fizetés',
];

/** [name, price] rows for the price list. */
export const SALON_PRICES: [string, string][] = [
  ['Női vágás, mosás, szárítás', '8 000 – 11 000 Ft'],
  ['Férfi vágás', '6 000 Ft'],
  ['Tőfestés', '12 000 Ft-tól'],
  ['Melír, fóliás', '18 000 Ft-tól'],
  ['Alap arckezelés', '12 000 Ft'],
  ['Szemöldökformázás', '3 500 Ft'],
];

export const SALON_QUOTES: [string, string][] = [
  [
    'Öt éve ide járok, és még soha nem kellett kétszer elmagyaráznom, mit szeretnék.',
    'Vendég · festés',
  ],
  ['Az időpont időpont: nem vártam, és nem is siettettek.', 'Vendég · arckezelés'],
];
