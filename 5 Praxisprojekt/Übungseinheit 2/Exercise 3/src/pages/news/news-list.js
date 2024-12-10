import { openOutline } from 'ionicons/icons';
import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class NewsList extends LitElement {
  static get properties() {
    return {
      news: { type: Array, state: false },
    };
  }

  static styles = css`
    a {
      color: var(--ion-color-primary, #3880ff);
    }

    #newslist {
      display: flex;
    }

    @media (orientation: landscape) {
      #newslist {
        flex-direction: row;
      }

      #newslist > div {
        width: 50%;
      }
    }

    @media (orientation: portrait) {
      #newslist {
        flex-direction: column;        
      }

      #newslist > div {
        width: 100%;
      }
    }
  `;

  render() {
    return this.news?.map(entry => html`
      <div id="newslist" style="margin: 20px; clear: both">
        ${entry.image && html`
        <div style="margin-right: 20px">        
          <img src="${entry.image}" alt="" width="100%" height="auto" />
        </div>
        `}        
        <div>
          <h2>${entry.title}</h2>
          <div style="padding-bottom: 60px; width: 100%">
            ${unsafeHTML(entry.description)}

            <ion-fab horizontal="end" style="position: absolute; right: 20px; margin-top: 10px">
              <ion-fab-button href="${entry.url}" target="_blank">
                <ion-icon icon=${openOutline}></ion-icon>
              </ion-fab-button>
            </ion-fab>

          </div>
        </div>
      </div>
    `);
  }
}

customElements.define("news-list", NewsList);
