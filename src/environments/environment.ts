// Runtime environment. The GA4 measurement ID is a public value, safe to commit.
// Leave it empty to keep analytics fully disabled — AnalyticsService no-ops until it is set.
export const environment = {
  production: true,
  /** GA4 id, e.g. 'G-XXXXXXXXXX'. Empty = analytics off (no gtag.js is ever loaded). */
  gaMeasurementId: '',
  /** Absolute origin used for canonical + OG URLs. */
  siteOrigin: 'https://pryma.solutions',
};
