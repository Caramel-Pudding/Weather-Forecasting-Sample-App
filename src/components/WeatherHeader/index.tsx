import React, { FC, memo } from "react";
import classnames from "classnames";

import { WeatherSunIcon } from "@/components/icons/WeatherSun";

import sharedStyles from "../../styles/shared.module.css";
import styles from "./styles.module.css";

export const WeatherHeader: FC = memo(() => {
  return (
    <section className={styles.container}>
      <WeatherSunIcon />
      <section>
        <div
          className={classnames(
            sharedStyles.additionalText,
            styles.weatherHeader
          )}
        >
          <span>Clear</span>
          <span>12/2</span>
        </div>
        <span
          className={classnames(sharedStyles.mainText, styles.mainTemperature)}
        >
          12
        </span>
      </section>
      <section>
        <span className={sharedStyles.additionalText}>Munich</span>
        <div className={classnames(sharedStyles.mainText, styles.date)}>
          <div>Thursday</div>
          <div>28. March</div>
        </div>
      </section>
    </section>
  );
});
