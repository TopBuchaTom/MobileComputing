import { openOutline } from 'ionicons/icons';
import { LitElement, html } from 'lit';

export class PersonsList extends LitElement {
  static get properties() {
    return {
      persons: { type: Array, state: false },
      selectionMode: { type: Boolean, state: false },
      selectedPerson: { type: Object, state: true }
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
      <ion-radio-group value=${this.selectedPerson}>
      ${this.persons?.map(person => html`
      <ion-card @click=${() => this._selectPerson(person)}>
        <ion-card-header>
          <ion-card-title>
            ${this.selectionMode && this._renderRadiobutton(person)}
            ${person?.name}
          </ion-card-title>
          <ion-card-subtitle>${person?.company?.name}</ion-card-subtitle>
          <ion-fab vertical="center" horizontal="end">
            <ion-fab-button @click=${() => this._selectPersonDetails(person)}>
              <ion-icon icon=${openOutline}></ion-icon>
            </ion-fab-button>
          </ion-fab>
        </ion-card-header>
        <ion-card-content>
          <address>
            <p>${person.address.street} ${person.address.suite}</p>            
            <p>${person.address.zipcode} ${person.address.city}</p>            
          </address>
        </ion-card-content>        
      </ion-card>
    `)}
    </ion-radio-group>
      `;
  }

  _renderRadiobutton(person) {
    return html`<ion-radio value=${person?.name} aria-label=${person?.name}></ion-radio>`;
  }

  _selectPerson(person) {
    this.dispatchEvent(
      new CustomEvent('selectedChanged', { bubbles: true, composed: true, detail: person })
    );
  }

  _selectPersonDetails(person) {
    this.dispatchEvent(
      new CustomEvent('personDetailsClicked', { bubbles: true, composed: true, detail: person })
    );
  }
}

customElements.define("persons-list", PersonsList);
