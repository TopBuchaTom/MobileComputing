import { DateUtil } from "../../utils/date-util";
import { HttpService } from "../http-service";

export class HolidaysService extends HttpService {
  _HOLIDAYS_CACHE_KEY = "Holidays";

  async _retrieveDates(year) {
    return await this._fetchJsonData(`/api/?nur_land=BY&jahr=${year}`);
  }

  async _getDatesForYear(year) {
    return await this._retrieveDates(year)
      .then(dateObject => Object.entries(dateObject))
      .then(dateArray => Object.entries(
        Object.groupBy(dateArray, ([_, dateDetails]) => DateUtil.getMonthName(new Date(dateDetails.datum), this._getLanguage()))
      ));
  }

  async getDates(update = false) {
    try {
      if (!this._isInCache(this._HOLIDAYS_CACHE_KEY) || update) {
        const years = Array.from({ length: 2 }, (_, index) => DateUtil.getYear() + index);
        const datesForYears = await Promise.all(years.map(year => this._getDatesForYear(year)));

        const datesGroupedByYears = datesForYears.reduce((result, datesForYear, yearIndex) => {
          result[years[yearIndex]] = datesForYear; return result;
        }, {})

        this._storeToCache(this._HOLIDAYS_CACHE_KEY, datesGroupedByYears, this._CACHE_WEEK);
      }
    }
    finally {
      return Promise.resolve(this._loadFromCache(this._HOLIDAYS_CACHE_KEY));
    }
  }

  getDatesLink() {
    return this._baseUrl;
  }
}
