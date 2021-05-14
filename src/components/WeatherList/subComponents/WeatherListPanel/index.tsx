import React, { FC, memo, KeyboardEvent } from "react";

import { WeatherIconSelector } from "@/components/icons/WeatherIconSelector";
import { WeatherListItem } from "@/types/weather";
import { getTimeStringFromWeatherTimestamp } from "@/utilities/weather";
import { convertKelvinToCelsius } from "@/utilities/temperature";
import sharedStyles from "../../../../styles/shared.module.css";
import styles from "./styles.module.css";

interface WeatherListPanelProps {
  weatherItem: WeatherListItem;
  handleWeatherItemChange: () => void;
}

export const WeatherListPanel: FC<WeatherListPanelProps> = memo(
  ({ weatherItem, handleWeatherItemChange }) => {
    const keyboardHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleWeatherItemChange();
      }
    };

    return (
      <button
        className={styles.container}
        type="button"
        onClick={handleWeatherItemChange}
        onKeyDown={keyboardHandler}
      >
        <span className={sharedStyles.additionalText}>
          {getTimeStringFromWeatherTimestamp(weatherItem.dt_txt)}
        </span>
        <WeatherIconSelector weatherType={weatherItem.weather[0].main} />
        <span className={sharedStyles.mainText}>
          {convertKelvinToCelsius(weatherItem.main.temp)}
        </span>
      </button>
    );
  }
);
