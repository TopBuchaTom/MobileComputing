import { LitElement, html } from 'lit';

export class EventsPage extends LitElement {
  render() {
    return html`
      <ion-content>
        <page-content>
          Liste der Events
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("events-page", EventsPage);
