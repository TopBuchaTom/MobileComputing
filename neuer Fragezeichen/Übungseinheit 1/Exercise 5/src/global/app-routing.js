import { LitElement, html } from 'lit';

import { AboutPage } from "../pages/about/about-page";
import { IndexPage } from "../pages/index/index-page";
import { NewsPage } from "../pages/news/news-page";
import { SettingsPage } from "../pages/settings/settings-page";
import { WelcomePage } from "../pages/welcome/welcome-page";
import { settingsService } from "./app-services";

export class AppRouting extends LitElement {
  static PAGES = [
    WelcomePage,
    IndexPage,
    NewsPage,
    SettingsPage,
    AboutPage,
  ];

  render() {
    // Initial parameters supplied to start page are supplied to routing to enable deep linking
    // such as index.html?tab=work-page (used by notifications to directly open specific tab)
    return html`
      <ion-router>
        <ion-route-redirect
          from="/"
          to=${settingsService.isSetupFinished() ? `${IndexPage.name}${document.location.search}` : WelcomePage.name}>
        </ion-route-redirect>

        ${AppRouting.PAGES.map(page => html`<ion-route url=${page.name} component=${page.tagName}></ion-route>`)}
      </ion-router>
    `;
  }
}

customElements.define('app-routing', AppRouting);
