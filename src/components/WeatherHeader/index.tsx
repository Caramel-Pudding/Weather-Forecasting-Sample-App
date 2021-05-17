import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { convertUnixTimestampToDate } from "@/utilities/dates";
import { CurrentWeather } from "./subComponents/CurrentWeather";
import { LocationInfo } from "./subComponents/LocationInfo";

import styles from "./styles.module.css";

interface WeatherHeaderProps {
  cityName: string;
  selectedWeatherItem: WeatherListItem;
}

export const WeatherHeader: FC<WeatherHeaderProps> = memo(
  ({ cityName, selectedWeatherItem }) => {
    return (
      <article className={styles.container}>
        <CurrentWeather
          currentTemp={selectedWeatherItem.main.temp}
          currentWeather={selectedWeatherItem.weather[0].main}
          maxTemp={selectedWeatherItem.main.temp_max}
          minTemp={selectedWeatherItem.main.temp_min}
        />
        <LocationInfo
          cityName={cityName}
          currentDate={convertUnixTimestampToDate(selectedWeatherItem.dt)}
        />
      </article>
    );
  }
);
