import React, { FC, memo } from "react";
import classnames from "classnames";

import { WeatherType } from "@/types/weather";

import { convertKelvinToCelsius } from "@/utilities/temperature";
import sharedStyles from "../../../../styles/shared.module.css";
import styles from "./styles.module.css";

interface CurrentWeatherProps {
  currentWeather: WeatherType;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
}

export const CurrentWeather: FC<CurrentWeatherProps> = memo(
  ({ currentWeather, currentTemp, maxTemp, minTemp }) => {
    return (
      <section className={styles.container}>
        <div
          className={classnames(
            sharedStyles.additionalText,
            styles.weatherHeader
          )}
        >
          <span>{currentWeather}</span>
          <span>
            {`${convertKelvinToCelsius(maxTemp)}° / ${convertKelvinToCelsius(
              minTemp
            )}°`}
          </span>
        </div>
        <span
          className={classnames(sharedStyles.mainText, styles.mainTemperature)}
        >
          {`${convertKelvinToCelsius(currentTemp)}°`}
        </span>
      </section>
    );
  }
);
