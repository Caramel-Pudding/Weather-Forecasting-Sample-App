import React from "react";
import { render, cleanup, fireEvent } from "@/tests/test-utils";

import { WeatherListItem } from "@/types/weather";

import { weatherDataStub } from "@/tests/stubs";
import { WeatherListButton } from "..";

describe("WeatherListButton Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const { container, getByText, getByAltText } = render(
      <WeatherListButton
        handleWeatherItemChange={() => {}}
        isSelected
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    const time = getByText("15:00");
    const sunIcon = getByAltText("Clear");
    const temperature = getByText("14°");
    // * #TEST: ASSERT
    expect(time).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Should conatin `containerActive` class if selected", () => {
    // * #TEST: ARRANGE
    const { container } = render(
      <WeatherListButton
        handleWeatherItemChange={() => {}}
        isSelected
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    // * #TEST: ASSERT
    expect(container.firstChild).toHaveClass("containerActive");
    expect(container).toMatchSnapshot();
  });

  it("Should conatin `containerInactive` class if selected", () => {
    // * #TEST: ARRANGE
    const { container } = render(
      <WeatherListButton
        handleWeatherItemChange={() => {}}
        isSelected={false}
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    // * #TEST: ASSERT
    expect(container.firstChild).toHaveClass("containerInactive");
    expect(container).toMatchSnapshot();
  });

  it("Should fire event onClick", () => {
    // * #TEST: ARRANGE
    const handleWeatherItemChange = jest.fn();
    const { container, getByRole } = render(
      <WeatherListButton
        handleWeatherItemChange={handleWeatherItemChange}
        isSelected={false}
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    const button = getByRole("button");
    // * #TEST: ACT
    fireEvent.click(button as HTMLElement);
    // * #TEST: ASSERT
    expect(handleWeatherItemChange).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  it("Should fire event on pressing enter", () => {
    // * #TEST: ARRANGE
    const handleWeatherItemChange = jest.fn();
    const { container, getByRole } = render(
      <WeatherListButton
        handleWeatherItemChange={handleWeatherItemChange}
        isSelected={false}
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    const button = getByRole("button");
    // * #TEST: ACT
    fireEvent.keyDown(button as HTMLElement, { key: "Enter", code: "Enter" });
    // * #TEST: ASSERT
    expect(handleWeatherItemChange).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  it("Should not fire event on pressing anything except enter", () => {
    // * #TEST: ARRANGE
    const handleWeatherItemChange = jest.fn();
    const { container, getByRole } = render(
      <WeatherListButton
        handleWeatherItemChange={handleWeatherItemChange}
        isSelected={false}
        weatherItem={weatherDataStub.list[0] as WeatherListItem}
      />,
      {}
    );
    const button = getByRole("button");
    // * #TEST: ACT
    fireEvent.keyDown(button as HTMLElement, { key: "A", code: "A" });
    // * #TEST: ASSERT
    expect(handleWeatherItemChange).toHaveBeenCalledTimes(0);
    expect(container).toMatchSnapshot();
  });
});
