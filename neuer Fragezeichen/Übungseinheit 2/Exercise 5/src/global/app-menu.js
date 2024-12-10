import { LitElement, html, css } from 'lit';
import { routerService, languageService as L, settingsService } from './app-services';
import { homeOutline, settingsOutline, informationCircleOutline } from "ionicons/icons";
import { IndexPage } from '../pages/index/index-page';
import { SettingsPage } from '../pages/settings/settings-page';
import { AboutPage } from '../pages/about/about-page';

export class AppMenu extends LitElement {
  static get properties() {
    return {
      contentId: { type: String, state: false },
      _language: { type: String, state: false },
      _swipemenu: { type: String, state: false }
    };
  }

  static styles = css`
    ion-content {
      --background: var(--ion-toolbar-background);
    }
  `;

  render() {
    // language must be rendered so that when language is changed the menu is re-rendered

    return html`
     <ion-menu side="start" menu-id="first" content-id=${this.contentId} .swipeGesture=${this._swipemenu || settingsService.getDefaultSwipemenu()}
      @ionWillOpen=${() => routerService.pushDialog()} @ionDidClose=${() => routerService.popDialog(null, true)}>
      <ion-content>
        <div style="display: none">${this._language}</div>
        <ion-list>
          <ion-menu-toggle>
            <ion-router-link href="/#/${IndexPage.name}">
              <ion-item>
                <ion-icon icon=${homeOutline} slot="start"></ion-icon>
                <ion-label>${L.text.menu.overview_link}</ion-label>
              </ion-item>
            </ion-router-link>
            <br/>
            <ion-router-link href="/#/${SettingsPage.name}">
              <ion-item>
                <ion-icon icon=${settingsOutline} slot="start"></ion-icon>
                <ion-label>${L.text.menu.settings_link}</ion-label>
              </ion-item>
            </ion-router-link>
            <ion-router-link href="/#/${AboutPage.name}">
              <ion-item>
                <ion-icon icon=${informationCircleOutline} slot="start"></ion-icon>
                <ion-label>${L.text.menu.about_link}</ion-label>
              </ion-item>
            </ion-router-link>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    `;
  }

  closeMenu() {
    this.shadowRoot?.querySelector("ion-menu")?.close();
  }

  updateLanguage(language) {
    this._language = language;
  }

  updateSwipemenu(swipemenu) {
    this._swipemenu = swipemenu;
  }
}

customElements.define('app-menu', AppMenu);
