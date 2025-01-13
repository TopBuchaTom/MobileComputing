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
    };
  }

  constructor() {
    super();  
    
    this._loadFilteredPersons(routerService.getParameter("person"));
  }

  render() {  
    return html`
      <ion-content>
        <page-content restoreScrollPosition=${true}>
          <persons-list .persons=${this._persons ?? []}
            @personDetailsClicked = ${e => this._showPersonDetails(e.detail)}></persons-list>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    return html`
      <ion-header>
        <page-header title=${L.text.persons.pageheader}></page-header>
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

  async _showPersonDetails(person) {
    this._saveScrollPosition();
    routerService.pushDialog(PersonsDetailsPage.name, { name: person?.name });
  }

  _saveScrollPosition() {
    this.shadowRoot?.querySelector("page-content")?.updateScrollPosition();
  }
}

customElements.define("persons-page", PersonsPage);
