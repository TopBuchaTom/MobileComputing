import { LitElement, html, css } from 'lit';
import { routerService, settingsService, colorschemeService, languageService, languageService as L } from '../../global/app-services';
import { arrowForwardOutline, trashOutline } from 'ionicons/icons';
import { IndexPage } from '../index/index-page';
import { WelcomePage } from '../welcome/welcome-page';
import { NewsPage } from '../news/news-page';

export class SettingsPage extends LitElement {
  static get properties() {
    return {
      _languages: { type: Object, state: true },
      _colorschemes: { type: Object, state: true },

      _starttab: { type: Object, state: true },
      _statusbar: { type: Object, state: true },
      _swipemenu: { type: Object, state: true },

      _language: { type: String, state: true },
      _colorscheme: { type: String, state: true }
    };
  }

  static styles = css`
    ion-item.header {
      --inner-border-width: 0;
    }

    ion-select {
      min-height: auto;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();

    this._languages = languageService.getLanguages();
    this._colorschemes = colorschemeService.getColorschemes();

    this._starttab = settingsService.getDefaultStarttab();
    this._statusbar = settingsService.getDefaultStatusbar();
    this._swipemenu = settingsService.getDefaultSwipemenu();

    this._language = settingsService.getLanguage();
    this._colorscheme = settingsService.getColorscheme();
  }

  render() {
    return html`
      <ion-header>
        <page-header title=${L.text.settings.pageheader}>
          <ion-buttons>
            <ion-button @click=${this._presentResetSettingsAlertConfirm}>
              <ion-icon icon=${trashOutline} slot="icon-only"></ion-icon>
            </ion-button>
          </ion-buttons>
        </page-header>
      </ion-header>
      <ion-content>
        <page-content>
            <ion-item class="header">
              <h2>${L.text.settings.systems_header}</h2>
            </ion-item>
            <ion-item>
              <ion-select value=${this._language} @ionChange=${(e) => this._changeLanguage(e.detail.value)}
                .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
                .label=${L.text.settings.systems_language_header}
                @click=${() => routerService.pushDialog()}
                @ionDismiss=${() => routerService.popDialog()}>
                <ion-select-option value="">${L.text.global.automatic_text}</ion-select-option>
                ${this._languages?.map(language => html`
                <ion-select-option value=${language.code}>${language.name}</ion-select-option>
                `)}
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-select value=${this._colorscheme} @ionChange=${(e) => this._changeColorscheme(e.detail.value)}
                .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
                .label=${L.text.settings.systems_colorscheme_header}
                @click=${() => routerService.pushDialog()}
                @ionDismiss=${() => routerService.popDialog()}>
                <ion-select-option value="">${L.text.global.automatic_text}</ion-select-option>
                ${this._colorschemes?.map(colorscheme => html`
                <ion-select-option value=${colorscheme.code}>${colorscheme.name}</ion-select-option>
                `)}
              </ion-select>
            </ion-item>

            <ion-item class="header">
              <h2>${L.text.settings.customize_header}</h2>
            </ion-item>
            <ion-item>
              <ion-select value=${this._starttab} @ionChange=${(e) => this._changeStarttab(e.detail.value)}
                .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}
                .label=${L.text.settings.customize_starttab_header}
                @click=${() => routerService.pushDialog()}
                @ionDismiss=${() => routerService.popDialog()}>
                <ion-select-option value=${NewsPage.name}>${L.text.index.news_tabheader}</ion-select-option>                
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-toggle value="statusbar"
                ?checked=${this._statusbar}
                @ionChange=${(e) => this._changeStatusbar(e.currentTarget.checked)}>
                ${L.text.settings.customize_statusbar_header}
              </ion-toggle>
            </ion-item>
            <ion-item>
              <ion-toggle value="swipemenu"
                ?checked=${this._swipemenu}
                @ionChange=${(e) => this._changeSwipemenu(e.currentTarget.checked)}>
                ${L.text.settings.customize_swipemenu_header}
              </ion-toggle>
            </ion-item>          
         
          </page-content><ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-button @click=${this._showNextTabOrFinishSettings}><ion-icon icon=${arrowForwardOutline}></ion-icon></ion-button>
          </ion-fab>
          <br/><br/><br/><br/>
      </ion-content>
    `;
  }

  _changeTab(e) {
    const tab = e?.detail?.value || "notifications";

    if (tab != this._currentSegment) {
      this._currentSegment = tab;

      routerService.setQuery(`tab=${this._currentSegment}`);
    }
  }

  _changeLanguage(language) {
    if (language == settingsService.getLanguage()) return;

    this._language = settingsService.setLanguage(language);
    languageService.applyLanguage(language);

    // Update menu
    document.querySelector("app-menu").updateLanguage(this._language);
  }

  _changeColorscheme(colorscheme) {
    if (colorscheme == settingsService.getColorscheme()) return;

    this._colorscheme = settingsService.setColorscheme(colorscheme);
    colorschemeService.applyColorscheme(colorscheme);
  }

  _changeStarttab(starttab) {
     this._starttab = settingsService.setDefaultStarttab(starttab);
  }

  _changeStatusbar(statusbar) {
    this._statusbar = settingsService.setDefaultStatusbar(statusbar);
 }

  _changeSwipemenu(swipemenu) {
    this._swipemenu = settingsService.setDefaultSwipemenu(swipemenu);

    // Update menu
    document.querySelector("app-menu").updateSwipemenu(this._swipemenu);
  }

  _showNextTabOrFinishSettings() {
    settingsService.setSetupFinished(true);
    routerService.push(IndexPage.name);
  }

  _presentResetSettingsAlertConfirm() {
    return routerService.openConfirm(L.text.settings.reset_header,
      L.text.settings.reset_details,
      L.text.global.button_yes_text, L.text.global.button_no_text,
      async () => {
        settingsService.resetSettings();
        routerService.push(WelcomePage.name);
      }
    );
  }
}

customElements.define("settings-page", SettingsPage);
