import { LitElement, html } from 'lit';
import { routerService } from '../../global/app-services';
import { SettingsPage } from '../settings/settings-page';

export class WelcomePage extends LitElement {
  render() {
    return html`
      <ion-content>
        <page-content textContent=${true}>
          <h2>Willkommen!</h2>
          <p>Die <b>GovernmentApp</b> ist der tägliche Begleiter für
              Mitarbeiter/-innen in der öff. Verwaltung.</p>
          <p>Features sind u.a.:</p>
          <ul>
            <li>Persönliche Arbeitsliste</li>
            <li>Flexibles Hinzufügen von Arbeitsorten über
              Organisationen oder Personen</li>
            <li>Alle wichtigen News, Events und Feiertage
              auf einen Blick</li>
            <li>Tägliche Updates zu Änderungen und manuelle Updates
              durch Swipe der Arbeitsliste nach unten</li>
          </ul>
          <p>Richten Sie die App als Nächstes ein, um direkt loszustarten!</p>
          <ion-fab vertical="bottom" horizontal="end">
            <ion-button @click=${() => routerService.push(SettingsPage.name)}>
              Einrichten
            </ion-button>
          </ion-fab>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("welcome-page", WelcomePage);
