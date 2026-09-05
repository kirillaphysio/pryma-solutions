// Generates the Open Graph share images (1200×630 PNG) into public/og/.
// Branded card rendered as SVG and rasterised with sharp (a dev-only tool). Run: `npm run og`.
// The copy is drawn from each page's reviewed title/description — nothing invented here.

import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og');

const W = 1200;
const H = 630;
const PAD = 90;

const C = {
  bg0: '#0a0720',
  bg1: '#0d0a24',
  pink: '#ff2e88',
  violet: '#9d5cff',
  cyan: '#38e1ff',
  hi: '#f4f2fb',
  mute: '#b3aed4',
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CARDS = [
  {
    name: 'home',
    title: 'Weboldal és arculat',
    subtitle: 'Arculat, weboldal és marketing alapok kis vállalkozásoknak.',
  },
  {
    name: 'services',
    title: 'Szolgáltatások',
    subtitle: 'Arculat, weboldal és marketing alapok — egy kézből.',
  },
  {
    name: 'contact',
    title: 'Kapcsolat',
    subtitle: 'Írd meg, mire lenne szükséged — fix ár, pár napon belül.',
  },
];

function svg({ title, subtitle }) {
  const font = "'Segoe UI', Arial, Helvetica, sans-serif";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.bg0}"/>
      <stop offset="1" stop-color="${C.bg1}"/>
    </linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.pink}"/>
      <stop offset="0.55" stop-color="${C.violet}"/>
      <stop offset="1" stop-color="${C.cyan}"/>
    </linearGradient>
    <radialGradient id="glowP" cx="0.16" cy="0.12" r="0.5">
      <stop offset="0" stop-color="${C.pink}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${C.pink}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowV" cx="0.9" cy="0.85" r="0.55">
      <stop offset="0" stop-color="${C.violet}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" fill="none" stroke="${C.violet}" stroke-opacity="0.10" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glowP)"/>
  <rect width="${W}" height="${H}" fill="url(#glowV)"/>

  <!-- wordmark -->
  <g transform="translate(${PAD}, 120)">
    <rect x="0" y="-26" width="10" height="40" rx="2" fill="url(#brand)"/>
    <text x="28" y="8" font-family="${font}" font-size="30" font-weight="800"
      letter-spacing="1" fill="${C.hi}">PRYMA</text>
    <text x="163" y="8" font-family="${font}" font-size="30" font-weight="800"
      letter-spacing="8" fill="${C.mute}">SOLUTIONS</text>
  </g>

  <!-- headline + subtitle -->
  <text x="${PAD}" y="360" font-family="${font}" font-size="88" font-weight="800"
    letter-spacing="-2" fill="${C.hi}">${esc(title)}</text>
  <text x="${PAD}" y="426" font-family="${font}" font-size="32" font-weight="400"
    fill="${C.mute}">${esc(subtitle)}</text>

  <!-- footer -->
  <rect x="${PAD}" y="524" width="72" height="6" rx="3" fill="url(#brand)"/>
  <text x="${PAD}" y="566" font-family="${font}" font-size="26" font-weight="600"
    letter-spacing="1" fill="${C.cyan}">pryma-solutions.hu</text>

  <!-- accent dots, bottom-right -->
  <g transform="translate(${W - PAD - 64}, 552)">
    <circle cx="0" cy="0" r="9" fill="${C.pink}"/>
    <circle cx="26" cy="0" r="9" fill="${C.violet}"/>
    <circle cx="52" cy="0" r="9" fill="${C.cyan}"/>
  </g>
</svg>`;
}

await mkdir(OUT, { recursive: true });
for (const card of CARDS) {
  const png = await sharp(Buffer.from(svg(card))).png().toBuffer();
  const file = join(OUT, `${card.name}.png`);
  await writeFile(file, png);
  console.log(`[og] wrote ${card.name}.png (${png.length} bytes)`);
}
