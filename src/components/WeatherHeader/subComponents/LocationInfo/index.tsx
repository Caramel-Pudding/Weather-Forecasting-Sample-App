import React, { FC, memo } from "react";
import classnames from "classnames";

import {
  getDayAsTextFromTimestamp,
  getMonthAsTextFromTimestamp,
} from "@/utilities/dates";
import sharedStyles from "../../../../styles/shared.module.css";
import styles from "../../styles.module.css";

interface LocationInfoProps {
  cityName: string;
  currentDate: Date;
}

export const LocationInfo: FC<LocationInfoProps> = memo(
  ({ cityName, currentDate }) => {
    return (
      <section>
        <span className={sharedStyles.additionalText}>{cityName}</span>
        <div className={classnames(sharedStyles.mainText, styles.date)}>
          <div>{getDayAsTextFromTimestamp(currentDate)}</div>
          <div>
            {`${currentDate.getDate()}. ${getMonthAsTextFromTimestamp(
              currentDate
            )}`}
          </div>
        </div>
      </section>
    );
  }
);
