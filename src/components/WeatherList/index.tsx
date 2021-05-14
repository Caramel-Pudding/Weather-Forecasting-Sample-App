import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { WeatherListButton } from "./subComponents/WeatherListButton";

import styles from "./styles.module.css";

interface WeatherListProps {
  weatherItems: WeatherListItem[];
  chosenWeatherItem: WeatherListItem;
  handleWeatherItemChange: (timestamp: string) => void;
}

export const WeatherList: FC<WeatherListProps> = memo(
  ({ weatherItems, chosenWeatherItem, handleWeatherItemChange }) => {
    return (
      <section className={styles.container}>
        <ol className={styles.weatherItemsRow}>
          {weatherItems.map((weatherItem: WeatherListItem) => (
            <li key={weatherItem.dt} className={styles.listItem}>
              <WeatherListButton
                handleWeatherItemChange={() =>
                  handleWeatherItemChange(weatherItem.dt_txt)
                }
                isSelected={chosenWeatherItem.dt_txt === weatherItem.dt_txt}
                weatherItem={weatherItem}
              />
            </li>
          ))}
        </ol>
      </section>
    );
  }
);
