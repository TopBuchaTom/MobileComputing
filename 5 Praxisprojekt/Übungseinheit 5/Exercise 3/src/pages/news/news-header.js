import { html, LitElement } from 'lit';
import {  globeOutline, listCircleOutline } from 'ionicons/icons';

export class NewsHeader extends LitElement {
  render() {
    return html`
      <ion-buttons>
      <ion-button @click=${() => this._dispatchNewsHeaderEvent("webClicked")}>
          <ion-icon icon=${globeOutline} slot="icon-only"></ion-icon>
        </ion-button>
        <ion-button @click=${() => this._dispatchNewsHeaderEvent("pressClicked")}>
          <ion-icon icon=${listCircleOutline} slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }

  _dispatchNewsHeaderEvent(event) {
    this.dispatchEvent(
      new CustomEvent(event, { bubbles: true, composed: true, detail: null })
    );
  }
}

customElements.define("news-header", NewsHeader);
