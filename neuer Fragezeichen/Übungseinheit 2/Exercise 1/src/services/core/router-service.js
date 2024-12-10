import { alertController, toastController, actionSheetController } from "@ionic/core/components";

export class RouterService {
  lastUrl = null;
  lastParams = null;
  previousUrl = null;
  previousParams = null;

  getRouter() {
    return document.querySelector("app-routing").shadowRoot.querySelector("ion-router");
  }

  getPage() {
    return document.querySelector("ion-router-outlet")?.querySelector(".ion-page");
  }

  push(url, direction, animation, params) {
    this._updateLastUrl(document.location.href);

    const updatedUrl = params
      ? this._getUrlWithUpdatedParameters(url, params)
      : url;    

    return this.getRouter().push(updatedUrl, direction, animation);
  }

  _getUrlWithUpdatedParameters(url, params) {
    let page = url.substring(url.indexOf("#") + 1);

    for (const [paramName, paramValue] of Object.entries(params)) {
      const escapedParamValue = encodeURIComponent(paramValue);
      if (page.includes(`${paramName}=`))
        page = page.replace(new RegExp(`([?&]${paramName}=)([^&$]*)`), `$1${escapedParamValue}`);
      else
        page = page.includes("?") ? `${page}&${paramName}=${escapedParamValue}` : `${page}?${paramName}=${escapedParamValue}`;
    }

    return page;
  }


  back() {
    return this.getRouter().back();
  }

  open(url, target, features, replace) {
    return window.open(url, target, features, replace);
  }

  async openAlert(header, message, okText = "OK", okAction = undefined) {
    return this._openAlertConfirm(header, message, [
        { text: okText, handler: okAction }
      ]
    );
  }

  async openConfirm(header, message, yesText = "Ja", noText = "Nein", yesAction = undefined, noAction = undefined) {
    return this._openAlertConfirm(header, message, [
        { text: noText, role: 'cancel', cssClass: 'secondary', handler: noAction },
        { text: yesText, handler: yesAction }
      ]
    );
  }

  async openChoice(header, buttons) {
    const actionSheet = await actionSheetController.create({
      header: header,
      buttons: buttons
    });
    actionSheet.onWillDismiss().then(() => this.popDialog());
    
    this.pushDialog();

    return await actionSheet.present();
  }

  async openToast(message) {
    const toast = await toastController.create({
      message: message,
      duration: 2000
    });
    return await toast.present();
  }

  async openProgress() {
    this._updateProgressBar(true);
  }

  async pushDialog(dialogUrl = null, dialogParams = {}) {
    // Add current url to stack to enable back button from within dialog url
    const currentUrl = document.location.hash.replace("#/", "");
    const paramSeperator = currentUrl.includes("?") ? "&" : "?";
    if (!currentUrl.includes("select=true"))
      this.push(`${currentUrl}${paramSeperator}select=true`); // Update url for support of back button to close dialog

    // Add dialog url to stack and navigate to dialog url
    if (dialogUrl)
      this.push(dialogUrl, null, null, { ...dialogParams, returnurl: document.location.href });      
  }

  async popDialog(returnParams = null, menu = false) {
    // Only go back if menu is not shown
    if (!menu && document.location.href.includes("select=true"))
      history.back();

    // Navigate back
    if (returnParams) {
        const returnUrl = this.getParameter("returnurl");
  
        if (returnUrl)
          this.push(returnUrl, null, null, returnParams);
        else
          this.back();
      }
  }

  
  isDialogWithResultOpen() {
    return this.getParameter("returnurl") != null;
  }

  closeAllProgresses() {
    this._updateProgressBar(false);
  }

  _updateProgressBar(visible) {
    const progressBar = document.querySelector("#main-content > .ion-page")?.shadowRoot
      ?.querySelector("page-header")?.shadowRoot
      ?.querySelector("ion-progress-bar");
    
      if (progressBar)
        progressBar.style.visibility = visible ? "visible" : "hidden";
  }

  closeNavigationMenu() {
    document.getElementsByTagName("app-menu")?.[0].closeMenu();
  }

  closeAlertConfirms() {
    const actionSheets = document.getElementsByTagName("ion-action-sheet");
    for (let i=0; i<actionSheets.length; i++)
      actionSheets[i].dismiss();

    const alertDialogs = document.getElementsByTagName("ion-alert");
    for (let i=0; i<alertDialogs.length; i++)
      alertDialogs[i].dismiss();
  }

  getLastUrl() {
    return this.lastUrl;
  }

  getParameter(name) {
    if (this.lastUrl != document.location.href)
      this._updateLastUrl();

    return this.lastParams.get(name);
  }

  getParameters(...names) {
    if (names.length == 0)
      names = [...this.lastParams.keys()];

    return names.reduce((params, name) => { params[name] = this.getParameter(name); return params; }, {});
  }

  setParameter(name, value) {
    // Execute setParameter after pending history back   
    if (document.location.hash.includes("select=true"))
      window.addEventListener('popstate', () => this._applyParameterUpdate(name, value), {once: true});
    else
      this._applyParameterUpdate(name, value);

    return value;
  }

  _applyParameterUpdate(name, value) {
    let page = document.location.hash;

    if (page.includes(`${name}=`))
      page = page.replace(new RegExp(`([?&]${name}=)([^&$]*)`), `$1${value}`);
    else
      page = page.includes("?") ? `${page}&${name}=${value}` : `${page}?${name}=${value}`;

    history.replaceState(undefined, undefined, `/${page}`);
  }

  setParameters(params) {
    Object.entries(params).forEach(([name, value]) => this.setParameter(name, value));
  }

  getQuery() {
    return new URL(document.location.href.replace("/#", "")).search;
  }

  setQuery(query, replace = false) {
    let page = document.location.hash.replace("#/", "");
    if (page.includes("?")) page = page.substring(0, page.indexOf("?"));

    if (replace)
      history.replaceState(undefined, undefined, `${page}?${query}`)
    else
      this.push(`${page}?${query}`);
  }

  applyNavigationHandler(navigationHandler) {
    window.onpopstate = navigationHandler;
  }

  applyErrorHandler(errorHandler) {
    window.onerror = function(message, source, lineno, colno, error) {
      errorHandler(JSON.stringify(message, source, lineno, colno, error));
      return true;
    }
    window.onunhandledrejection = function(errorEvent) {
      errorHandler(errorEvent?.reason);
      return true;
    }
  }

  applyVisibilityChangeHandler(visibilityChangeHandler) {
    document.addEventListener("visibilitychange", () => {
      visibilityChangeHandler(!document.hidden);
    });
  }

  isDebugging() {
    return document.location.href.includes("localhost");
  }

  _updateLastUrl() {
    this.previousUrl = this.lastUrl;
    this.lastUrl = document.location.href;
    this.lastParams = new URLSearchParams(this.getQuery());
  }

  async _openAlertConfirm(header, message, buttons) {
    const alert = await alertController.create({
      header, message, buttons
    });
    alert.onWillDismiss().then(() => this.popDialog());
    
    this.pushDialog();

    return await alert.present();
  }
}
