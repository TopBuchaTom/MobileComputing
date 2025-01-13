import { openOutline } from 'ionicons/icons';
import { LitElement, html } from 'lit';

export class OrganizationsList extends LitElement {
  static get properties() {
    return {
      organizations: { type: Array, state: false },
      selectionMode: { type: Boolean, state: false },
      selectedOrganization: { type: Object, state: true }
    };
  }  

  render() {
    // CSS for ion-card components is not included if conditional rendering is used,
    // so always include empty ion-card component to automatically include necessary css classes
    
    return html`
      <ion-card style="display: none">
        <ion-card-header></ion-card-header>
        <ion-card-content></ion-card-content>
      </ion-card>
      <ion-radio-group value=${this.selectedOrganization}>
      ${this.organizations?.map(organization => html`
      <ion-card @click=${() => this._selectOrganization(organization)}>
        <ion-card-header>
          <ion-card-title>
            ${this.selectionMode && this._renderRadiobutton(organization)}
            ${organization?.name}
          </ion-card-title>
          <ion-fab vertical="center" horizontal="end">            
            <ion-fab-button @click=${() => this._selectOrganizationDetails(organization)}>
              <ion-icon icon=${openOutline}></ion-icon>
            </ion-fab-button>
          </ion-fab>
        </ion-card-header>
        <ion-card-content>
          <address>
            <p>${organization.street} ${organization.suite}</p>            
            <p>${organization.zipcode} ${organization.city}</p>            
          </address>
        </ion-card-content>
      </ion-card>
    `)}
    </ion-radio-group>
      `;
  }

  _renderRadiobutton(organization) {
    return html`<ion-radio value=${organization?.name} aria-label=${organization?.name}></ion-radio>`;
  }

  _selectOrganization(organization) {
    this.dispatchEvent(
      new CustomEvent('selectedChanged', { bubbles: true, composed: true, detail: organization })
    );
  }

  _selectOrganizationDetails(organization) {
    this.dispatchEvent(
      new CustomEvent('organizationDetailsClicked', { bubbles: true, composed: true, detail: organization })
    );
  }
}

customElements.define("organizations-list", OrganizationsList);
