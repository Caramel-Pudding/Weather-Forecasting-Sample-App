import React from "react";
import { render } from "@/tests/test-utils";

import { WeatherData } from "@/types/weather";
import Home from "..";
import { weatherDataStub } from "./stubs";

describe("The Home Page Component", () => {
  it("should have exactly 1 `main` section", () => {
    // The getByRole will error if there are less or more than 1 element found
    const { getByRole } = render(
      <Home weatherData={weatherDataStub as WeatherData} />,
      {}
    );
    const main = getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
