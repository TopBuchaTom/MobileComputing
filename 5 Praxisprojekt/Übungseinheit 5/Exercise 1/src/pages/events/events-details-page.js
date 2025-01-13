import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { routerService, eventsService, languageService as L } from "../../global/app-services";
import { openOutline } from 'ionicons/icons';

export class EventsDetailsPage extends LitElement {
  static get properties() {
    return {
      _event: { type: Object, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    this._event = await eventsService.getEventsDetails(
      routerService.getParameter("id"));
  }

  render() {
    return html`
      <ion-header>
        <page-header title=${L.text.events.details_header}></page-header>
      </ion-header>
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>${this._event?.title}</ion-card-title>
            <ion-card-subtitle>
              ${L.text.events.date_text}: ${this._event?.date}, ${this._event?.time}<br/>
              ${L.text.events.category_text}: ${this._event?.category}<br/>
              ${L.text.events.week_text}: ${this._event?.week}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            ${unsafeHTML(this._event?.description)}
            <ion-fab horizontal="end">
              <ion-fab-button href="${this._event?.url}" target="_blank">
                <ion-icon icon=${openOutline}></ion-icon>
              </ion-fab-button>
            </ion-fab>
            <br/><br/><br/>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
  }
}

customElements.define("events-details-page", EventsDetailsPage);
