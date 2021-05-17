import React, { FC, memo } from "react";

import { WeatherType } from "@/types/weather";

interface WeatherIconSelectorProps {
  weatherType: WeatherType;
}

export const WeatherIconSelector: FC<WeatherIconSelectorProps> = memo(
  ({ weatherType }) => {
    switch (weatherType) {
      case WeatherType.Clear: {
        return <img alt="Clear" src="icons/weather-sun.svg" />;
      }
      case WeatherType.Rain:
      default: {
        return <img alt="Cloudy" src="icons/weather-cloud.svg" />;
      }
    }
  }
);
