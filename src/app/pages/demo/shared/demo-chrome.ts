import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DemoArt } from './demo-art';
import { demoThemeStyle, type DemoTheme } from './demo-theme';

export interface DemoNavLink {
  label: string;
  /** Absolute app route, e.g. "/demo/szalon" or "/demo/szalon/pricing". */
  path: string;
  /** Exact-match active highlighting (use for the home link). */
  exact?: boolean;
}

export interface DemoFooterBlock {
  title: string;
  /** Lines rendered stacked; use "\n" inside a line for a soft break. */
  lines: string[];
}

/**
 * Shared chrome for a demo mini-site: theme-driven header (brand, internal nav, CTA) and
 * footer, wrapping the page body via <ng-content>. One component serves all three demos —
 * their distinct character comes entirely from the `--d-*` theme variables (font, weight,
 * case, radius, colour), not from bespoke markup. Presentational only.
 */
@Component({
  selector: 'pry-demo-chrome',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="dc-head">
      <div class="dc-head__in">
        <a class="dc-brand" [routerLink]="homePath()">{{ theme().brand }}</a>
        <nav class="dc-nav" aria-label="Demó menü">
          @for (l of links(); track l.path) {
            <a
              class="dc-nav__link"
              [routerLink]="l.path"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: !!l.exact }"
              >{{ l.label }}</a
            >
          }
        </nav>
        <a class="dc-cta" [routerLink]="ctaPath()" [fragment]="ctaFragment()">{{
          ctaLabel()
        }}</a>
      </div>
    </header>

    <ng-content />

    <footer class="dc-foot">
      <div class="dc-foot__in">
        @for (b of footerBlocks(); track b.title) {
          <div class="dc-foot__col">
            <span class="dc-foot__title">{{ b.title }}</span>
            @for (line of b.lines; track line) {
              <span class="dc-foot__line">{{ line }}</span>
            }
          </div>
        }
      </div>
      <div class="dc-foot__legal">{{ legal() }}</div>
    </footer>
  `,
  host: {
    class: 'dc',
    '[style]': 'vars()',
  },
  styleUrl: './demo-chrome.scss',
})
export class DemoChrome {
  readonly theme = input.required<DemoTheme>();
  readonly homePath = input.required<string>();
  readonly links = input<DemoNavLink[]>([]);
  readonly ctaLabel = input('Kapcsolat');
  readonly ctaPath = input.required<string>();
  /** Optional in-page fragment for the CTA, e.g. "kapcsolat" (anchor scrolling is enabled). */
  readonly ctaFragment = input<string | undefined>(undefined);
  readonly footerBlocks = input<DemoFooterBlock[]>([]);
  readonly legal = input('');

  protected vars() {
    return demoThemeStyle(this.theme());
  }
}

/** Re-export so pages import theme + art + chrome from one module. */
export { DemoArt };
