import { WeatherListItem } from "@/types/weather";

export const getWeatherListForToday = (
  weatherList: WeatherListItem[]
): WeatherListItem[] => {
  if (!weatherList || weatherList.length === 0) {
    return [];
  }
  const todayDate = new Date(weatherList[0].dt_txt).getDate();
  return weatherList.filter(
    (listItem) => new Date(listItem.dt_txt).getDate() === todayDate
  );
};

export const getTimeStringFromWeatherTimestamp = (
  weatherTimestamp: string
): string => {
  const timestamp = new Date(weatherTimestamp);
  return `${timestamp.getHours()}:00`;
};
