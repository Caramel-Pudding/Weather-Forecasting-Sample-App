import React, { FC, memo } from "react";

import { WeatherListItem } from "./subComponents/WeatherListItem";

import styles from "./styles.module.css";

export const WeatherList: FC = memo(() => {
  return (
    <section>
      <ul className={styles.container}>
        <li>
          <WeatherListItem />
        </li>
        <li>
          <WeatherListItem />
        </li>
        <li>
          <WeatherListItem />
        </li>
      </ul>
    </section>
  );
});
