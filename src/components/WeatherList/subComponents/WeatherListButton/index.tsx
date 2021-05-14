import React, { FC, memo, KeyboardEvent } from "react";
import classnames from "classnames";

import { WeatherIconSelector } from "@/components/WeatherIconSelector";
import { WeatherListItem } from "@/types/weather";
import { getTimeAsTextFromTimestamp } from "@/utilities/dates";
import { convertKelvinToCelsius } from "@/utilities/temperature";

import sharedStyles from "../../../../styles/shared.module.css";
import styles from "./styles.module.css";

interface WeatherListButtonProps {
  weatherItem: WeatherListItem;
  isSelected: boolean;
  handleWeatherItemChange: () => void;
}

export const WeatherListButton: FC<WeatherListButtonProps> = memo(
  ({ weatherItem, handleWeatherItemChange, isSelected }) => {
    const keyboardHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleWeatherItemChange();
      }
    };

    return (
      <button
        className={classnames(
          styles.container,
          isSelected ? styles.containerActive : styles.containerInactive
        )}
        type="button"
        onClick={handleWeatherItemChange}
        onKeyDown={keyboardHandler}
      >
        <span className={sharedStyles.additionalText}>
          {getTimeAsTextFromTimestamp(new Date(weatherItem.dt_txt))}
        </span>
        <WeatherIconSelector weatherType={weatherItem.weather[0].main} />
        <span className={styles.temperature}>
          {`${convertKelvinToCelsius(weatherItem.main.temp)}°`}
        </span>
      </button>
    );
  }
);
