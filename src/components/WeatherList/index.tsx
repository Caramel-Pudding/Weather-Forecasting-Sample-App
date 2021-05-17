import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { WeatherListButton } from "./subComponents/WeatherListButton";

import styles from "./styles.module.css";

export interface WeatherListProps {
  weatherItems: WeatherListItem[];
  selectedWeatherItemTimestamp: number;
  handleWeatherItemChange: (timestamp: number) => void;
}

export const WeatherList: FC<WeatherListProps> = memo(
  ({ weatherItems, selectedWeatherItemTimestamp, handleWeatherItemChange }) => {
    return (
      <section className={styles.container}>
        <ol className={styles.weatherItemsRow}>
          {weatherItems.map((weatherItem: WeatherListItem) => (
            <li key={weatherItem.dt} className={styles.listItem}>
              <WeatherListButton
                handleWeatherItemChange={() =>
                  handleWeatherItemChange(weatherItem.dt)
                }
                isSelected={weatherItem.dt === selectedWeatherItemTimestamp}
                weatherItem={weatherItem}
              />
            </li>
          ))}
        </ol>
      </section>
    );
  }
);
