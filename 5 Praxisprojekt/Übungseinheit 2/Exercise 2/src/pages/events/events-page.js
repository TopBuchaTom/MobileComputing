import { LitElement, html } from 'lit';
import { eventsService } from '../../global/app-services';

export class EventsPage extends LitElement {
  static get properties() {
    return {
      _events: { type: Object, state: true },
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    this._events = await eventsService.getEvents();
  }


  render() {
    if (!this._events) return;

    return html`
      <ion-content>
        <page-content>
          <ul>
          ${this._events.map(event => html`
            <li>${event.title}</li>            
          `)}
          </ul>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("events-page", EventsPage);
