import React, { FC, memo } from "react";

import { WeatherSunIcon } from "@/components/icons/WeatherSun";
import sharedStyles from "../../../../styles/shared.module.css";
import styles from "./styles.module.css";

export const WeatherListItem: FC = memo(() => {
  return (
    <div className={styles.container}>
      <span className={sharedStyles.additionalText}>13:00</span>
      <WeatherSunIcon />
      <span className={sharedStyles.mainText}>11</span>
    </div>
  );
});
