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

// Index page
const index = {
  news_tabheader: news.pageheader,
}

export const text_de_DE = {
  name: 'Deutsch',
  code: 'de-DE',
  entries: {
    global,
    menu,
    settings,
    about,
    index,
    news,
  }
}
