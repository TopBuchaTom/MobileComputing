import { chevronForwardOutline, ellipsisHorizontal, ellipsisVertical, trash } from 'ionicons/icons';
import { LitElement, html } from 'lit';
import { DateUtil } from '../../utils/date-util';

export class WorkEntry extends LitElement {
  static get properties() {
    return {
      entry: { type: Object, state: false },
    };
  }

  render() {
    if (!this.entry) return;

    return html`
      <ion-item-sliding @click=${(e) => e.target.closest("ion-item-sliding").close()}>
        <ion-item button class="ion-no-padding">
          <div style="width: 120px">
            <ion-note>${DateUtil.toShortDateString(this.entry.date)}</ion-note><br/>
            ${this.entry.starttime} - ${this.entry.endtime}<br/>
          </div>
          <ion-label>
            <ion-note>${this.entry.location}, ${this.entry.room}</ion-note><br/>
            ${this.entry.title}
          </ion-label>
          <ion-icon icon=${chevronForwardOutline}></ion-icon>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option color="primary">
            <ion-icon .icon=${ ({ ios: ellipsisHorizontal, md: ellipsisVertical }) } slot="start"></ion-icon>
            Details
          </ion-item-option>
          <ion-item-option color="danger">
            <ion-icon icon=${trash} slot="icon-only"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    `;
  }
}

customElements.define('work-entry', WorkEntry);
