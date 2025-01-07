import { LitElement, html } from 'lit';
import './organizations-list';
import { routerService, organizationService, languageService as L } from "../../global/app-services";
import { OrganizationsDetailsPage } from './organizations-details-page';

export class OrganizationsPage extends LitElement {
  static get properties() {
    return {
      _searchOrganization: { type: String, state: true },
      _organizations: { type: Array, state: true },
    };
  }

  constructor() {
    super();

    this._loadFilteredOrganizations(routerService.getParameter("organization"));
  }

  render() {  
    return html`
      <ion-content>
        <page-content restoreScrollPosition=${true}>
          <organizations-list .organizations=${this._organizations ?? []}
            @organizationDetailsClicked = ${e => this._showOrganizationDetails(e.detail)}></organizations-list>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    return html`
      <ion-header>
        <page-header title=${L.text.organization.pageheader}></page-header>
        <page-toolbar .itemLayout=${false}>
          <ion-searchbar value=${this._searchOrganization} placeholder="name or query, e.g. ?address.street=..." @ionInput=${(e) => this._loadFilteredOrganizations(e.target.value)} debounce="1000"></ion-searchbar>
        </page-toolbar>
      </ion-header>
    `;
  }

  renderFooter() {
    return html`
      <ion-footer>
        <page-footer></page-footer>
      </ion-footer>
    `;
  }

  async _loadFilteredOrganizations(name) {
    this._searchOrganization = routerService.setParameter("organization", name ?? "");
    this._organizations = await organizationService.findOrganizations(this._searchOrganization);
  }

  async _showOrganizationDetails(organization) {
    this._saveScrollPosition();
    routerService.pushDialog(OrganizationsDetailsPage.name, { name: organization?.name });
  }

  _saveScrollPosition() {
    this.shadowRoot?.querySelector("page-content")?.updateScrollPosition();
  }
}

customElements.define("organizations-page", OrganizationsPage);
