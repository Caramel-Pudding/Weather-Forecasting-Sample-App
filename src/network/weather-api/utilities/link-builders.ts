import { apiKeyStoredInACompleteSecurity } from "@/consts/mocked";
import { weatherAPIBasicRoute } from "../consts/routes";

export const buildWeatherAPIRequestRoute = (query: string): string =>
  `${weatherAPIBasicRoute}/data/2.5/forecast?q=${query}&appid=${apiKeyStoredInACompleteSecurity}`;
