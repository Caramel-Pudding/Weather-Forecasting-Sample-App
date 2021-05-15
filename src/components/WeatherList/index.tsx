import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { WeatherListButton } from "./subComponents/WeatherListButton";

import styles from "./styles.module.css";

interface WeatherListProps {
  weatherItems: WeatherListItem[];
  chosenWeatherItemTimestamp: number;
  handleWeatherItemChange: (timestamp: number) => void;
}

export const WeatherList: FC<WeatherListProps> = memo(
  ({ weatherItems, chosenWeatherItemTimestamp, handleWeatherItemChange }) => {
    return (
      <section className={styles.container}>
        <ol className={styles.weatherItemsRow}>
          {weatherItems.map((weatherItem: WeatherListItem) => (
            <li key={weatherItem.dt} className={styles.listItem}>
              <WeatherListButton
                handleWeatherItemChange={() =>
                  handleWeatherItemChange(weatherItem.dt)
                }
                isSelected={weatherItem.dt === chosenWeatherItemTimestamp}
                weatherItem={weatherItem}
              />
            </li>
          ))}
        </ol>
      </section>
    );
  }
);
