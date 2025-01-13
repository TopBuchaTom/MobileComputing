export class SettingsService {
  _SETUP_FINISHED_KEY = "setupFinished";
  _DEFAULT_STARTTAB_KEY = "defaultStartTab";
  _DEFAULT_STATUSBAR_KEY = "defaultStatusbar";
  _DEFAULT_SWIPEMENU_KEY = "defaultSwipemenu";
  _COLORSCHEME_KEY = "colorscheme";
  _LANGUAGE_KEY = "language";
  _NEWS_NOTIFICATION_KEY = "newsNotification";
  _CAMPULS_NOTIFICATION_KEY = "pressNotification";
  _EVENTS_NOTIFICATION_KEY = "eventsNotification";
  _WORKLIST_NOTIFICATION_KEY = "worklistNotification";

  _storage = null;

  isSetupFinished() {
    return this._load(this._SETUP_FINISHED_KEY, false);
  }

  setSetupFinished(setupFinished) {
    return this._store(this._SETUP_FINISHED_KEY, setupFinished);
  }

  getDefaultStarttab() {
    return this._load(this._DEFAULT_STARTTAB_KEY, "NewsPage");
  }

  setDefaultStarttab(defaultStarttab) {
    return this._store(this._DEFAULT_STARTTAB_KEY, defaultStarttab)
  }

  getDefaultStatusbar() {
    return this._load(this._DEFAULT_STATUSBAR_KEY, true);
  }

  setDefaultStatusbar(defaultStatusbar) {
    return this._store(this._DEFAULT_STATUSBAR_KEY, defaultStatusbar)
  }

  getDefaultSwipemenu() {
    return this._load(this._DEFAULT_SWIPEMENU_KEY, true);
  }

  setDefaultSwipemenu(defaultSwipemenu) {
    return this._store(this._DEFAULT_SWIPEMENU_KEY, defaultSwipemenu)
  }

  getColorscheme() {
    return this._load(this._COLORSCHEME_KEY, "");
  }

  setColorscheme(colorscheme) {
    return this._store(this._COLORSCHEME_KEY, colorscheme);
  }

  getLanguage() {
    return this._load(this._LANGUAGE_KEY, "");
  }

  setLanguage(language) {
    return this._store(this._LANGUAGE_KEY, language);
  }

  getNewsNotification() {
    return this._load(this._NEWS_NOTIFICATION_KEY, false);
  }

  setNewsNotification(newsNotification) {
    return this._store(this._NEWS_NOTIFICATION_KEY, newsNotification);
  }

  getPressNotification() {
    return this._load(this._CAMPULS_NOTIFICATION_KEY, false);
  }

  setPressNotification(pressNotification) {
    return this._store(this._CAMPULS_NOTIFICATION_KEY, pressNotification);
  }

  getEventsNotification() {
    return this._load(this._EVENTS_NOTIFICATION_KEY, false);
  }

  setEventsNotification(eventsNotification) {
    return this._store(this._EVENTS_NOTIFICATION_KEY, eventsNotification);
  }

  getWorklistNotification() {
    return this._load(this._WORKLIST_NOTIFICATION_KEY, false);
  }

  setWorklistNotification(worklistNotification) {
    return this._store(this._WORKLIST_NOTIFICATION_KEY, worklistNotification);
  }

  applyStorage(storage) {
    this._storage = storage;
  }

  resetSettings() {
    this._storage.clear();
  }

  _load(key, defaultValue) {
    return this._storage.load(this._getUniqueCacheKey(key), defaultValue);
  }

  _store(key, value) {
    return this._storage.store(this._getUniqueCacheKey(key), value);
  }

  _getUniqueCacheKey(key = "") {
    return `${this.constructor.name}_${key}`;
  }
}
