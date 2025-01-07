import { LitElement, html } from 'lit';
import { routerService, personsService, languageService as L } from "../../global/app-services";
import { callOutline, mailOutline } from 'ionicons/icons';

export class PersonsDetailsPage extends LitElement {
  static get properties() {
    return {
      _person: { type: Object, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    await this._updatePerson(false);
  }

  render() {
    return html`
      <ion-header>
        <page-header title=${L.text.persons.details_header}></page-header>
      </ion-header>
      <ion-content>
        <page-content renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updatePerson(true); e.detail.complete(); }}>
          <ion-card>
            <ion-card-header>
              <ion-card-title>${this._person?.name}</ion-card-title>
              <ion-card-subtitle>${this._person?.company?.name}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <address>
                <p>${this._person?.address?.street} ${this._person?.address?.suite}</p>            
                <p>${this._person?.address?.zipcode} ${this._person?.address?.city}</p>            
              </address>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-title>${L.text.persons.details_contact_header}</ion-card-title>
              <ion-card-subtitle>${this._person?.company?.name}</ion-card-subtitle>

              ${this._person?.email ? html`
              <ion-fab vertical="top" horizontal="end">
                <ion-fab-button href="mailto:${this._person?.email}" target="_blank">
                  <ion-icon icon=${mailOutline}></ion-icon>
                </ion-fab-button>
              </ion-fab>
              ` : ""}
            </ion-card-header>
            <ion-card-content>
              ${this._person?.phone ? html`
              <ion-fab vertical="bottom" horizontal="end">
                <ion-fab-button href="tel:${this._person?.phone}" target="_blank">
                  <ion-icon icon=${callOutline}></ion-icon>
                </ion-fab-button>
              </ion-fab>
              ` : ""}
              <p>${this._person?.email}</p>
              <p>${this._person?.phone}</p>
            </ion-card-content>
          </ion-card>          
        </page-content>
      </ion-content>
      <ion-footer>
        <page-footer .timestamp=${this._person?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updatePerson(false);
  }

  async _updatePerson(update) {
    try {
      this._person = await personsService.getPersonByName(
        routerService.getParameter("name"), update);
    }
    finally {
      if (update && !personsService.hasLastFetchError()) {
        routerService.openToast(L.text.global.dialog_update_header);
      }
    }   
  }
}

customElements.define("persons-details-page", PersonsDetailsPage);
