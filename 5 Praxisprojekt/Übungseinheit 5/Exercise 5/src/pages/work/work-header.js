import { LitElement, html } from 'lit';
import { addOutline, trashOutline } from 'ionicons/icons';

export class WorkHeader extends LitElement {
  render() {
    return html`
      <ion-buttons>
        <ion-button @click=${() => this._dispatchWorklistHeaderEvent("addClicked")}>
          <ion-icon icon=${addOutline} slot="icon-only"></ion-icon>
        </ion-button>
        <ion-button @click=${() => this._dispatchWorklistHeaderEvent("clearClicked")}>
          <ion-icon icon=${trashOutline} slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }

  _dispatchWorklistHeaderEvent(event) {
    this.dispatchEvent(
      new CustomEvent(event, { bubbles: true, composed: true, detail: null })
    );
  }
}

customElements.define('work-header', WorkHeader);
