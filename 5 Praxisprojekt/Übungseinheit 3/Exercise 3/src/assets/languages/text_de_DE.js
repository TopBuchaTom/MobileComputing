// App global
const global = {
  app_name: 'GovernmentApp',

  dialog_update_header: 'Aktualisierung war erfolgreich!',

  automatic_text: 'Automatisch',
  details_text: 'Details',
  retrieved_text: 'Abgerufen',

  button_ok_text: 'OK',
  button_cancel_text: 'Abbrechen',
  button_yes_text: 'Ja',
  button_no_text: 'Nein',

  year_text: "Jahr",

  update_info: 'Info',
  update_last: 'Letzte Aktualisierung',
  update_next: 'Nächste Aktualisierung',
  update_details: `
    <p>
      Daten werden automatisch bei Abruf aktualisiert auf Basis von Service-spezifischem Intervall.
    </p>
    <p>
      Zusätzlich können Sie jederzeit manuell ein Update triggern, indem Sie nach unten swipen
      oder auf ein Refresh Icon touchen usw.
    </p>
  `,

  error_common_header: 'Fehler',
  error_common_details: 'Es ist ein Fehler aufgetreten.',
}

// App menu
const menu = {
  overview_link: 'Übersicht',
  settings_link: 'Einstellungen',
  about_link: 'Über die App',
}

// Welcome page
const welcome = {
  pageheader: 'Willkommen!',
  detailstext: `
    <p>Die <b>${global.app_name}</b> ist der tägliche Begleiter für Mitarbeiter/-innen in der öff. Verwaltung.</p>
    <p>Features sind u.a.:</p>
    <ul>
      <li>Persönliche Arbeitsliste</li>
      <li>Flexibles Hinzufügen von Arbeitsorten über Organisationen oder Personen</li>
      <li>Alle wichtigen News, Events und Feiertage auf einen Blick</li>
      <li>Tägliche Updates zu Änderungen und manuelle Updates durch Swipe der Arbeitsliste nach unten</li>
    </ul>
    <p>Richten Sie die App als Nächstes ein, um direkt loszustarten!</p>
  `,
  setup_button: 'Einrichten',
}

// Settings page
const settings = {
  pageheader: 'Einstellungen',
  systems_header: 'System',
  systems_language_header: 'Sprache',
  systems_colorscheme_header: 'Farbschema',
  customize_header: 'Anpassen',
  customize_starttab_header: 'Startseite',
  customize_statusbar_header: 'Statusleiste',
  customize_swipemenu_header: 'Menü via Wischen öffnen',
  reset_header: 'Einstellungen zurücksetzen?',
  reset_details: `
    Sind Sie sicher, dass Sie alle Einstellungen löschen wollen?<br/><br/>
    Dadurch müssen Sie nochmal von vorne alle Einstellungen festlegen.
  `,
}

// About page
const about = {
  pageheader: 'Über die App',
  detailstext: `
    <p>Die <b>${global.app_name}</b> ist eine Demonstrationsapp zur Vorlesung Mobile Computing von Prof. Dr. Walter Kern.</p>
    <p>Sie ist nicht für den produktiven Einsatz vorgesehen, sondern fungiert lediglich als Lehrbeispiel für verschiedene Konzepte der mobilen App-Entwicklung.</p>
    <p>Eine Veröffentlichung bzw. ein produktiver Einsatz der App ist nicht gestattet.</p>
  `,
  feedback_button: 'Feedback',
  feedback_url: `mailto:androidapps@hof-university.de?subject=Feedback zur ${global.app_name}`,
  rate_button: 'Bewerten',
  rate_url: 'https://www.hof-university.com/',
}

// News page
const news = {
  pageheader: 'News',
  general_tabheader: 'Allgemein',
  press_tabheader: 'Presse',
}

// Events page
const events = {
  pageheader: 'Events',
  allcategories_text: 'Alle Kategorien',
  allweeks_text: 'Alle Wochen',
  details_header: 'Event',
  date_text: 'Datum',
  category_text: 'Kategorie',
  week_text: 'Woche',
}


// Holidays page
const holidays = {
  pageheader: 'Feiertage',
}

// Index page
const index = {
  news_tabheader: news.pageheader,
  events_tabheader: events.pageheader,
  holidays_tabheader: holidays.pageheader
}

export const text_de_DE = {
  name: 'Deutsch',
  code: 'de-DE',
  entries: {
    global,
    menu,
    welcome,
    settings,
    about,
    index,
    news,
    events,
    holidays
  }
}
