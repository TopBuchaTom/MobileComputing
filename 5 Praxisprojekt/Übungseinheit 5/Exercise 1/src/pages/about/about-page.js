import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { languageService as L } from '../../global/app-services';
import { mailOutline, starOutline } from "ionicons/icons";

export class AboutPage extends LitElement {
  render() {
    return html`
      <ion-header>
        <page-header title=${L.text.about.pageheader}></page-header>
      </ion-header>
      <ion-content>
        <page-content textContent=${true}>
          ${unsafeHTML(L.text.about.detailstext)}
          <ion-button href=${L.text.about.feedback_url} target="_blank">
            <ion-icon icon=${mailOutline}></ion-icon>&nbsp;${L.text.about.feedback_button}
          </ion-button>
          <ion-button href=${L.text.about.rate_url} target="_blank">
            <ion-icon icon=${starOutline}></ion-icon>&nbsp;${L.text.about.rate_button}
          </ion-button>
        </page-content>
      </ion-content>
    `;
  }
}

customElements.define("about-page", AboutPage);
