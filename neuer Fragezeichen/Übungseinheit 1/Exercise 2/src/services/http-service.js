import { languageService, routerService, storageService } from "./base-services";

export class HttpService {
  _baseUrl = "";
  _credentials = "";
  _parser = new DOMParser();
  _lastFetchError = false;

  _HTTP_SERVICE_CACHE_TIMESTAMP_KEY = `${HttpService.name}_cache_timestamps`;

  _CACHE_MILLISECOND = 1;
  _CACHE_SECOND = 1000 * this._CACHE_MILLISECOND;
  _CACHE_MINUTE = 60 * this._CACHE_SECOND;
  _CACHE_HOUR = 60 * this._CACHE_MINUTE;
  _CACHE_DAY = 24 * this._CACHE_HOUR;
  _CACHE_WEEK = 7 * this._CACHE_DAY;

  constructor(baseUrl = null, credentials = null) {
    this._baseUrl = baseUrl;
    this._credentials = credentials;
  }

  hasLastFetchError() {
    return this._lastFetchError;
  }

  async _fetch(url, init) {
    this._lastFetchError = false;

    await routerService.openProgress();

    return fetch(url, init)
      .catch((e) => {
        routerService.closeAllProgresses();
        this._showError(e);
      })
      .then((response) => {
        routerService.closeAllProgresses();
        return response;
      });
  }

  async _fetchData(url, settings = undefined) {
    // Relative url specified?
    const requestUrl = this._getLanguageSpecificUrl(
      `${url.startsWith("http") ? "" : this._baseUrl}${url}`,
      languageService.getLanguage());

    // Build request data based on default GET request
    // (settings can override method, headers, body...)
    const requestHeaders = this._credentials ? { Authorization: `Basic ${btoa(this._credentials)}` } : undefined;
    const requestData = {
      method: "GET",
      headers: requestHeaders,
      ...settings
    }

    return this._fetch(requestUrl, requestData);
  }

  async _fetchTextData(url, settings = undefined) {
    return this._fetchData(url, settings).then(response => response.text());
  }

  async _fetchJsonData(url, settings = undefined) {
    return this._fetchData(url, settings).then(response => response.json());
  }

  async _fetchHtmlData(url, settings = undefined) {
    return this._fetchTextData(url, settings).then(response => {
      return (response != null) ? this._parseHtml(response) : null;
    });
  }

  _parseHtml(content) {
    return this._parser.parseFromString(content, "text/html");
  }

  _parseJson(content) {
    return JSON.parse(content);
  }

  _showError(e) {
    this._lastFetchError = true;

    const service = this.constructor.name;
    const message = `${service} offline`;
    routerService.openToast(message);

    // Update cache timestamp to skip fetch calls in offline mode if already in cache
    // (update is done automatically at next interval or user can manually update)
    const nextupdate = new Date().getTime() + this._CACHE_HOUR;
    const cacheTimestamps = storageService.load(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, {});
    for (const key of Object.keys(cacheTimestamps))
      if (key.startsWith(`${service}_`) && nextupdate > cacheTimestamps[key].nextupdate)
        cacheTimestamps[key].nextupdate = nextupdate;
    storageService.store(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, cacheTimestamps);

    throw e;
  }

  // _logAction(name, args) {
  //   const argsExpression = Object.entries(args).reduce((res, [key, value]) => `${res} ${key}=${value}`);
  //   console.log(`${name}(${argsExpression}) was called`);
  // }

  // Default implementation that returns original url
  // (can be overriden by concrete service class)
  // eslint-disable-next-line no-unused-vars
  _getLanguageSpecificUrl(url, language) {
    return url;
  }

  _getLanguage() {
    return languageService.getLanguage();
  }

  _loadFromCache(key, defaultValue) {
    const data = storageService.load(this._getUniqueCacheKey(key), defaultValue);
    this._addCacheData(data, this._getUniqueCacheKey(key));

    return data;
  }

  _addCacheData(data, key) {
    if (!data) return;

    const cacheInfo = this._getCacheTimestamp(key);

    const serviceAndInfoSeparator = key.indexOf("_");
    const service = key.substring(0, serviceAndInfoSeparator);
    const info = key.substring(serviceAndInfoSeparator+1);

    const cacheData = {
      service: service,
      info: info, 
      lastUpdated: cacheInfo?.timestamp,
      nextUpdate: cacheInfo?.nextupdate
    };

    Object.defineProperty(data, "__cache", { value: cacheData });
  }

  _storeToCache(key, value, timeoutPeriod) {
    const uniqueCacheKey = this._getUniqueCacheKey(key);

    this._updateCacheTimestamp(uniqueCacheKey, timeoutPeriod);

    return storageService.store(uniqueCacheKey, value);
  }

  _isInCache(key) {
    const uniqueCacheKey = this._getUniqueCacheKey(key);

    if (!storageService.contains(uniqueCacheKey))
      return false;

    const nowTimestamp = new Date().getTime();
    const cachingTimestamp = this._getCacheTimestamp(uniqueCacheKey)?.nextupdate;

    if (cachingTimestamp == null)
      return false;

    return nowTimestamp <= cachingTimestamp;
  }

  _clearCache(keyExpr = null) {
    this._clearCacheTimestamps(keyExpr);

    storageService.clear(this._getUniqueCacheKey(), keyExpr);
  }

  _updateCacheTimestamp(key, timeoutPeriod) {    
    const timestamp = new Date().getTime();
    const nextupdate = timestamp + timeoutPeriod;

    const cacheTimestamps = storageService.load(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, {});
    cacheTimestamps[key] = {
      timestamp,
      timeoutPeriod,
      nextupdate
    };
    storageService.store(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, cacheTimestamps);
  }

  _clearCacheTimestamps(keyExpr = null) {
    const keyPrefix = this._getUniqueCacheKey();
    const cacheTimestamps = storageService.load(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, {});

    const uniqueCacheKeys = Object.keys(cacheTimestamps);
    for (let i=uniqueCacheKeys.length-1; i>=0; i--) {
      const uniqueCacheKey = uniqueCacheKeys[i];

      if (uniqueCacheKey.startsWith(keyPrefix) && (keyExpr == null || keyExpr(uniqueCacheKey)))
        delete cacheTimestamps[uniqueCacheKey];
    }

    storageService.store(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, cacheTimestamps);
  }

  _getCacheTimestamp(key) {
    return storageService.load(this._HTTP_SERVICE_CACHE_TIMESTAMP_KEY, {})[key] ?? null;
  }

  _getUniqueCacheKey(key = "") {
    return `${this.constructor.name}_${key}`;
  }
}
