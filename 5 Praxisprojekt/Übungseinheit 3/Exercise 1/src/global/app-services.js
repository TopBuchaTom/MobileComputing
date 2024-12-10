// Export base services
export * from "../services/base-services";

// Import main service classes
// import { NewsService } from "../services/main/news-service";
import { DummyNewsService as NewsService } from "../services/_dummy/main/dummy-news-service";
// import { EventsService } from "../services/main/events-service";
import { DummyEventsService as EventsService } from "../services/_dummy/main/dummy-events-service";

// Import other (external) service classes

// Base parameters for services
const bundesregierungServiceUrl = `https://www.bundesregierung.de/service/rss/breg-de`;
const bundestagServiceUrl = `https://www.bundestag.de/static/appdata/includes/rss`;

// Export configured main service instance with standard name
export const newsService = new NewsService(bundesregierungServiceUrl);
export const eventsService = new EventsService(bundestagServiceUrl);

// Export configured other (external) service instance with standard name
