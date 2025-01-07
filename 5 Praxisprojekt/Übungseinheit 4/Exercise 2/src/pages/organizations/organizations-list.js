import { openOutline } from 'ionicons/icons';
import { LitElement, html } from 'lit';

export class OrganizationsList extends LitElement {
  static get properties() {
    return {
      organizations: { type: Array, state: false },
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
      ${this.organizations?.map(organization => html`
      <ion-card>
        <ion-card-header>
          <ion-card-title>
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
      `;
  }
  
  _selectOrganizationDetails(organization) {
    this.dispatchEvent(
      new CustomEvent('organizationDetailsClicked', { bubbles: true, composed: true, detail: organization })
    );
  }
}

customElements.define("organizations-list", OrganizationsList);
