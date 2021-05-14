import React, { FC, memo } from "react";

import { WeatherListItem } from "@/types/weather";
import { WeatherListPanel } from "./subComponents/WeatherListPanel";

import styles from "./styles.module.css";

interface WeatherListProps {
  weatherItems: WeatherListItem[];
  handleWeatherItemChange: (timestamp: string) => void;
}

export const WeatherList: FC<WeatherListProps> = memo(
  ({ weatherItems, handleWeatherItemChange }) => {
    return (
      <section>
        <ul className={styles.container}>
          {weatherItems.map((weatherItem: WeatherListItem) => (
            <li key={weatherItem.dt}>
              <WeatherListPanel
                handleWeatherItemChange={() =>
                  handleWeatherItemChange(weatherItem.dt_txt)
                }
                weatherItem={weatherItem}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
);
