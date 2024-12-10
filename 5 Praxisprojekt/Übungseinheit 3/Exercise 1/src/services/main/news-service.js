import { DateUtil } from "../../utils/date-util";
import { HttpService } from "../http-service";

export class NewsService extends HttpService {
  _WEBNEWS_CACHE_KEY = "WebNews2";
  _PRESSNEWS_CACHE_KEY = "PressNews2";
  _WEBNEWS_URL = "/1151246/feed.xml";
  _PRESSNEWS_URL = "/1151244/feed.xml";
  _WEBNEWS_ENTRIES_MAX = 5;
  _PRESSNEWS_ENTRIES_MAX = 10;

  async _retrieveNews(url) {
    return this._fetchHtmlData(url);
  }

  async _getNews(url, maxEntries, cacheKey, update = false) {
    try {
      if (!this._isInCache(cacheKey) || update) {
        const doc =  await this._retrieveNews(url);

        const events = Array.from(doc.querySelectorAll("item"), item => {
          const timestamp = new Date(item.querySelector("pubdate").innerText);
          const description = item.querySelector("description").innerText;
          const title = item.querySelector("title").innerText;
          const id = item.querySelector("guid").innerText;
          const image = item.querySelector("enclosure")?.getAttribute("url");

          return {
            id,
            title,
            description,
            image,
            timestamp,
            url: id,
            date: DateUtil.toShortDateString(timestamp),
            time: DateUtil.toShortTimeString(timestamp)
          };
        })
        .sort((a, b) => a.timestamp - b.timestamp)
        .slice(0, maxEntries);
       
        this._storeToCache(cacheKey, events, this._CACHE_WEEK);
      }
    }
    finally {
      return Promise.resolve(this._loadFromCache(cacheKey));
    }
  }

  async getWebNews(update = false) {
    return this._getNews(this._WEBNEWS_URL, this._WEBNEWS_ENTRIES_MAX, this._WEBNEWS_CACHE_KEY, update);
  }

  async getPressNews(update = false) {
    return this._getNews(this._PRESSNEWS_URL, this._PRESSNEWS_ENTRIES_MAX, this._PRESSNEWS_CACHE_KEY, update);
  }

  getWebNewsLink() {
    return this._getLanguageSpecificUrl(`${this._baseUrl}${this._WEBNEWS_URL}`, this._getLanguage());
  }

  getPressNewsLink() {
    return this._getLanguageSpecificUrl(`${this._baseUrl}${this._PRESSNEWS_URL}`, this._getLanguage());
  }
}