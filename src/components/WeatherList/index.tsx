import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { WeatherListButton } from "./subComponents/WeatherListButton";

import styles from "./styles.module.css";

interface WeatherListProps {
  weatherItems: WeatherListItem[];
  chosenWeatherItemTimestamp: string;
  handleWeatherItemChange: (timestamp: string) => void;
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
                  handleWeatherItemChange(weatherItem.dt_txt)
                }
                isSelected={weatherItem.dt_txt === chosenWeatherItemTimestamp}
                weatherItem={weatherItem}
              />
            </li>
          ))}
        </ol>
      </section>
    );
  }
);
