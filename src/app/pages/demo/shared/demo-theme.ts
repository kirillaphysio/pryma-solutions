/**
 * Demo mini-site themes. Each demo is a standalone example site with its own identity —
 * these tokens are applied as `--d-*` CSS custom properties on the demo root so the shared
 * chrome and every page adopt the look. Values come from the design handoff's demo kit
 * (default mood per profession). Fonts use system fallback stacks only: the privacy rule
 * bans third-party font embeds, and the demos still read as distinct through colour, radius,
 * weight and case.
 */
export interface DemoTheme {
  /** Route segment / stable id: 'szalon' | 'edzo' | 'asztalos'. */
  id: string;
  /** Brand line shown in the header. */
  brand: string;
  dark: boolean;
  bg: string;
  bg2: string;
  ink: string;
  mute: string;
  line: string;
  lineSoft: string;
  card: string;
  accent: string;
  onAccent: string;
  /** Corner radius, in px (0 / 2 / 4 across the three demos). */
  radius: string;
  fontDisplay: string;
  fontBody: string;
  fontMono: string;
  displayWeight: number;
  displayTransform: 'none' | 'uppercase';
  displayTracking: string;
}

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, 'Cascadia Code', 'Segoe UI Mono', Consolas, monospace";

export const SALON_THEME: DemoTheme = {
  id: 'szalon',
  brand: 'Fodrászat & Kozmetika',
  dark: false,
  bg: '#faf6f0',
  bg2: '#f1e9dd',
  ink: '#2b2320',
  mute: '#6f635a',
  line: 'rgba(43,35,32,.15)',
  lineSoft: 'rgba(43,35,32,.08)',
  card: '#ffffff',
  accent: '#c0596f',
  onAccent: '#ffffff',
  radius: '2px',
  fontDisplay: SERIF,
  fontBody: SANS,
  fontMono: MONO,
  displayWeight: 500,
  displayTransform: 'none',
  displayTracking: '-0.01em',
};

export const TRAINER_THEME: DemoTheme = {
  id: 'edzo',
  brand: 'Személyi edzés',
  dark: true,
  bg: '#0e0f11',
  bg2: '#16181b',
  ink: '#f5f6f4',
  mute: '#9aa0a3',
  line: 'rgba(255,255,255,.13)',
  lineSoft: 'rgba(255,255,255,.07)',
  card: '#191c1f',
  accent: '#c7f04a',
  onAccent: '#0e0f11',
  radius: '4px',
  fontDisplay: SANS,
  fontBody: SANS,
  fontMono: MONO,
  displayWeight: 800,
  displayTransform: 'uppercase',
  displayTracking: '-0.025em',
};

export const WORKSHOP_THEME: DemoTheme = {
  id: 'asztalos',
  brand: 'Asztalosmunka',
  dark: false,
  bg: '#f7f2e9',
  bg2: '#ece2d1',
  ink: '#221c14',
  mute: '#6d6353',
  line: 'rgba(34,28,20,.18)',
  lineSoft: 'rgba(34,28,20,.09)',
  card: '#fffdf7',
  accent: '#a8762a',
  onAccent: '#ffffff',
  radius: '0px',
  fontDisplay: SANS,
  fontBody: SANS,
  fontMono: MONO,
  displayWeight: 600,
  displayTransform: 'none',
  displayTracking: '-0.03em',
};

/** color-mix helper: `pct`% of the accent over transparent (a soft tint). */
export function tint(color: string, pct: number): string {
  return `color-mix(in srgb, ${color} ${pct}%, transparent)`;
}

/** Build a cssText string of the `--d-*` custom properties to bind on a demo root element. */
export function demoThemeStyle(t: DemoTheme): string {
  const vars = demoThemeVars(t);
  return Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
}

/** Build the `--d-*` custom-property map to bind on a demo root element. */
export function demoThemeVars(t: DemoTheme): Record<string, string> {
  return {
    '--d-bg': t.bg,
    '--d-bg2': t.bg2,
    '--d-ink': t.ink,
    '--d-mute': t.mute,
    '--d-line': t.line,
    '--d-line-soft': t.lineSoft,
    '--d-card': t.card,
    '--d-accent': t.accent,
    '--d-accent-soft': tint(t.accent, 10),
    '--d-accent-line': tint(t.accent, 28),
    '--d-on-accent': t.onAccent,
    '--d-radius': t.radius,
    '--d-font-display': t.fontDisplay,
    '--d-font-body': t.fontBody,
    '--d-font-mono': t.fontMono,
    '--d-display-weight': String(t.displayWeight),
    '--d-display-transform': t.displayTransform,
    '--d-display-tracking': t.displayTracking,
    'color-scheme': t.dark ? 'dark' : 'light',
  };
}
