import { LitElement, html } from 'lit';
import './work-list';
import { routerService, workService, languageService as L } from "../../global/app-services";

export class WorkPage extends LitElement {
  static get properties() {
    return {
      _worklist: { type: Object, state: true },
      _worklistChanges: { type: Object, state: true },
      _groupBy: { type: String, state: true }
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    // Load worklist (use cache if update is false)
    await this._updateWorklistAndChanges(routerService.getParameter("update") == "true");
    routerService.setParameter("update", "false");

    // Set initial group to date
    this._updateGroupBy(routerService.getParameter("groupBy") ?? 'date');
  }

  render() {
    // Skip render until all properties are initialized
    if (!this._groupBy) return;

    return html`
      <ion-content>
        <page-content restoreScrollPosition=${true} renderRefresher=${true}
          @refreshAction=${ async (e) => { await this._updateWorklistAndChanges(true); e.detail.complete(); }}>
          <work-list .worklist=${this._worklist} noElementsText=${L.text.work.emptylist_text}
            groupBy=${this._groupBy}>
          </work-list>
        </page-content>
      </ion-content>
    `;
  }

  _updateGroupBy(groupBy) {
    this._updateGroupAndScrollPosition(groupBy, 0);
  }

  _updateGroupAndScrollPosition(groupBy, groupId) {
    const previousGroup = this._groupBy;

    if (groupBy != previousGroup) {
      this._groupBy = groupBy;
      routerService.setParameter("groupBy", this._groupBy);

      // Scroll only on updates and not on load because changes are to be shown
      if (previousGroup) {
        // Queue scroll update after render finished because updateComplete does not work
        setTimeout(() => this._scrollToWorklistGroup(groupId), 1);
      }
    }
    else
      this._scrollToWorklistGroup(groupId);
  }

  async _updateWorklistAndChanges(update) {
    try {
      this._worklist = await workService.getWorkEntries(update);
    }
    finally {
      if (update && !workService.hasLastFetchError()) {
        routerService.openToast(L.text.global.dialog_update_header);
      }
    }
  }
}

customElements.define("work-page", WorkPage);
