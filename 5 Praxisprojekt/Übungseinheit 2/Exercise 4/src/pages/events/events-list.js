import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { EventsDetailsPage } from './events-details-page';

export class EventsList extends LitElement {
  static get properties() {
    return {
      events: { type: Object, state: false },
    };
  }

  render() {
    return this.events?.map(entry => html`
      <ion-item class="ion-no-padding"
        href="#/${EventsDetailsPage.name}?id=${entry.id}">
        <div style="width: 120px">
            <ion-note>${entry.date}</ion-note><br/>
            ${entry.time} Uhr<br/>
        </div>
        <ion-label style="overflow: hidden; ">
          <span>
          ${unsafeHTML(entry.title)}
          </span>
        </ion-label>
      </ion-item>
    `);
  }
}

customElements.define("events-list", EventsList);
