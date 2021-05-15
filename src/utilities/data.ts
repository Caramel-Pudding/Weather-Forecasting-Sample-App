import { WeatherListItem } from "@/types/weather";
import { convertUnixTimestampToDate } from "./dates";

export const getWeatherListForToday = (
  weatherList: WeatherListItem[]
): WeatherListItem[] => {
  if (!weatherList || weatherList.length === 0) {
    return [];
  }

  const todayDate = convertUnixTimestampToDate(weatherList[0].dt).getDate();
  return weatherList.filter(
    (listItem) =>
      convertUnixTimestampToDate(listItem.dt).getDate() === todayDate
  );
};
