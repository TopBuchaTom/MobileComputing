import { LitElement, html } from 'lit';
import { DateUtil } from '../../utils/date-util';

export class HolidaysList extends LitElement {
  static get properties() {
    return {
      allYearsWithHolidays: { type: Object, state: false },
      selectedYear: { type: String, state: false }
    };
  }

  render() {
    return this.allYearsWithHolidays?.[this.selectedYear]?.map(([monthName, monthDates]) => html`
      <ion-item>
        <h2>${monthName}</h2>
      </ion-item>
      ${monthDates.map(([dateName, dateDetails]) => html`
        <ion-item class="ion-no-padding">
          <div style="width: 180px; padding-right: 20px; white-space: pre-line">
            ${DateUtil.toShortDateString(dateDetails.datum)}            
          </div>
          <ion-label style="white-space: pre-line">
            ${dateName}
          </ion-label>
        </ion-item>
      `)}
    `);
  }
}

customElements.define("holidays-list", HolidaysList);
