import { LitElement, html } from 'lit';
import './work-header';
import './work-toolbar';
import './work-list';
import './work-details-page';
import { presentLectureOptionsActionSheet } from './work-menu';
import { routerService, workService, languageService as L } from "../../global/app-services";
import { WorkDetailsPage } from './work-details-page';

export class WorkPage extends LitElement {
  static COMPONENT_NAME = "work-page";

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
            groupBy=${this._groupBy} ?selectionmode=${false}
            @entryClicked=${(e) => this._presentLectureOptionsActionSheet(e)}
            @entryDetailsClicked=${(e) => this._presentLectureOptionsActionSheet(e)}
            @entryDeleteClicked=${(e) => this._presentDeleteEntryWorklistAlertConfirm(e.detail)}
            @updateClicked=${() => this._updateWorklistAndChanges(true)}>
          </work-list>
        </page-content>
      </ion-content>
    `;
  }

  renderHeader() {
    // Important: Within header event handlers have to be specified by arrow syntax because otherwise
    // "this" is no persisted, e.g. () => method() instead of method() 
    return html`
      <ion-header>
        <page-header title=${L.text.work.pageheader} >
          <work-header
            @addClicked=${() => routerService.push(WorkDetailsPage.name)}
            @clearClicked=${() => this._presentClearWorklistAlertConfirm()}>
          </work-header>
        </page-header>
        <page-toolbar>
          <work-toolbar .selectedGroup=${this._groupBy} @selectionChanged=${(e) => this._updateGroupBy(e.detail)}></work-toolbar>
        </page-toolbar>
      </ion-header>
    `;
  }

  renderFooter() {
    return html`
      <ion-footer>
        <page-footer .timestamp=${this._worklistChanges?.__cache}></page-footer>
      </ion-footer>
    `;
  }

  visibilityUpdate(visible) {
    if (visible)
      this._updateWorklistAndChanges(false);
  }

  _updateGroupBy(groupBy) {
    this._updateGroupAndScrollPosition(groupBy, 0);
  }

  _updateGroupAndScrollPosition(groupBy, groupId) {
    const previousGroup = this._groupBy;

    if (groupBy != previousGroup) {
      this._groupBy = groupBy;
      routerService.setParameter("groupBy", this._groupBy);
      this._updateHeader();

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
      this.dispatchEvent(
        new CustomEvent('tabFooterChanged', { bubbles: true, composed: true, detail: this.renderFooter() })
      );

      if (update && !workService.hasLastFetchError()) {
        routerService.openToast(L.text.global.dialog_update_header);
      }
    }
  }

  _updateHeader() {
    this.dispatchEvent(
      new CustomEvent('tabHeaderChanged', { bubbles: true, composed: true, detail: this.renderHeader() })
    );
  }

  _presentLectureOptionsActionSheet(e) {
    this._saveScrollPosition(e);

    presentLectureOptionsActionSheet(e.detail);
  }

  _presentClearWorklistAlertConfirm() {
    return routerService.openConfirm(L.text.work.deletework_header,
      L.text.work.deletework_details, L.text.global.button_yes_text, L.text.global.button_no_text,
      () => {
        this._worklist = workService.clearWorkEntries();
      }
    );
  }

  _presentDeleteEntryWorklistAlertConfirm(entry) {
    return routerService.openConfirm(L.text.work.deleteworkentry_header,
      L.text.work.deleteworkentry_details,L.text.global.button_yes_text, L.text.global.button_no_text,
      () => {
        this._worklist = workService.removeWorkEntry(entry);
      }
    );
  }

  _saveScrollPosition() {
    this.shadowRoot?.querySelector("page-content")?.updateScrollPosition();
  }

  _scrollToWorklistGroup(index) {
    this.shadowRoot?.querySelector("work-list")?.scrollToGroup(index);
  }
}

customElements.define("work-page", WorkPage);
