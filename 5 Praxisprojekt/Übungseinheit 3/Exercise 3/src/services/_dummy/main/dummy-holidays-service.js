import { HolidaysService } from "../../main/holidays-service";

export class DummyHolidaysService extends HolidaysService {
    async _retrieveDates(year) {
        const holidays = JSON.parse(JSON.stringify(testHolidays));
        for (const holidayName in holidays) {
            holidays[holidayName].datum = holidays[holidayName].datum.replace("2024", year);
        }

        return holidays;
    }
}

const testHolidays = {
    "Neujahrstag": {
        "datum": "2024-01-01",
        "hinweis": ""
    },
    "Heilige Drei Könige": {
        "datum": "2024-01-06",
        "hinweis": ""
    },
    "Karfreitag": {
        "datum": "2024-03-29",
        "hinweis": ""
    },
    "Ostermontag": {
        "datum": "2024-04-01",
        "hinweis": ""
    },
    "Tag der Arbeit": {
        "datum": "2024-05-01",
        "hinweis": ""
    },
    "Christi Himmelfahrt": {
        "datum": "2024-05-09",
        "hinweis": ""
    },
    "Pfingstmontag": {
        "datum": "2024-05-20",
        "hinweis": ""
    },
    "Fronleichnam": {
        "datum": "2024-05-30",
        "hinweis": ""
    },
    "Augsburger Friedensfest": {
        "datum": "2024-08-08",
        "hinweis": "Das Augsburger Friedensfest ist nur im Stadtgebiet Augsburg (nicht jedoch im angrenzenden Umland) gesetzlicher Feiertag (Art. 1 Abs. 2 Bayerisches Feiertagsgesetz[7])."
    },
    "Mariä Himmelfahrt": {
        "datum": "2024-08-15",
        "hinweis": "Mariä Himmelfahrt ist in Bayern in von den derzeit 1704[8] (Zensus 2011, bis 2013: 1700) Gemeinden mit überwiegend katholischer Bevölkerung gesetzlicher Feiertag, in den restlichen 352 (Zensus 2011, bis 2013: 356) Gemeinden nicht. Gemäß Art. 1 Abs. 3 des Bayerischen Feiertagsgesetzes[7] ist es Aufgabe des Bayerischen Landesamtes für Statistik und Datenverarbeitung, festzustellen, in welchen Gemeinden Mariä Himmelfahrt gesetzlicher Feiertag ist. Die aktuelle Festlegung beruht auf dem Ergebnis der letzten in der Bundesrepublik Deutschland durchgeführten Volkszählung vom 25. Mai 1987. Gemäß Art 4. Abs. 3 des Bayerischen Feiertagsgesetzes entfällt im gesamten Bundesland zu Mariä Himmelfahrt an Schulen aller Gattungen der Unterricht. Diese Festlegung gilt ausdrücklich auch in den Teilen Bayerns, in denen dieser Tag kein gesetzlicher Feiertag ist. Eine Übersichtskarte aller Gemeinden, in denen Mariä Himmelfahrt ein Feiertag ist, kann beim Bayerischen Landesamt für Statistik und Datenverarbeitung heruntergeladen werden (Link siehe unter \"Weitere Weblinks\")."
    },
    "Tag der Deutschen Einheit": {
        "datum": "2024-10-03",
        "hinweis": ""
    },
    "Allerheiligen": {
        "datum": "2024-11-01",
        "hinweis": ""
    },
    "Buß- und Bettag": {
        "datum": "2024-11-20",
        "hinweis": "Gemäß Art. 4 Nr. 3 des Bayerischen Feiertagsgesetzes[7] entfällt im gesamten Bundesland am Buß- und Bettag an allen Schulen der Unterricht."
    },
    "1. Weihnachtstag": {
        "datum": "2024-12-25",
        "hinweis": ""
    },
    "2. Weihnachtstag": {
        "datum": "2024-12-26",
        "hinweis": ""
    }
}
