import { LitElement, html } from 'lit';
import './events-list';
import './events-toolbar';
import { eventsService, routerService, languageService as L } from '../../global/app-services';
import { globeOutline } from 'ionicons/icons';

export class EventsPage extends LitElement {
  static get properties() {
    return {
      _events: { type: Object, state: true },
      _selectedCategory: { type: String, state: true },
      _categories: { type: Object, state: true },
      _selectedWeek: { type: String, state: true },
      _weeks: { type: Object, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    await this._updateEvents(false,
      routerService.getParameter("category") ?? "",
      routerService.getParameter("week") ?? "");
  }

  render() {
    return html`
      <ion-content>
        <page-content renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updateEvents(true, this._selectedCategory, this._selectedWeek); e.detail.complete(); }}>
          <events-list .events=${this._events} .category=${this._selectedCategory} .week=${this._selectedWeek}></events-list>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    return html`
      <ion-header>
        <page-header title=${L.text.events.pageheader}>
          <ion-buttons>
            <ion-button @click=${() => routerService.open(eventsService.getEventsLink(), "_blank")}>
              <ion-icon icon=${globeOutline} slot="icon-only"></ion-icon>
            </ion-button>
          </ion-buttons>
        </page-header>
        <page-toolbar .itemLayout=${false}>
          <events-toolbar .selectedCategory=${this._selectedCategory} .allCategories=${this._categories ?? []}
            .selectedWeek=${this._selectedWeek} .allWeeks=${this._weeks ?? []}
            @selectionChanged=${(e) => this._updateCategoryAndWeeks(e.detail.category, e.detail.week)}></events-toolbar>
        </page-toolbar>
      </ion-header>
    `;
  }

  renderFooter() {
    return html`
      <ion-footer>
        <page-footer .timestamp=${this._events?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updateEvents(false, this._selectedCategory, this._selectedWeek);
  }

  _updateHeader() {
    this.dispatchEvent(new CustomEvent('tabHeaderChanged', { bubbles: true, composed: true, detail: this.renderHeader() }));
  }

  _updateCategoryAndWeeks(category, week) {
    this._selectedCategory = routerService.setParameter("category", category);
    this._selectedWeek = routerService.setParameter("week", week);
    this._updateHeader();
  }

  async _updateEvents(update, category, week) {
    try {
      this._events = await eventsService.getEvents(update);

      if (this._events) {
        this._categories = Array.from(new Set(this._events.map(event => event.category)));
        this._selectedCategory = category;
        this._weeks = Array.from(new Set(this._events.map(event => event.week)));
        this._selectedWeek = week;
  
        this.dispatchEvent(new CustomEvent('tabHeaderChanged', { bubbles: true, composed: true, detail: this.renderHeader() }));
      }
    }
    finally {
      this.dispatchEvent(new CustomEvent('tabFooterChanged', { bubbles: true, composed: true, detail: this.renderFooter() }));

      if (update && !eventsService.hasLastFetchError())
        routerService.openToast(L.text.global.dialog_update_header);
    }    
  }
}

customElements.define("events-page", EventsPage);
