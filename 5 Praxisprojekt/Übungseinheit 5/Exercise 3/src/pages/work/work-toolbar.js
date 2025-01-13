import { LitElement, html } from 'lit';
import { languageService as L } from '../../global/app-services';

export class WorkToolbar extends LitElement {
  static get properties() {
    return {
      selectedGroup: { type: String, state: false }
    };
  }

  render() {
    return html`
      <ion-chip ?outline=${this.selectedGroup == "date"} @click=${() => this._dispatchSelectionChanged('date')}>
        <ion-label>${L.text.work.day_tabheader}</ion-label>
      </ion-chip>
      <ion-chip ?outline=${this.selectedGroup == "location"} @click=${() => this._dispatchSelectionChanged('location')}>
        <ion-label>${L.text.work.location_tabheader}</ion-label>
      </ion-chip>
    `;
  }

  _dispatchSelectionChanged(data) {
    this.dispatchEvent(
      new CustomEvent('selectionChanged', {
          bubbles: true,
          composed: true,
          detail: data,
      })
    );
  }
}

customElements.define('work-toolbar', WorkToolbar);
