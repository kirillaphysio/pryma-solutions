import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Centres content in the 1240px rail with the responsive container padding. */
@Component({
  selector: 'pry-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: { class: 'pry-container' },
  styles: `
    :host {
      display: block;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-pad);
    }
  `,
})
export class PryContainer {}
