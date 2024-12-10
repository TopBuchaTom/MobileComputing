import { LitElement, html, css } from 'lit';
import { languageService as L, routerService } from '../../global/app-services';

export class EventsToolbar extends LitElement {
  static get properties() {
    return {
      allCategories: { type: Object, state: false },
      selectedCategory: { type: String, state: true },
      allWeeks: { type: Object, state: false },
      selectedWeek: { type: String, state: true }
    };
  }

  static styles = css`
    ion-item { --border-width: 0; --inner-border-width: 0; }
    ion-select { min-height: auto; }
    ion-select::part(label) { display: none; }
  `;

  render() {
    return html`
        <ion-item>                      
            <ion-select value=${this.selectedWeek} @ionChange=${ (e) =>this._dispatchSelectionChangedEvent(this.selectedCategory, e.detail.value) }
              .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
              .label=${L.text.events.week_text}
              @click=${() => routerService.pushDialog()}
              @ionDismiss=${() => routerService.popDialog()}>
              <ion-select-option value="">${L.text.events.allweeks_text}</ion-select-option>
              ${this.allWeeks?.map(week => html`
              <ion-select-option value=${week}>${week}</ion-select-option>
              `)}
            </ion-select>
            <ion-select value=${this.selectedCategory} @ionChange=${ (e) =>this._dispatchSelectionChangedEvent(e.detail.value, this.selectedWeek) }
              .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
              .label=${L.text.events.category_text}
              @click=${() => routerService.pushDialog()}
              @ionDismiss=${() => routerService.popDialog()} labelPlacement="floating">
              <ion-select-option value="">${L.text.events.allcategories_text}</ion-select-option>
              ${this.allCategories?.map(category => html`
              <ion-select-option value=${category}>${category}</ion-select-option>
              `)}
            </ion-select>
        </ion-item>
    `;
  }

  _dispatchSelectionChangedEvent(category, week) {
    this.dispatchEvent(
      new CustomEvent('selectionChanged', {
          bubbles: true,
          composed: true,
          detail: { category, week },
      })
    );
  }
}

customElements.define("events-toolbar", EventsToolbar);
