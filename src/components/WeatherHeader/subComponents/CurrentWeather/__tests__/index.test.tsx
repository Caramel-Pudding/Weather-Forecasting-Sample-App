import React from "react";
import { render, cleanup } from "@/tests/test-utils";

import { weatherDataStub } from "@/tests/stubs";
import { WeatherType } from "@/types/weather";
import { CurrentWeather } from "..";

describe("CurrentWeather Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const selectedWeatherItem = weatherDataStub.list[0];
    const { container, getByText, getByAltText } = render(
      <CurrentWeather
        currentTemp={selectedWeatherItem.main.temp}
        currentWeather={selectedWeatherItem.weather[0].main as WeatherType}
        maxTemp={selectedWeatherItem.main.temp_max}
        minTemp={selectedWeatherItem.main.temp_min}
      />,
      {}
    );
    const weather = getByText("Clear");
    const minMaxTemperature = getByText("14° / 8°");
    const temperature = getByText("14°");
    const icon = getByAltText("Clear");
    // * #TEST: ASSERT
    expect(weather).toBeInTheDocument();
    expect(minMaxTemperature).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
