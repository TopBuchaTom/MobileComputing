import { LitElement, html } from 'lit';

export class PageTabheader extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("page-tabheader", PageTabheader);
