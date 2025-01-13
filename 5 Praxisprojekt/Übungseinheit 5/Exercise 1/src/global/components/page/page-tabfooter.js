import { LitElement, html } from 'lit';

export class PageTabFooter extends LitElement {
  render() {
    return  html`
      <slot></slot>
    `;
  }
}

customElements.define("page-tabfooter", PageTabFooter);
