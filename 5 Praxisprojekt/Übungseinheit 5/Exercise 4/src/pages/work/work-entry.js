import { chevronForwardOutline, ellipsisHorizontal, ellipsisVertical, trash } from 'ionicons/icons';
import { LitElement, html } from 'lit';
import { DateUtil } from '../../utils/date-util';

export class WorkEntry extends LitElement {
  static get properties() {
    return {
      entry: { type: Object, state: false },
      selectionMode: { type: Boolean, state: false }
    };
  }

  render() {
    if (!this.entry) return;

    return html`
      <ion-item-sliding @click=${(e) => e.target.closest("ion-item-sliding").close()}>
        <ion-item button class="ion-no-padding" @click=${this._toggleSelectionAndDispatchClickEvent}>
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
          <ion-item-option color="primary" @click=${() => this._dispatchWorklistEntryEvent("entryDetailsClicked", this.entry)}>
            <ion-icon .icon=${ ({ ios: ellipsisHorizontal, md: ellipsisVertical }) } slot="start"></ion-icon>
            Details
          </ion-item-option>
          ${this._renderDeleteOption()}
        </ion-item-options>
      </ion-item-sliding>
    `;
  }

  _toggleSelectionAndDispatchClickEvent() {
    this.entry.selected = !this.entry.selected;
    this.entry = {...this.entry};

    this._dispatchWorklistEntryEvent("entryClicked", this.entry);
  }

  _renderDeleteOption() {
    if (!this.selectionMode)
      return html`
        <ion-item-option color="danger" @click=${() => this._dispatchWorklistEntryEvent("entryDeleteClicked", this.entry)}>
          <ion-icon icon=${trash} slot="icon-only"></ion-icon>
        </ion-item-option>
      `;
  }

  _dispatchWorklistEntryEvent(type, details) {
    this.dispatchEvent(
      new CustomEvent(type, {
          bubbles: true,
          composed: true,
          detail: details
      })
    );
  }
}

customElements.define('work-entry', WorkEntry);
