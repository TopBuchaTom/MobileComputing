import { text_en_US  } from "../../assets/languages/text_en_US";

export class LanguageService {
  languages = [];
  textResources = {};

  language = null;
  text = text_en_US.entries; // Default - is only used for better typing support in IDE

  _storage = null;

  register(resource) {
    const languageCode = this._getLanguageCode(resource.code);

    this.languages.push({ name: resource.name, code: languageCode});
    this.textResources[languageCode] = resource.entries;
  }

  getLanguage() {
    return this.language;
  }

  applyLanguage(language = "") {
    // Save system language (update cache if change after app start or if app start and system language change)
    if (this.language != null || (language == "" && this._getSystemLanguage() != this._loadSystemLanguage())) {
      // Clear caches
      this._storage.clear(null, key => !key.startsWith("SettingsService"));

      // Save new system language
      this._storeSystemLanguage();
    }

    // Calculate language
    this.language = language == "" ? this._getSystemLanguage() : language.toLowerCase();
    if (this.language == "de" || this.language?.startsWith("de-")) this.language = "de-de";
    if (this.language == "en" || this.language?.startsWith("en-")) this.language = "en-us";

    this.text = this.textResources[this.language] ?? this.textResources["en-us"];

    if (!this.textResources[this.language])
      throw Error("Language " + this.language + "not supported!");
  }

  getLanguages() {
    return this.languages;
  }

  setOnSystemLanguageChangeCallback(callback) {
    window.onlanguagechange = function(event) {
      callback(event);
    };
  }

  _getSystemLanguage() {
    return navigator.language?.toLowerCase();
  }

  _getLanguageCode(resourceName) {
    return resourceName.toLowerCase();
  }

  applyStorage(storage) {
    this._storage = storage;
  }

  _loadSystemLanguage() {
    return this._storage.load(this._getUniqueCacheKey(), "");
  }

  _storeSystemLanguage() {
    return this._storage.store(this._getUniqueCacheKey(), this._getSystemLanguage());
  }

  _getUniqueCacheKey() {
    return `${this.constructor.name}_systemLanguage`;
  }
}
