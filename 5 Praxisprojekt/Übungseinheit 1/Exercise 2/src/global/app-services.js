// Export base services
export * from "../services/base-services";

// Import main service classes
// import { NewsService } from "../services/main/news-service";
import { DummyNewsService as NewsService } from "../services/_dummy/main/dummy-news-service";

// Import other (external) service classes

// Base parameters for services
const bundesregierungServiceUrl = `https://www.bundesregierung.de/service/rss/breg-de`;

// Export configured main service instance with standard name
export const newsService = new NewsService(bundesregierungServiceUrl);

// Export configured other (external) service instance with standard name
