// Export base services
export * from "../services/base-services";

// Import main service classes
// import { NewsService } from "../services/main/news-service";
import { DummyNewsService as NewsService } from "../services/_dummy/main/dummy-news-service";
// import { EventsService } from "../services/main/events-service";
import { DummyEventsService as EventsService } from "../services/_dummy/main/dummy-events-service";
// import { HolidaysService } from "../services/main/holidays-service";
import { DummyHolidaysService as HolidaysService } from "../services/_dummy/main/dummy-holidays-service";
// import { OrganizationsService } from "../services/main/organizations-service";
import { DummyOrganizationsService as OrganizationsService } from "../services/_dummy/main/dummy-organizations-service";
// import { PersonsService } from "../services/main/persons-service";
import { DummyPersonsService as PersonsService } from "../services/_dummy/main/dummy-persons-service";
// import { WorkService } from "../services/main/work-service";
import { DummyWorkService as WorkService } from "../services/_dummy/main/dummy-work-service";


// Import other (external) service classes

// Base parameters for services
const bundesregierungServiceUrl = `https://www.bundesregierung.de/service/rss/breg-de`;
const bundestagServiceUrl = `https://www.bundestag.de/static/appdata/includes/rss`;
const feiertageServiceUrl = `https://feiertage-api.de`;
const personServiceUrl = `https://jsonplaceholder.typicode.com`;
const organizationServiceUrl = personServiceUrl;

// Export configured main service instance with standard name
export const newsService = new NewsService(bundesregierungServiceUrl);
export const eventsService = new EventsService(bundestagServiceUrl);
export const holidaysService = new HolidaysService(feiertageServiceUrl);
export const organizationService = new OrganizationsService(organizationServiceUrl);
export const personsService = new PersonsService(personServiceUrl);
export const workService = new WorkService();

// Export configured other (external) service instance with standard name
