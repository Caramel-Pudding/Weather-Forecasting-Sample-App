import React from "react";
import { render, cleanup } from "@/tests/test-utils";

import { weatherDataStub } from "@/tests/stubs";
import { WeatherListItem } from "@/types/weather";
import { WeatherHeader } from "..";

describe("WeatherHeader Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const { container } = render(
      <WeatherHeader
        cityName={weatherDataStub.city.name}
        selectedWeatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    // * #TEST: ASSERT
    expect(container).toMatchSnapshot();
  });
});
