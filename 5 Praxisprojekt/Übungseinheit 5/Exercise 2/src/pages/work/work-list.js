import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './work-entry';

export class WorkList extends LitElement {
  static get properties() {
    return {
      worklist: { type: Object, state: false },
      noElementsText: {type: String, state: false }
    };
  }

  render() {
    if (!this.worklist) return;

    if (this.worklist.length > 0)
      return html`
        <ion-list>${this.worklist.map(workEntry => html`<work-entry .entry=${workEntry}></work-entry>`)}</ion-list>
      `;
    else
      return html`
        <ion-item style="margin: 10px">
          ${unsafeHTML(this.noElementsText)}
        </ion-item>
      `;    
  }
}

customElements.define('work-list', WorkList);
