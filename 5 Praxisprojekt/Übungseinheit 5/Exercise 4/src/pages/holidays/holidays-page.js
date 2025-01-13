import { LitElement, html } from 'lit';
import './holidays-toolbar';
import './holidays-list';
import { holidaysService, routerService, languageService as L } from '../../global/app-services';
import { globeOutline } from 'ionicons/icons';

export class HolidaysPage extends LitElement {
  static get properties() {
    return {
      _allYearsWithHolidays: { type: Array, state: true },
      _selectedYear: { type: String, state: true },
      _allYears: { type: Object, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    await this._updateHolidays(false, null);
  }

  render() {
    if (!this._allYearsWithHolidays) return;
    
    return html`
      <ion-content>
        <page-content renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updateHolidays(true, this._selectedYear); e.detail.complete(); }}>
          <holidays-list .allYearsWithHolidays=${this._allYearsWithHolidays} .selectedYear=${this._selectedYear}></holidays-list>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    return html`
      <ion-header>
        <page-header title=${L.text.holidays.pageheader}>
          <ion-buttons>
            <ion-button @click=${() => routerService.open(holidaysService.getDatesLink(), "_blank")}>
              <ion-icon icon=${globeOutline} slot="icon-only"></ion-icon>
            </ion-button>
          </ion-buttons>
        </page-header>
        <page-toolbar .itemLayout=${false}>
          <holidays-toolbar .selectedYear=${this._selectedYear} .allYears=${this._allYears ?? []}
            @selectionChanged=${(e) => this._selectedYear = e.detail.year}></holidays-toolbar>
        </page-toolbar>
      </ion-header>
    `;
  }

  renderFooter() {
    return html`
      <ion-footer>
        <page-footer .timestamp=${this._allYearsWithHolidays?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updateHolidays(false, this._selectedYear);
  }

  async _updateHolidays(update, year) {
    try {
      this._allYearsWithHolidays = await holidaysService.getDates(update);

      if (this._allYearsWithHolidays) {
        this._allYears = Object.keys(this._allYearsWithHolidays);
        this._selectedYear = year ?? this._allYears?.[0];        
        
        this.dispatchEvent(
          new CustomEvent('tabHeaderChanged', { bubbles: true, composed: true, detail: this.renderHeader() })
        );
      }
    }
    finally {
      this.dispatchEvent(
        new CustomEvent('tabFooterChanged', { bubbles: true, composed: true, detail: this.renderFooter() })
      );

      if (update && !holidaysService.hasLastFetchError()) {
        routerService.openToast(L.text.global.dialog_update_header);
      }
    }
  }
}

customElements.define("holidays-page", HolidaysPage);
