import { LitElement, html } from 'lit';
import { routerService } from '../../global/app-services';
import { SettingsPage } from '../settings/settings-page';

export class WelcomePage extends LitElement {
  render() {
    return html`
      <ion-content>
        <page-content textContent=${true}>
          GovernmentApp
          <ion-fab vertical="bottom" horizontal="end">
            <ion-button @click=${() => routerService.push(SettingsPage.name)}>Weiter</ion-button>
          </ion-fab>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("welcome-page", WelcomePage);
