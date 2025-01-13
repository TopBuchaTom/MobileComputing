import { LitElement, html } from 'lit';
import { routerService } from '../../../services/base-services';

export class PageContent extends LitElement {
  static get properties() {
    return {
      rendered: { type: Object, state: false },
      restoreScrollPosition: { type: Object, state: false },
      renderRefresher: { type: Object, state: false },
      textContent: { type: Object, state: false }
    };
  }

  constructor() {
    super();

    this.rendered = true;
    this.restoreScrollPosition = false;
    this.textContent = false;
  }

  async connectedCallback() {
    super.connectedCallback();

    if (this.renderRefresher)
      this._renderRefresher();

    if (this.restoreScrollPosition) {
      this.parentElement.scrollEvents = true;

      await this._loadScrollPosition();
    }
  }

  render() {
    return (this.rendered) ? html`
        <div id="content-top"></div>
        <div style=${this.textContent ? "padding: 30px" : ""}>
          <slot @scrollPositionUpdated=${this._saveScrollPosition} @scrollToTop=${this.scrollToTop}></slot>
        </div>
    ` : html``;
  }

  updateScrollPosition() {
    this._saveScrollPosition();
  }

  scrollToElement(elementId) {
    this.shadowRoot?.getElementById(elementId)?.scrollIntoView();
  }

  scrollToTop() {
    this.scrollToElement("content-top");
  }

  _renderRefresher() {
    const el = document.createElement("ion-refresher");
    el.addEventListener("ionRefresh", (e) => this._dispatchRefreshAction(e));
    el.slot = "fixed";
    el.innerHTML = `<ion-refresher-content></ion-refresher-content>`;

    // Avoid error in ion refresher  if user navigates fast
    setTimeout(() => this.parentElement.appendChild(el), 100);
  }

  async _loadScrollPosition() {
    const pos = routerService.getParameter("scrollPosition");
    
    await this.updateComplete;
    this.parentElement.scrollToPoint(undefined, pos);
  }

  _saveScrollPosition() {
    const scrollPosition = this.parentElement.detail.scrollTop;
    routerService.setParameter("scrollPosition", scrollPosition);
  }

  _dispatchRefreshAction(e) {
    this.dispatchEvent(new CustomEvent('refreshAction', { bubbles: true, composed: true, detail: e.target }));
  }
}

customElements.define("page-content", PageContent);
