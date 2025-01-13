// Import global extensions and polyfills
import './global/app-extensions';

// Import global components
import './global/app-components';

// Import global scripts that are used in index.html and pages
import './global/app-routing';
import './global/app-menu';

// Import services
import { storageService, settingsService, colorschemeService, languageService, routerService } from './global/app-services'

// Apply settings service
settingsService.applyStorage(storageService);

// Apply language service
import { text_de_DE } from './assets/languages/text_de_DE';
import { text_en_US } from './assets/languages/text_en_US';
languageService.applyStorage(storageService);
languageService.register(text_en_US);
languageService.register(text_de_DE);
languageService.applyLanguage(settingsService.getLanguage());
languageService.setOnSystemLanguageChangeCallback(() => {
  // Only if automatic mode is active, apply system language to app
  if (settingsService.getLanguage() == "")
    languageService.applyLanguage();
});

// Apply colorscheme service
colorschemeService.applyColorscheme(settingsService.getColorscheme());
colorschemeService.setOnSystemColorschemeChangeCallback(() => {
  // Only if automatic mode is active, apply system colorscheme to app
  if (settingsService.getColorscheme() == "")
    colorschemeService.applyColorscheme();
});

// Apply router service
routerService.applyNavigationHandler(() => {
  // Close progress indication and menu if user navigates
  routerService.closeNavigationMenu();
  routerService.closeAlertConfirms();

  routerService.getPage()?.navigationUpdate?.();

  // Skip dialogs
  if (document.location.href.includes("select=true"))
    history.back();
});
routerService.applyVisibilityChangeHandler((visible) => {
  // Update UI on visibility change
  routerService.getPage()?.visibilityUpdate?.(visible);
});
routerService.applyErrorHandler((error) => {
  // Close progress indication and menu
  routerService.closeAllProgresses();
  routerService.closeNavigationMenu();
  routerService.closeAlertConfirms();

  // Show error info
  let details = languageService.text.global.error_common_details;
  if (routerService.isDebugging()) { // Show details?
    details = error.message ?? error;
    if (error.stack)
      details += `<br/><br/>${error.stack}`;
  }
  routerService.openAlert(languageService.text.global.error_common_header,
    details, languageService.text.global.button_ok_text);
});

