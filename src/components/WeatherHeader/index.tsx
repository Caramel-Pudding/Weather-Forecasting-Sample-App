import React, { FC, memo } from "react";

import { WeatherListItem, City } from "@/types/weather";
import { convertUnixTimestampToDate } from "@/utilities/dates";
import { CurrentWeather } from "./subComponents/CurrentWeather";
import { LocationInfo } from "./subComponents/LocationInfo";

import styles from "./styles.module.css";

interface WeatherHeaderProps {
  city: City;
  chosenWeatherItem: WeatherListItem;
}

export const WeatherHeader: FC<WeatherHeaderProps> = memo(
  ({ city, chosenWeatherItem }) => {
    return (
      <article className={styles.container}>
        <CurrentWeather
          currentTemp={chosenWeatherItem.main.temp}
          currentWeather={chosenWeatherItem.weather[0].main}
          maxTemp={chosenWeatherItem.main.temp_max}
          minTemp={chosenWeatherItem.main.temp_min}
        />
        <LocationInfo
          cityName={city.name}
          currentDate={convertUnixTimestampToDate(chosenWeatherItem.dt)}
        />
      </article>
    );
  }
);
