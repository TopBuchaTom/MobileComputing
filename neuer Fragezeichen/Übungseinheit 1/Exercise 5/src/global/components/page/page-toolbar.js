import { LitElement, html, css } from 'lit';

export class PageToolbar extends LitElement {
  static get properties() {
    return {
      itemLayout: { type: Object, state: false },
    };
  }

  static styles = css`
    ion-item {
      --inner-border-width: 0;
    }

    ion-toolbar {
      --min-height: 45px;
    }
  `;

  constructor() {
    super();

    this.itemLayout = true;
  }

  render() {
    if (this.itemLayout)
      return this._renderItemLayout();
    
    return html`
      <ion-toolbar>
        <slot></slot>
      </ion-toolbar>
    `;
  }

  _renderItemLayout() {
    return html`
      <ion-toolbar>
        <ion-item>
          <slot></slot>
        </ion-item>
      </ion-toolbar>
    `;
  }
}

customElements.define("page-toolbar", PageToolbar);
