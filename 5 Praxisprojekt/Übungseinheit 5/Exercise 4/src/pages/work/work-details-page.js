import { LitElement, html } from 'lit';
import './work-toolbar';
import './work-list';
import { routerService, workService, languageService as L } from "../../global/app-services";
import { IndexPage } from '../index/index-page';
import { WorkPage } from './work-page';

export class WorkDetailsPage extends LitElement {
  static get properties() {
    return {
      _workEntry: { type: Object, state: true },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._loadWorkEntry(routerService.getParameter("id"));
    this._applyWorkEntryChanges(routerService.getParameters());
  }

  render() {
    if (!this._workEntry) return;
    
    return html`
      <ion-header>
        <page-header title=${L.text.work.details_header} .menu=${false}></page-header>      
      </ion-header>   
      <ion-content>
        <page-content>
          <form>
            <ion-item>
                <ion-input id="title" label="Title" label-placement="floating" value=${this._workEntry.title} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-select id="priority" label="Priority" label-placement="floating" value=${this._workEntry.priority}
                .okText=${L.text.global.button_ok_text} .cancelText=${L.text.global.button_cancel_text}                
                @click=${() => routerService.pushDialog()}
                @ionDismiss=${ (e) => { routerService.popDialog(); this._handleInput(e); } }>
                <ion-select-option value="">Default</ion-select-option>                
                <ion-select-option value="H">High</ion-select-option>                
                <ion-select-option value="L">Low</ion-select-option>                
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-input id="date" label="Date" type="date" label-placement="floating" value=${this._workEntry.date} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="starttime" label="Starttime" type="time" label-placement="floating" value=${this._workEntry.starttime} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="endtime" label="Endtime" type="time" label-placement="floating" value=${this._workEntry.endtime} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="location" label="Location" label-placement="floating" value=${this._workEntry.location} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="room" label="Room" label-placement="floating" value=${this._workEntry.room} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="lat" label="Latitude" type="number" min="-90" max="90" step="0.0000001" label-placement="floating" value=${this._workEntry.lat} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input id="lng" label="Longitude" type="number" min="-180" max="180" step="0.0000001" label-placement="floating" value=${this._workEntry.lng} @ionBlur=${this._handleInput} required></ion-input>
            </ion-item>
            <ion-item>
              <ion-textarea id="details" label="Details" label-placement="floating" value=${this._workEntry.details} rows="6" maxlength="20" @ionBlur=${this._handleInput}></ion-textarea>
            </ion-item>
          </form>
        </page-content>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-button @click=${this._saveDetails}>
            ${L.text.global.button_save_text}
          </ion-button>
        </ion-fab>
      </ion-content>
    `;
  }

  _handleInput(e) {
    this._workEntry[e.target.id] = routerService.setParameter(e.target.id, e.target.value);  
    this._updateValidation(e.target);
  }

  _updateValidation(el) {
    if (!el.nativeInput) return;

    el.classList.toggle("ion-touched", true);
    el.classList.toggle("ion-invalid", !el.nativeInput.validity.valid);
  }

  _loadWorkEntry(id) {
    this._workEntry = workService.getWorkEntry(id);
  }

  _applyWorkEntryChanges(props) {
    Object.assign(this._workEntry, props);
  }

  _saveDetails() {
    this.shadowRoot.querySelectorAll("ion-input").forEach(el => this._updateValidation(el));

    if (!this.shadowRoot.querySelector("form").checkValidity())
      return;

    if (this._workEntry) {
      if (this._workEntry.id)
        workService.updateWorkEntry(this._workEntry);
      else
        workService.addWorkEntry(this._workEntry);

      routerService.push(IndexPage.name, null, null, { tab: WorkPage.COMPONENT_NAME, update: true });
    }
  }
}

customElements.define("work-details-page", WorkDetailsPage);
