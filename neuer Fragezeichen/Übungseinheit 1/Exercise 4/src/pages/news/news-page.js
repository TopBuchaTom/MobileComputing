import { LitElement, html } from 'lit';
import './news-toolbar';
import './news-header';
import './news-list';
import { newsService, routerService, languageService as L } from '../../global/app-services';

export class NewsPage extends LitElement {
  static get properties() {
    return {
      _webNews: { type: String, state: true },
      _pressNews: { type: String, state: true },
      _currentCategory: { type: String, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    await Promise.all([
      this._updateNews(false, "web"),
      this._updateNews(false, "press")
    ]);

    this._updateCategory("web");
  }

  render() {
    if (!this._currentCategory)
      return;

    return html`
      <ion-content><div id="top"></div>
        <page-content renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updateNews(true, this._currentCategory); e.detail.complete(); }}>
          <div style="${this._currentCategory == "web" ? "" : "display: none"}">
            <news-list .news=${this._webNews}></news-list>
          </div>
          <div style="${this._currentCategory == "press" ? "" : "display: none"}">
            <news-list .news=${this._pressNews}></news-list>
          </div>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    return html`
      <ion-header>
        <page-header title=${L.text.news.pageheader}>
          <news-header
            @webClicked=${() => routerService.open(newsService.getWebNewsLink(), "_blank")}
            @pressClicked=${() => routerService.open(newsService.getPressNewsLink(), "_blank")}>
          </news-header>
        </page-header>
        <page-toolbar>
          <news-toolbar
            .selectedCategory=${this._currentCategory ?? "press"}
            @selectionChanged=${(e) => this._updateCategory(e.detail)}>
          </news-toolbar>
        </page-toolbar>
      </ion-header>
    `;
  }

  renderFooter() {
    return html`
      <ion-footer>
        <page-footer .timestamp=${this._currentCategory == "web" ? this._webNews?.__cache : this._pressNews?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updateNews(false, this._currentCategory);
  }

  async _updateNews(update, category) {
    try {
      if (category == "web")
        this._webNews = await newsService.getWebNews(update);
      else
        this._pressNews = await newsService.getPressNews(update);
    }
    finally {
      if (update)
        this.dispatchEvent(
          new CustomEvent('tabFooterChanged', { bubbles: true, composed: true, detail: this.renderFooter() })
        );

      if (update && !newsService.hasLastFetchError())
        routerService.openToast(L.text.global.dialog_update_header);
    }  
  }

  _updateCategory(category) {
    this._currentCategory = category;

    this.shadowRoot?.querySelector("#top")?.scrollIntoView();

    this.dispatchEvent(
      new CustomEvent('tabHeaderChanged', { bubbles: true, composed: true, detail: this.renderHeader() })
    );

    this.dispatchEvent(
      new CustomEvent('tabFooterChanged', { bubbles: true, composed: true, detail: this.renderFooter() })
    );
  }
}

customElements.define("news-page", NewsPage);
