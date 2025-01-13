import { openOutline } from 'ionicons/icons';
import { LitElement, html } from 'lit';

export class PersonsList extends LitElement {
  static get properties() {
    return {
      persons: { type: Array, state: false },
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
      ${this.persons?.map(person => html`
      <ion-card>
        <ion-card-header>
          <ion-card-title>
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
      `;
  }

  _selectPersonDetails(person) {
    this.dispatchEvent(
      new CustomEvent('personDetailsClicked', { bubbles: true, composed: true, detail: person })
    );
  }
}

customElements.define("persons-list", PersonsList);
