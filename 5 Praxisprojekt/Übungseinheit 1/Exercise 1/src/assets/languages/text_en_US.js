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
  settings_link: 'Settings',
  about_link: 'About',
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

// Index page
const index = {
  news_tabheader: news.pageheader,  
}

export const text_en_US = {
  name: 'English',
  code: 'en-US',
  entries: {
    global,
    menu,
    settings,
    about,
    index,
    news,
  }
}
