import React, { FC, memo } from "react";

import { WeatherType } from "@/types/weather";
import { WeatherSunIcon } from "../WeatherSun";
import { WeatherCloudIcon } from "../WeatherCloud";

interface WeatherIconSelectorProps {
  weatherType: WeatherType;
}

export const WeatherIconSelector: FC<WeatherIconSelectorProps> = memo(
  ({ weatherType }) => {
    switch (weatherType) {
      case WeatherType.Clear: {
        return <WeatherSunIcon />;
      }
      case WeatherType.Rain:
      default: {
        return <WeatherCloudIcon />;
      }
    }
  }
);
