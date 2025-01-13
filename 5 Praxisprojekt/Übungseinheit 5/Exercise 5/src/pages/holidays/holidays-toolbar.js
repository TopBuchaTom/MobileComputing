import { LitElement, html, css } from 'lit';
import { languageService as L, routerService } from '../../global/app-services';

export class HolidaysToolbar extends LitElement {
  static get properties() {
    return {
      allYears: { type: Object, state: false },
      selectedYear: { type: String, state: true }
    };
  }

  static styles = css`
    ion-item {
      --border-width: 0;
      --inner-border-width: 0;
    }

    ion-select {
      min-height: auto;
    }
  `;

  render() {
    return html`
      <ion-item>
        <ion-select value=${this.selectedYear} @ionChange=${ (e) =>this._dispatchSelectionChangedEvent(e.detail.value) }
          .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
          .label=${L.text.global.year_text}
          @click=${() => routerService.pushDialog()} 
          @ionDismiss=${() => routerService.popDialog()}>
          ${this.allYears?.map(year => html`
          <ion-select-option value=${year}>${year}</ion-select-option>
          `)}
        </ion-select>
      </ion-item>
    `;
  }

  _dispatchSelectionChangedEvent(year) {
    this.dispatchEvent(
      new CustomEvent('selectionChanged', {
          bubbles: true,
          composed: true,
          detail: { year },
      })
    );
  }
}

customElements.define("holidays-toolbar", HolidaysToolbar);
