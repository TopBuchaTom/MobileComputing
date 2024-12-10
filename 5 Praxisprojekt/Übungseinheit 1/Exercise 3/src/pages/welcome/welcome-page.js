import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { routerService, languageService as L } from '../../global/app-services';
import { SettingsPage } from '../settings/settings-page';

export class WelcomePage extends LitElement {
  render() {
    return html`
      <ion-content>
        <page-content textContent=${true}>
          <h2>${L.text.welcome.pageheader}</h2>
          ${unsafeHTML(L.text.welcome.detailstext)}
          <ion-fab vertical="bottom" horizontal="end">
            <ion-button @click=${() => routerService.push(SettingsPage.name)}>
              ${L.text.welcome.setup_button}
            </ion-button>
          </ion-fab>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("welcome-page", WelcomePage);
