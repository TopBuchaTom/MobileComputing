import { LitElement, html } from 'lit';
import { routerService } from '../../app-services';

export class PageTabs extends LitElement {
  static get properties() {
    return {
      tabs: { type: Object, state: false },
      initialTab: { type: String, state: false }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._selectedTab = this._getCurrentTab();
    this._ionTabsDidChangeInitialized = false;
  }

  updateSelectedTab() {
    const currentTab = this._getCurrentTab();

    // Check if current tab is available on current page
    if (this.tabs.some(tab => tab.component == currentTab))
      this.shadowRoot?.querySelector("ion-tabs")?.select(currentTab);
  }

  render() {
    // Render tab page (this gets called a second time by ionTabsDidChange which is required because
    // initial rendering is required to be able to call renderHeader of tab page)

    // tab header based on ion-header cannot be rendered within tab page such as work-page and must be rendered outside
    // of ion-tabs because otherwise height of tab content is not correctly calculated and scrolling to bottom does not work

    return html`
      <ion-tabs @ionTabsDidChange=${this._ionTabsDidChange}>
        <ion-tab-bar slot="bottom">
          ${this._renderTabButtons(this.tabs, this._selectedTab)}
        </ion-tab-bar>
        ${this._renderTabPages(this.tabs, this._selectedTab)}
      </ion-tabs>
    `;
  }

  _renderTabButtons(tabs, selectedTab) {
    // Calculate html for tab buttons
    return tabs.map(tab => html`
      <ion-tab-button tab="${tab.component}" .selected=${tab.component == selectedTab}>
        <ion-icon icon=${tab.icon}></ion-icon>
        <ion-label>${tab.label}</ion-label>
      </ion-tab-button>
    `);
  }

  _renderTabPages(tabs, selectedTab) {
    // Move selected tab page to first position because this tab is shown by ionic
    const selectedTabIndex = tabs.findIndex(tab => tab.component == selectedTab);
    const sortedTabs = selectedTabIndex >= 0
      ? [tabs[selectedTabIndex], ...tabs.slice(0, selectedTabIndex), ...tabs.slice(selectedTabIndex+1)]
      : tabs;

    // Caluclate html for tab pages
    return sortedTabs.map(tab => html`
      <ion-tab tab="${tab.component}" component=${tab.component}></ion-tab>
    `);
  }

  async _ionTabsDidChange(e) {
    const tab = e?.detail?.tab;

    this._dispatchTabChangedEvent(tab);   
    this._dispatchTabHeaderChangedEvent(tab);
    this._dispatchTabFooterChangedEvent(tab);

    if (!this._ionTabsDidChangeInitialized) {
      this._ionTabsDidChangeInitialized = true;
      return;
    }

    if (tab != this._getCurrentTab())
      routerService.setQuery(`tab=${tab}`);
  }

  _getCurrentTab() {
    return routerService.getParameter("tab") ?? this.initialTab ?? this.tabs[0].component;
  }

  _getTabHeader(tab) {
    const tabPage = Array.from(this.shadowRoot.querySelectorAll("ion-tab"))
      .find(t => t.tab == tab)?.firstChild;
          
    return tabPage?.renderHeader?.();
  }

  _getTabFooter(tab) {
    const tabPage = Array.from(this.shadowRoot.querySelectorAll("ion-tab"))
      .find(t => t.tab == tab)?.firstChild;
       
    return tabPage?.renderFooter?.();
  }

  _dispatchTabChangedEvent(tab) {
    this.dispatchEvent(
      new CustomEvent('tabChanged', {
          bubbles: true,
          composed: true,
          detail: tab
      })
    );
  }

  _dispatchTabHeaderChangedEvent(tab) {
    this.dispatchEvent(
      new CustomEvent('tabHeaderChanged', {
          bubbles: true,
          composed: true,
          detail: this._getTabHeader(tab)
      })
    );
  }

  _dispatchTabFooterChangedEvent(tab) {
    this.dispatchEvent(
      new CustomEvent('tabFooterChanged', {
          bubbles: true,
          composed: true,
          detail: this._getTabFooter(tab)
      })
    );
  }
}

customElements.define("page-tabs", PageTabs);
