import { LitElement, html } from 'lit';
import { languageService as L } from '../../global/app-services';

export class NewsToolbar extends LitElement {
  static get properties() {
    return {
      selectedCategory: { type: String, state: false }
    };
  }

  render() {
    return html`
      <ion-chip ?outline=${this.selectedCategory == "web"} @click=${() => this._dispatchSelectionChangedEvent('web')}>
        <ion-label>${L.text.news.general_tabheader}</ion-label>
      </ion-chip>
      <ion-chip ?outline=${this.selectedCategory == "press"} @click=${() => this._dispatchSelectionChangedEvent('press')}>
        <ion-label>${L.text.news.press_tabheader}</ion-label>
      </ion-chip>
    `;
  }

  _dispatchSelectionChangedEvent(group) {
    this.dispatchEvent(
      new CustomEvent('selectionChanged', {
          bubbles: true,
          composed: true,
          detail: group,
      })
    );
  }
}

customElements.define("news-toolbar", NewsToolbar);
