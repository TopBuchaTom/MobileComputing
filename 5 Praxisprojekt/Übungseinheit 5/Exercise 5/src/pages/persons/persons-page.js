import { LitElement, html } from 'lit';
import './persons-list';
import './persons-details-page';
import { routerService, personsService, languageService as L } from "../../global/app-services";
import { PersonsDetailsPage } from './persons-details-page';

export class PersonsPage extends LitElement {
  static get properties() {
    return {
      _searchPerson: { type: String, state: true },
      _persons: { type: Array, state: true },
      _selectedPerson: { type: Object, state: true }
    };
  }

  constructor() {
    super();  
    
    this._loadFilteredPersons(routerService.getParameter("person"));
    this._selectCurrentPerson(routerService.getParameter("selected"));
  }

  render() {  
    return html`
      ${this._renderSelectionHeader()}
      <ion-content>
        <page-content restoreScrollPosition=${true}>
          <persons-list .persons=${this._persons ?? []}
            ?selectionMode=${routerService.isDialogWithResultOpen()}
            .selectedPerson=${this._selectedPerson?.name}
            @selectedChanged=${e => this._updateCurrentPerson(e.detail)}
            @personDetailsClicked = ${e => this._showPersonDetails(e.detail)}></persons-list>
        </page-content>
      </ion-content>
      ${this._renderSelectionFooter()}
    `;
  }

  _renderSelectionHeader() {
    if (routerService.isDialogWithResultOpen())
      return this.renderHeader("Select person office");
  }

  _renderSelectionFooter() {
    if (routerService.isDialogWithResultOpen())
      return html`
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-button @click=${this._saveSelectedPerson} ?disabled=${!this._selectedPerson}>
            ${L.text.global.button_save_text}
          </ion-button>
        </ion-fab>
      `;
  }

  renderHeader(header = L.text.persons.pageheader) {
    return html`
      <ion-header>
        <page-header title=${header}></page-header>
        <page-toolbar .itemLayout=${false}>
          <ion-searchbar value=${this._searchPerson} placeholder="name or query, e.g. ?address.street=..." @ionInput=${(e) => this._loadFilteredPersons(e.target.value)} debounce="1000"></ion-searchbar>
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

  async _loadFilteredPersons(name) {
    this._searchPerson = routerService.setParameter("person", name ?? "");
    this._persons = await personsService.findPersons(this._searchPerson);
  }

  async _selectCurrentPerson(name) {
    this._selectedPerson = await personsService.getPersonByName(name);
  }

  async _updateCurrentPerson(person) {
    routerService.setParameter("selected", person.name);
    this._selectedPerson = person;
}

  async _saveSelectedPerson() {
    const { name: location, address: { geo: { lat, lng} } } = this._selectedPerson;
    
    routerService.popDialog({ location, lat, lng });
  }

  async _showPersonDetails(person) {
    this._saveScrollPosition();
    routerService.pushDialog(PersonsDetailsPage.name, { name: person?.name });
  }

  _saveScrollPosition() {
    this.shadowRoot?.querySelector("page-content")?.updateScrollPosition();
  }
}

customElements.define("persons-page", PersonsPage);
