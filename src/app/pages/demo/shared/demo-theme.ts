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

/** color-mix helper: `pct`% of `color` mixed into `other`. */
export function mix(color: string, other: string, pct: number): string {
  return `color-mix(in srgb, ${color} ${pct}%, ${other})`;
}

/**
 * Full-page skin: remaps the Pryma semantic tokens on :root to a demo's palette (with
 * !important) so the whole outer shell — nav, footer, rail, buttons, backgrounds — adopts
 * the selected demo's look, mirroring the design system's `skinCss`. Injected as a <style>
 * while a demo is open and removed on exit. The demo inside the iframe is a separate
 * document and is unaffected; it keeps its own `--d-*` theme.
 */
export function demoSkinCss(t: DemoTheme): string {
  const a = t.accent;
  const ink = t.ink;
  const mute = t.mute;
  return (
    ':root{' +
    `color-scheme:${t.dark ? 'dark' : 'light'};` +
    `--surface-void:${t.bg2} !important;--surface-page:${t.bg} !important;--surface-raised:${t.bg2} !important;` +
    `--surface-card:${t.card} !important;--surface-card-solid:${t.card} !important;--surface-inset:${tint(ink, 5)} !important;` +
    `--surface-accent:${tint(a, 10)} !important;--surface-glass:${tint(ink, 4)} !important;` +
    `--surface-nav:${mix(t.bg, 'transparent', 88)} !important;--surface-chrome:${tint(ink, 5)} !important;` +
    `--surface-featured:${a} !important;` +
    `--text-hi:${ink} !important;--text-body:${ink} !important;--text-mute:${mute} !important;--text-faint:${mute} !important;` +
    `--text-on-accent:${t.onAccent} !important;--text-link:${a} !important;--text-link-hover:${mix(a, ink, 78)} !important;--text-neon:${a} !important;` +
    `--action-primary:${a} !important;--action-primary-hover:${mix(a, ink, 88)} !important;--action-primary-press:${mix(a, ink, 76)} !important;` +
    `--action-secondary:${tint(a, 12)} !important;--action-secondary-hover:${tint(a, 20)} !important;` +
    `--action-outline:${a} !important;--action-outline-hover:${mix(a, ink, 80)} !important;` +
    `--focus-ring:${a} !important;--focus-halo:${tint(a, 18)} !important;` +
    `--line-hairline:${t.lineSoft} !important;--line-strong:${t.line} !important;--line-neon:${tint(a, 45)} !important;--line-cyan:${tint(a, 35)} !important;--line-accent:${tint(a, 30)} !important;` +
    `--pink-500:${a} !important;--pink-400:${a} !important;--cyan-400:${a} !important;--cyan-300:${a} !important;--violet-400:${a} !important;` +
    `--tone-violet-fg:${a} !important;--tone-violet-chip:${tint(a, 10)} !important;--tone-violet-line:${tint(a, 28)} !important;` +
    `--tone-pink-fg:${a} !important;--tone-pink-chip:${tint(a, 10)} !important;--tone-pink-line:${tint(a, 28)} !important;` +
    `--tone-cyan-fg:${a} !important;--tone-cyan-chip:${tint(a, 10)} !important;--tone-cyan-line:${tint(a, 28)} !important;` +
    '--glow-pink-sm:none !important;--glow-pink-md:none !important;--glow-pink-lg:none !important;--glow-cyan-sm:none !important;--glow-cyan-md:none !important;--glow-violet-md:none !important;--glow-text-pink:none !important;--glow-text-cyan:none !important;' +
    `--elev-inset-neon:inset 0 0 0 1px ${tint(a, 34)} !important;` +
    `--grad-mesh-pink:radial-gradient(60% 70% at 18% 12%,${tint(a, 14)} 0%,transparent 68%) !important;` +
    `--grad-mesh-violet:radial-gradient(58% 62% at 82% 26%,${tint(a, 10)} 0%,transparent 70%) !important;` +
    `--grad-mesh-cyan:radial-gradient(52% 55% at 50% 96%,${tint(a, 8)} 0%,transparent 72%) !important;` +
    `--grad-hero:linear-gradient(180deg,${t.bg} 0%,${t.bg2} 100%) !important;` +
    `--grad-fade-page:linear-gradient(180deg,transparent 0%,${t.bg} 82%) !important;` +
    `--grad-brand:linear-gradient(96deg,${a} 0%,${mix(a, ink, 70)} 100%) !important;` +
    `--grad-neon-text:linear-gradient(92deg,${a} 0%,${mix(a, ink, 70)} 100%) !important;` +
    `--grid-line:${tint(a, 12)} !important;` +
    `--selection-bg:${tint(a, 28)} !important;--selection-fg:${ink} !important;` +
    '}'
  );
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
