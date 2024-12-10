import { LitElement, html } from 'lit';

export class HolidaysPage extends LitElement {
  render() {  
    return html`
      <ion-content>
        <page-content>
          Holidays
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("holidays-page", HolidaysPage);
