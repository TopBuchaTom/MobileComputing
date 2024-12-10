import { LitElement, html, css } from 'lit';

export class PageHeader extends LitElement {
  static get properties() {
    return {
      title: { type: String, state: false },
      menu: { type: Boolean, state: false }
    };
  }

  static styles = css`
   ion-toolbar {
      --min-height: 45px;
    }
  `;

  constructor() {
    super();

    this.menu = true;
  }

  render() {
    // IonMenuButton needs autoHide to be set to false to avoid flickering on navigation

    return html`
      <ion-toolbar>
        <ion-title>
          ${this.title}
        </ion-title>
        ${(this.menu) ? html`
        <ion-buttons slot="start">
          <ion-menu-button .autoHide=${false}></ion-menu-button>
        </ion-buttons>`
        : html``
        }
        <ion-buttons slot="secondary">
          <slot></slot>
        </ion-buttons>
      </ion-toolbar>
      <ion-progress-bar type="indeterminate" style="visibility: hidden"></ion-progress-bar>
    `;
  }
}

customElements.define("page-header", PageHeader);
