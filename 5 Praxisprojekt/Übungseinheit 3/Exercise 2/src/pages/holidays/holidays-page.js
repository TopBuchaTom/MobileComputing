import { LitElement, html } from 'lit';
import { holidaysService } from '../../global/app-services';

export class HolidaysPage extends LitElement {
  static get properties() {
    return {
      _holidays: { type: Object, state: true },
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    this._holidays = await holidaysService.getDates();
  }
  
  render() {  
    if (!this._holidays) return;

    return html`
      <ion-content>
        <page-content>
          <ol>
          ${Object.entries(this._holidays).map(([year, details]) => html`
            <li>
              ${year}
              <ol>
                ${details.map(([month, dates]) => html`
                <li>
                ${month}
                <ol>
                  ${dates.map(([day, {datum: date}]) => html`
                  <li>${day} - ${date}</li>
                  `)}
                </ol>
                </li>
                `)}
              </ol>
            </li>
            
              `)}  
          </ol>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("holidays-page", HolidaysPage);
