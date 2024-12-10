import { DateUtil } from "../../utils/date-util";
import { HttpService } from "../http-service";

export class EventsService extends HttpService {
  _EVENTS_CACHE_KEY = "Events";
  _WEEK_REGEX = "kw([0-9]+)-";
  _CATEGORY_REGEX = "kw([0-9]+)-([^-]+)-";

  async _retrieveEvents() {
    return this._fetchHtmlData(`/aktuellethemen.rss`);
  }

  async getEvents(update = false) {
    try {
      if (!this._isInCache(this._EVENTS_CACHE_KEY) || update) {
        const doc = await this._retrieveEvents();

        const events = Array.from(doc.querySelectorAll("item"), item => {
          const timestamp = new Date(item.querySelector("pubDate").innerText);
          const description = item.querySelector("description").innerText;
          const title = item.querySelector("title").innerText;
          const id = item.querySelector("guid").innerText;
          const week = id.match(this._WEEK_REGEX)?.[1] ?? "";
          const category = id.match(this._CATEGORY_REGEX)?.[2]?.replace(/^./, x => x.toUpperCase()) ?? "Sonstiges";      

          return {
            id, title, description,
            week, category,            
            timestamp,
            url: id,            
            date: DateUtil.toShortDateString(timestamp),
            time: DateUtil.toShortTimeString(timestamp)
          };
        }          
        ).sort((a, b) => a.timestamp - b.timestamp);
      
        this._storeToCache(this._EVENTS_CACHE_KEY, events, this._CACHE_WEEK);
      }
    }
    finally {
      return Promise.resolve(this._getCurrentEvents(this._loadFromCache(this._EVENTS_CACHE_KEY)));
    }
  }

  async getEventsDetails(id) {   
    return this.getEvents().then(events => events.find(e => e.id == id));
  }

  getEventsLink() {
    return this._baseUrl;
  }

  _getCurrentEvents(events) {
    if (!events) return null;

    const now = new Date();
    const todayTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Change orignal array instead of filtering to keep cache date
    for (let i=events.length-1; i>=0; i--)
      if (events[i].date < todayTimestamp)
        events.splice(i, 1);

    return events;
  }
}