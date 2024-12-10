import { LitElement, html } from 'lit';
import { eventsService } from '../../global/app-services';
import './events-list';

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
            <events-list .events=${this._events}></events-list>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("events-page", EventsPage);
