// Import app-related service classes
import { ColorschemeService } from "./core/colorscheme-service";
import { LanguageService } from "./core/language-service";
import { RouterService } from "./core/router-service";
import { StorageService } from "../services/core/storage-service";
import { SettingsService  } from "./core/settings-service";
// import { DummyColorschemeService as ColorschemeService } from "../services/_dummy/core/dummy-colorscheme-service";
// import { DummyLanguageService as LanguageService } from "../services/_dummy/core/dummy-language-service";
// import { DummyRouterService as RouterService } from "../services/_dummy/core/dummy-router-service";
// import { DummyStorageService as StorageService } from "./_dummy/core/dummy-storage-service";
// import { DummySettingsService as SettingsService  } from "../services/_dummy/core/dummy-settings-service";

// Export configured app-related service instance with standard name
export const colorschemeService = new ColorschemeService();
export const languageService = new LanguageService();
export const routerService = new RouterService();
export const storageService = new StorageService();
export const settingsService = new SettingsService();
