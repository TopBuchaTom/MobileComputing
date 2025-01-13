import { LitElement, html, css } from 'lit';
import { routerService, languageService as L, settingsService } from '../../../services/base-services';

export class PageFooter extends LitElement {
  static get properties() {
    return {
      timestamp: { type: Object, state: false },
    };
  }

  static styles = css`
    div {
      text-align: center; background-color: var(--ion-tab-bar-background)
    }
  `;

  render() {
    return settingsService.getDefaultStatusbar() ?  html`
      <div>
        <ion-note>
          ${L.text.global.retrieved_text}: ${this._getDate(this.timestamp?.lastUpdated)}
          ${(this.timestamp && this.timestamp.lastUpdated) ? html`
          [<ion-router-link @click=${this._presentCacheInfoAlert}>${L.text.global.details_text}</ion-router-link>]
          ` : html``}
        </ion-note>
      </div>
    ` : html``;
  }

  _getDate(timestampDate) {
    let cacheDate = "-";
    
    if (timestampDate) {
      const date = new Date(timestampDate);
      cacheDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    return cacheDate;
  }

  _presentCacheInfoAlert() {
    const service = this.timestamp.service;
    const info = this.timestamp.info;

    return routerService.openAlert(
      service,
      `
        ${L.text.global.update_info}:<br/> ${info}<br/><br/>
        ${L.text.global.update_last}:<br/> ${this._getDate(this.timestamp.lastUpdated)}<br/>
        <br/>
        ${L.text.global.update_next}:<br/> ${this._getDate(this.timestamp.nextUpdate)}<br/>
        ${L.text.global.update_details}
      `,
      L.text.global.button_yes_text,
      L.text.global.button_no_text,      
    );
  }
}

customElements.define("page-footer", PageFooter);
