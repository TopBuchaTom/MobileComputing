import { LitElement, html } from 'lit';
import { routerService, organizationService, languageService as L } from "../../global/app-services";
import { callOutline, mailOutline } from 'ionicons/icons';

export class OrganizationsDetailsPage extends LitElement {
  static get properties() {
    return {
      _organization: { type: Object, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    await this._updateOrganization(false);
  }

  render() {
    return html`
      <ion-header>
        <page-header title=${L.text.organization.details_header}></page-header>
      </ion-header>
      <ion-content>
        <page-content renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updateOrganization(true); e.detail.complete(); }}>
          <ion-card>
            <ion-card-header>
              <ion-card-title>${this._organization?.name}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <address>
                <p>${this._organization?.street} ${this._organization?.suite}</p>            
                <p>${this._organization?.zipcode} ${this._organization?.city}</p>            
              </address>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-title>${L.text.organization.details_contact_header}</ion-card-title>
              <ion-card-subtitle>${this._organization?.name}</ion-card-subtitle>

              ${this._organization?.email ? html`
              <ion-fab vertical="top" horizontal="end">
                <ion-fab-button href="mailto:${this._organization?.email}" target="_blank">
                  <ion-icon icon=${mailOutline}></ion-icon>
                </ion-fab-button>
              </ion-fab>
              ` : ""}
            </ion-card-header>
            <ion-card-content>
              ${this._organization?.phone ? html`
              <ion-fab vertical="bottom" horizontal="end">
                <ion-fab-button href="tel:${this._organization?.phone}" target="_blank">
                  <ion-icon icon=${callOutline}></ion-icon>
                </ion-fab-button>
              </ion-fab>
              ` : ""}
              <p>${this._organization?.website}</p>
              <p>${this._organization?.email}</p>
              <p>${this._organization?.phone}</p>
            </ion-card-content>
          </ion-card>          
        </page-content>
      </ion-content>
      <ion-footer>
        <page-footer .timestamp=${this._organization?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updateOrganization(false);
  }

  async _updateOrganization(update) {
    try {
      this._organization = await organizationService.getOrganization(
        routerService.getParameter("name"), update);
    }
    finally {
      if (update && !organizationService.hasLastFetchError()) {
        routerService.openToast(L.text.global.dialog_update_header);
      }
    }   
  }
}

customElements.define('organizations-details-page', OrganizationsDetailsPage);
