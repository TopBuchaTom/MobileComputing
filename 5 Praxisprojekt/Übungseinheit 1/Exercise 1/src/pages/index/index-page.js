import { LitElement, html } from 'lit';
import { settingsService, languageService as L } from '../../global/app-services';
import { newspaperOutline } from "ionicons/icons";
import { NewsPage } from '../news/news-page';

export class IndexPage extends LitElement {
  static get properties() {
    return {
      _selectedTabHeader: { type: String, state: true },
      _selectedTabFooter: { type: String, state: true }
    };
  }

  render() {   
    return html`
      <page-tabheader>${this._selectedTabHeader}</page-tabheader>
      <ion-content>
        <page-tabs
          .tabs=${this._getTabs()} initialTab=${settingsService.getDefaultStarttab()}
          @tabHeaderChanged=${(e) => this._selectedTabHeader = e.detail}
          @tabFooterChanged=${(e) => this._selectedTabFooter = e.detail}>
        </page-tabs>
      </ion-content>
      <page-tabfooter>${this._selectedTabFooter}</page-tabfooter>
    `;
  }

  visibilityUpdate(visible) {
    this.shadowRoot?.querySelector("page-tabs")
      ?.shadowRoot?.querySelector("ion-tabs")
      ?.querySelector("ion-tab:not(.tab-hidden)")
      ?.querySelector(".ion-page")
      ?.visibilityUpdate?.(visible);
  }

  navigationUpdate() {
    this.shadowRoot?.querySelector("page-tabs")?.updateSelectedTab();
  }

  _getTabs() {
    return [
      {
          icon: newspaperOutline,
          label: L.text.index.news_tabheader,
          component: NewsPage.tagName
      }
    ];
  }
}

customElements.define("index-page", IndexPage);
