// Post-build: write sitemap.xml and a GitHub Pages SPA fallback (404.html) into the
// prerendered output. Run after `ng build`. Keep the route list in sync with app.routes.ts
// (the prerendered, indexable routes only — not the wildcard).
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'dist', 'pryma-solutions', 'browser');
const ORIGIN = 'https://pryma-solutions.hu';
const ROUTES = ['/', '/services', '/contact'];

if (!existsSync(OUT)) {
  console.error(`[sitemap] build output not found at ${OUT} — run "ng build" first.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${ORIGIN}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`,
).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
console.log(`[sitemap] wrote sitemap.xml with ${ROUTES.length} routes.`);

// GitHub Pages serves 404.html for unknown paths. Reuse the prerendered index so the app
// boots and the router renders the NotFound page for the requested URL.
const index = join(OUT, 'index.html');
if (existsSync(index)) {
  copyFileSync(index, join(OUT, '404.html'));
  console.log('[sitemap] wrote 404.html (SPA fallback).');
}
