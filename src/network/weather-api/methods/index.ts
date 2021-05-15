import { WeatherData } from "@/types/weather";
import { buildWeatherAPIRequestRoute } from "../utilities/link-builders";

export const fetchWeather = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    const res = await fetch(buildWeatherAPIRequestRoute(city));
    // eslint-disable-next-line @typescript-eslint/return-await
    return (await res.json()) as Promise<WeatherData>;
  } catch {
    return null;
  }
};
