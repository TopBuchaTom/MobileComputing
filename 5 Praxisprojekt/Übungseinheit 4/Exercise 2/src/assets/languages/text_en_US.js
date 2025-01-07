// Global
const global = {
  app_name: 'GovernmentApp',

  dialog_update_header: 'Update was successful!',

  automatic_text: 'Automatic',
  details_text: 'Details',
  retrieved_text: 'Retrieved',

  button_ok_text: 'OK',
  button_cancel_text: 'Cancel',
  button_yes_text: 'Yes',
  button_no_text: 'No',

  year_text: "Year",

  update_info: 'Info',
  update_last: 'Last update',
  update_next: 'Next update',
  update_details: `
    <p>
      Data is automatically updated on retrieval based on service-specific interval.
    </p>
    <p>
      Additionally, you can manually trigger an update at any time by swiping down or by tapping on a refresh icon, etc.
    </p>
  `,

  error_common_header: 'Error',
  error_common_details: 'An error has occurred.',
}

// App menu
const menu = {
  overview_link: 'Overview',
  search_link: 'Search',
  settings_link: 'Settings',
  about_link: 'About',
}

// Welcome page
const welcome = {
  pageheader: 'Welcome!',
  detailstext: `
    <p>The <b>${global.app_name}</b> is the daily companion for employees in public administration.</p>
    <p>Features include:</p>
    <ul>
      <li>Personal work list</li>
      <li>Flexible addition of work locations via organizations or people</li>
      <li>All important news, events and holidays at a glance</li>
      <li>Daily updates on changes and manual updates by swiping the work list downwards</li>
    </ul>
    <p>Set up the app next to get started right away!</p>
  `,
  setup_button: 'Setup',
}

// Settings page
const settings = {
  pageheader: 'Settings',
  systems_header: 'System',
  systems_language_header: 'Language',
  systems_colorscheme_header: 'Colorscheme',
  customize_header: 'Customize',
  customize_starttab_header: 'Startpage',
  customize_statusbar_header: 'Statusbar',
  customize_swipemenu_header: 'Open navigation by swiping',
  reset_header: 'Reset settings?',
  reset_details: `
    Are you sure you want to delete all settings?<br/><br/>
    This will make you have to set all the settings again from the beginning.
  `,
}

// About page
const about = {
  pageheader: 'About',
  detailstext: `
    <p>The <b>${global.app_name}</b> is a demonstration app for the Mobile Computing lecture by Prof. Dr. Walter Kern.</p>
    <p>It is not intended for productive use, but merely serves as a teaching example for various concepts of mobile app development.</p>
    <p>Publication or productive use of the app is not permitted.</p>
  `,
  feedback_button: 'Feedback',
  feedback_url: `mailto:androidapps@hof-university.de?subject=Feedback about the ${global.app_name}`,
  rate_button: 'Rate',
  rate_url: 'https://www.hof-university.com/',
}

// News page
const news = {
  pageheader: 'News',
  general_tabheader: 'General',
  press_tabheader: 'Press',
}

// Events page
const events = {
  pageheader: 'Events',
  allcategories_text: 'All categories',
  allweeks_text: 'All weeks',
  details_header: 'Event',
  date_text: 'Date',
  category_text: 'Category',
  week_text: 'Week',
}

// Holidays page
const holidays = {
  pageheader: 'Holidays',
}

// Index page
const index = {
  news_tabheader: news.pageheader,
  events_tabheader: events.pageheader,
  holidays_tabheader: holidays.pageheader
}

// Organization page
const organization = {
  pageheader: 'Organizations',
  details_header: 'Organization',
  details_contact_header: 'Contact',
}

// Search page
const search = {
  organization_tabheader: organization.pageheader,
}

export const text_en_US = {
  name: 'English',
  code: 'en-US',
  entries: {
    global,
    menu,
    welcome,
    settings,
    about,
    index,
    news,
    events,
    holidays,
    search,
    organization
  }
}
