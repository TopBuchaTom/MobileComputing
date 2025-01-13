export class DateUtil {
    static getWeekDayDate(date, weekDay) {  
        // On sundays, continue with monday of week
        if (date.getDay() == 0)
            date.setDate(date.getDate() - 6);

        // Calculate monday of week
        date.setDate(date.getDate() - date.getDay() + 1);

        // Calculate specific day of week
        if (weekDay > 0)
            date.setDate(date.getDate() + weekDay);

        return date;
    }

    static getWeekStartDate(date = new Date()) {  
        return DateUtil.getWeekDayDate(date, 0);
    }
    
    static getWeekEndDate(date = new Date()) {
        return DateUtil.getWeekDayDate(date, 6);
    }

    static getWeekDates(start, end) {
        const arr=[];

        for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1))
            arr.push(dt.getTime());

        return arr;
    }

    static isDateInWeek(date, weekDate = new Date()) {
        return date >= DateUtil.getWeekStartDate(weekDate) && date <= DateUtil.getWeekEndDate(weekDate);
    }

    static getWeekNumber(date) {
        const onejan = new Date(date.getFullYear(), 0, 4);
        return Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }

    static getDayName(index, language) {
        const date = new Date();
        date.setHours(12);
    
        // On sundays, continue with monday of week
        if (date.getDay() == 0)
          date.setDate(date.getDate() - 6);
    
        // Calculate monday of week
        date.setDate(date.getDate() - date.getDay() + 1);
    
        // Calculate specific day
        date.setDate(date.getDate() + index);
    
        return date.toLocaleString(language, { weekday: 'long', timeZone: 'UTC' });
    }

    static parseDate(dateString) {
        const [day, month, year] = dateString.trim().split(".");

        if (year) // Date format dd.MM.yyyy?
            return new Date(parseInt(year), parseInt(month)-1 , parseInt(day));
        else
            return new Date(dateString.trim());
    }

    static parseTime(timeString) {
        return timeString.split(":").map(part => parseInt(part));
    }

    static getYear(date = new Date()) {
        return date.getFullYear();
    }

    static getMonthName(date = new Date(), language) {
        return date.toLocaleString(language, { month: 'long', timeZone: 'UTC' });
    }

    static toShortDateString(date = new Date()) {
        if (typeof date == "string") date = new Date(date);

        return `${this._getNormalizedDatePart(date.getDate())}.${this._getNormalizedDatePart(date.getMonth()+1)}.${date.getFullYear()}`;
    }

    static toShortTimeString(date = new Date()) {
        if (typeof date == "string") date = new Date(date);

        return `${this._getNormalizedDatePart(date.getHours())}:${this._getNormalizedDatePart(date.getMinutes())}`;
    }

    static toIsoDateString(date) {
        date.setHours(12); // Update because toISOString() does not always work because of time zone

        return date.toISOString().split('T')[0];
    }

    static toIcalString(date) {   
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const df = new Intl.DateTimeFormat('de-DE', { timeStyle: 'short', timeZone: 'Europe/Berlin' });
        const dfUtc = new Intl.DateTimeFormat('de-DE', { timeStyle: 'short', timeZone: 'UTC' });

        const utcDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
        const hoursTimezoneUtc = parseInt(dfUtc.format(utcDate));
        const hoursTimezoneTimetable = parseInt(df.format(utcDate));
        const hoursOffset = hoursTimezoneTimetable - hoursTimezoneUtc;

        const utcDateNormalized = new Date(Date.UTC(year, month, day, hours - hoursOffset, minutes, seconds))
               
        return utcDateNormalized.toISOString().replaceAll("-", "").replaceAll(":", "").substring(0, 15) + "Z";
    }

    static _getNormalizedDatePart(part) {
        return (part < 10) ? `0${part}` : part;
    }
}