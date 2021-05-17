import React, { FC, memo } from "react";
import classnames from "classnames";

import { WeatherType } from "@/types/weather";
import { WeatherIconSelector } from "@/components/WeatherIconSelector";
import { convertKelvinToCelsius } from "@/utilities/temperature";

import { currentTemperatureTestId } from "@/consts/test-ids";
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
      <article className={styles.container}>
        <section className={styles.imageWrapper}>
          <WeatherIconSelector weatherType={currentWeather} />
        </section>
        <section
          className={styles.weatherWrapper}
          data-testid={currentTemperatureTestId}
        >
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
          <div
            className={classnames(
              sharedStyles.mainText,
              styles.mainTemperature
            )}
          >
            {`${convertKelvinToCelsius(currentTemp)}°`}
          </div>
        </section>
      </article>
    );
  }
);
