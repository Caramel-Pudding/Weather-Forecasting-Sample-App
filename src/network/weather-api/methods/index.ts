import { WeatherData } from "@/types/weather";
import { buildWeatherAPIRequestRoute } from "../utilities/link-builders";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const res = await fetch(buildWeatherAPIRequestRoute(city));
  return res.json() as Promise<WeatherData>;
};
