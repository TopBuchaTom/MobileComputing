import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './work-entry';

export class WorkList extends LitElement {
  static get properties() {
    return {
      worklist: { type: Object, state: false },
      groupBy: { type: String, state: false },
      selectionMode: { type: Boolean, state: false },
      noElementsText: {type: String, state: false }
    };
  }

  render() {
    if (!this.worklist) return;

    if (this.worklist.length > 0) {
      this._previousGroup = ""; // Reset on rerendering of new entries so that first header works
      this._previousGroupIndex = -1;
  
      const entries = this._sortByGroup(this.worklist)?.map(entry => html`
        ${this._renderGroupHeader(this.groupBy == "date" ? entry[this.groupBy].split("-").reverse().join(".") : entry[this.groupBy] )}
        <work-entry .entry=${entry} ?selectionMode=${this.selectionMode}></work-entry>
      `);

      return html`
        <ion-list>${entries}</ion-list>
      `;
    }
    else
      return html`
        <ion-item style="margin: 10px">
          ${unsafeHTML(this.noElementsText)}
        </ion-item>
      `;    
  }

  scrollToGroup(index) {
    this.shadowRoot?.getElementById(`worklist-group-${index}`)?.scrollIntoView();
  }

  _sortByGroup(entries) {
    if (!entries || !this.groupBy) return [];

    const groupBy = this.groupBy;
    return entries.sort((entry1, entry2) => {
      const groupComparison = entry1[groupBy].localeCompare(entry2[groupBy]);

      if (this.groupBy != 'date' && groupComparison != 0)
        return groupComparison;
      else {
        // Sort elements within same group according to date and startDate
        return (this._getSortableDateExpression(entry1)).localeCompare(this._getSortableDateExpression(entry2));
      }
    });
  }

  _getSortableDateExpression({date, starttime, endtime}) {
      return `${date}_${starttime}_${endtime}`;
  }

  _renderGroupHeader(currentGroup) {
    if (currentGroup != this._previousGroup) {
      this._previousGroup = currentGroup;
      this._previousGroupIndex++;

      return html`
        <ion-item id="worklist-group-${this._previousGroupIndex}" class="lectureBlock_${this._previousGroup?.replaceAll(".", "_")}">
          <h2>${currentGroup}</h2>
        </ion-item>`;
    }
  }
}

customElements.define('work-list', WorkList);
