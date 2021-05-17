import React from "react";
import { render, cleanup } from "@/tests/test-utils";

import { WeatherListItem } from "@/types/weather";

import { weatherDataStub } from "@/tests/stubs";
import { WeatherList } from "..";

describe("WeatherList Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const { container } = render(
      <WeatherList
        handleWeatherItemChange={(): void => {}}
        selectedWeatherItemTimestamp={weatherDataStub.list[0].dt}
        weatherItems={weatherDataStub.list as WeatherListItem[]}
      />,
      {}
    );
    // * #TEST: ASSERT
    expect(container).toMatchSnapshot();
  });

  it("Should render amount of buttons equal to amount of incoming list items", () => {
    // * #TEST: ARRANGE
    const { container, getAllByRole } = render(
      <WeatherList
        handleWeatherItemChange={(): void => {}}
        selectedWeatherItemTimestamp={weatherDataStub.list[0].dt}
        weatherItems={weatherDataStub.list as WeatherListItem[]}
      />,
      {}
    );
    const allListButtons = getAllByRole("button");
    // * #TEST: ASSERT
    expect(allListButtons).toHaveLength(36);
    expect(container).toMatchSnapshot();
  });

  it("Should render no buttons if there's no list items", () => {
    // * #TEST: ARRANGE
    const { container, queryAllByRole } = render(
      <WeatherList
        handleWeatherItemChange={(): void => {}}
        selectedWeatherItemTimestamp={weatherDataStub.list[0].dt}
        weatherItems={[] as WeatherListItem[]}
      />,
      {}
    );
    const allListButtons = queryAllByRole("button");
    // * #TEST: ASSERT
    expect(allListButtons).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
