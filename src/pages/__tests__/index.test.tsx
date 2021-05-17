import React from "react";
import { render, cleanup, fireEvent } from "@/tests/test-utils";

import { WeatherData } from "@/types/weather";
import { weatherDataStub } from "@/tests/stubs";
import {
  errorMainTestId,
  homeMainTestId,
  currentTemperatureTestId,
} from "@/consts/test-ids";
import { convertKelvinToCelsius } from "@/utilities/temperature";
import Home from "..";

describe("The Home Page Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const { getByTestId, queryAllByRole } = render(
      <Home weatherData={weatherDataStub as WeatherData} />,
      {}
    );
    const main = getByTestId(homeMainTestId);
    const currentTemperature = getByTestId(currentTemperatureTestId);
    const allListButtons = queryAllByRole("button") as HTMLElement[];
    // * #TEST: ASSERT
    expect(main).toBeInTheDocument();
    expect(currentTemperature).toHaveTextContent(
      String(convertKelvinToCelsius(weatherDataStub.list[0].main.temp))
    );
    expect(allListButtons).toHaveLength(3);
    expect(allListButtons[0]).toHaveClass("containerActive");
    expect(main).toMatchSnapshot();
  });

  it("Should show 404 if there's no data", () => {
    // * #TEST: ARRANGE
    const { getByTestId } = render(
      <Home weatherData={null as unknown as WeatherData} />,
      {}
    );
    const main = getByTestId(errorMainTestId);
    // * #TEST: ASSERT
    expect(main).toBeInTheDocument();
    expect(main).toMatchSnapshot();
  });

  it("Should show 404 if there's invalid data", () => {
    // * #TEST: ARRANGE
    const { getByTestId } = render(
      <Home weatherData={{} as WeatherData} />,
      {}
    );
    const main = getByTestId(errorMainTestId);
    // * #TEST: ASSERT
    expect(main).toBeInTheDocument();
    expect(main).toMatchSnapshot();
  });

  it("Should properly change selected on click on other weather item", () => {
    // * #TEST: ARRANGE
    const { container, queryAllByRole, getByTestId } = render(
      <Home weatherData={weatherDataStub as WeatherData} />,
      {}
    );
    const allListButtons = queryAllByRole("button") as HTMLElement[];
    const currentTemperature = getByTestId(currentTemperatureTestId);
    // * #TEST: ASSERT
    expect(allListButtons).toHaveLength(3);
    expect(currentTemperature).toHaveTextContent(
      String(convertKelvinToCelsius(weatherDataStub.list[0].main.temp))
    );
    expect(allListButtons[0]).toHaveClass("containerActive");
    expect(allListButtons[1]).toHaveClass("containerInactive");
    expect(container).toMatchSnapshot();
    // * #TEST: ACT
    fireEvent.click(allListButtons[1]);
    // * #TEST: ASSERT
    expect(currentTemperature).toHaveTextContent(
      String(convertKelvinToCelsius(weatherDataStub.list[1].main.temp))
    );
    expect(allListButtons[0]).toHaveClass("containerInactive");
    expect(allListButtons[1]).toHaveClass("containerActive");
    expect(container).toMatchSnapshot();
  });

  it("Should not change selected on click on the same weather item", () => {
    // * #TEST: ARRANGE
    const { container, queryAllByRole, getByTestId } = render(
      <Home weatherData={weatherDataStub as WeatherData} />,
      {}
    );
    const allListButtons = queryAllByRole("button") as HTMLElement[];
    const currentTemperature = getByTestId(currentTemperatureTestId);
    // * #TEST: ASSERT
    expect(allListButtons).toHaveLength(3);
    expect(currentTemperature).toHaveTextContent(
      String(convertKelvinToCelsius(weatherDataStub.list[0].main.temp))
    );
    expect(allListButtons[0]).toHaveClass("containerActive");
    expect(container).toMatchSnapshot();
    // * #TEST: ACT
    fireEvent.click(allListButtons[0]);
    // * #TEST: ASSERT
    expect(currentTemperature).toHaveTextContent(
      String(convertKelvinToCelsius(weatherDataStub.list[0].main.temp))
    );
    expect(allListButtons[0]).toHaveClass("containerActive");
    expect(container).toMatchSnapshot();
  });
});
