import React from "react";
import { render, cleanup } from "@/tests/test-utils";

import { convertUnixTimestampToDate } from "@/utilities/dates";
import { weatherDataStub } from "@/tests/stubs";
import { LocationInfo } from "..";

describe("LocationInfo Component", () => {
  afterEach(cleanup);

  it("Should render properly if there's proper data", () => {
    // * #TEST: ARRANGE
    const { container, getByText } = render(
      <LocationInfo
        cityName={weatherDataStub.city.name}
        currentDate={convertUnixTimestampToDate(weatherDataStub.list[0].dt)}
      />,
      {}
    );
    const city = getByText("Altstadt");
    const day = getByText("Friday");
    const date = getByText("16. February");
    // * #TEST: ASSERT
    expect(city).toBeInTheDocument();
    expect(day).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
