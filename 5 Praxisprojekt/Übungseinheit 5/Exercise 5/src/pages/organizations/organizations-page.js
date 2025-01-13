import { LitElement, html } from 'lit';
import './organizations-list';
import { routerService, organizationService, languageService as L } from "../../global/app-services";
import { OrganizationsDetailsPage } from './organizations-details-page';

export class OrganizationsPage extends LitElement {
  static get properties() {
    return {
      _searchOrganization: { type: String, state: true },
      _organizations: { type: Array, state: true },
      _selectedOrganization: { type: Object, state: true }
    };
  }

  constructor() {
    super();

    this._loadFilteredOrganizations(routerService.getParameter("organization"));
    this._selectCurrentOrganization(routerService.getParameter("selected"));
  }

  render() {  
    return html`
      ${this._renderSelectionHeader()}
      <ion-content>
        <page-content restoreScrollPosition=${true}>
          <organizations-list .organizations=${this._organizations ?? []}
            ?selectionMode=${routerService.isDialogWithResultOpen()}
            .selectedOrganization=${this._selectedOrganization?.name}
            @selectedChanged=${e => this._updateCurrentOrganization(e.detail)}
            @organizationDetailsClicked = ${e => this._showOrganizationDetails(e.detail)}></organizations-list>
        </page-content>
      </ion-content>
      ${this._renderSelectionFooter()}
    `;
  }

  _renderSelectionHeader() {
    if (routerService.isDialogWithResultOpen())
      return this.renderHeader("Select organization location");
  }

  _renderSelectionFooter() {
    if (routerService.isDialogWithResultOpen())
      return html`
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-button @click=${this._saveSelectedOrganization} ?disabled=${!this._selectedOrganization}>
            ${L.text.global.button_save_text}
          </ion-button>
        </ion-fab>
      `;
  }

  renderHeader(header = L.text.organization.pageheader) {
    return html`
      <ion-header>
        <page-header title=${header}></page-header>
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

  async _selectCurrentOrganization(name) {
    this._selectedOrganization = await organizationService.getOrganization(name);
  }

  async _updateCurrentOrganization(organization) {
      routerService.setParameter("selected", organization.name);
      this._selectedOrganization = organization;
  }

  async _saveSelectedOrganization() {
    const { name: location, geo: { lat, lng} } = this._selectedOrganization; 

    routerService.popDialog({ location, lat, lng });
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
