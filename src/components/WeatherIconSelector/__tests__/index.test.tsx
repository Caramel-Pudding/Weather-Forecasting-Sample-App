import React from "react";
import { render, cleanup } from "@/tests/test-utils";

import { WeatherType } from "@/types/weather";

import { WeatherIconSelector } from "..";

describe("WeatherIconSelector Component", () => {
  afterEach(cleanup);

  it("Should render clear icon if weather is clear", () => {
    // * #TEST: ARRANGE
    const { container, getByAltText } = render(
      <WeatherIconSelector weatherType={WeatherType.Clear} />,
      {}
    );
    const icon = getByAltText("Clear");
    // * #TEST: ASSERT
    expect(icon).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Should render cloudy icon if weather is rainy", () => {
    // * #TEST: ARRANGE
    const { container, getByAltText } = render(
      <WeatherIconSelector weatherType={WeatherType.Rain} />,
      {}
    );
    const icon = getByAltText("Cloudy");
    // * #TEST: ASSERT
    expect(icon).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
