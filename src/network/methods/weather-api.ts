import { WeatherData } from "@/types/weather";
import { weatherAPIBasicRoute } from "../consts/routes";

export const fetchWeather = async (): Promise<WeatherData> => {
  const res = await fetch(
    `${weatherAPIBasicRoute}/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`
  );
  return res.json() as Promise<WeatherData>;
};
