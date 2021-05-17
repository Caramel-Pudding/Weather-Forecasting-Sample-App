import { WeatherListItem } from "@/types/weather";
import { getWeatherListForToday } from "../data";
import { weatherDataStub } from "../../__tests__/stubs";

describe("Get weather list for today", () => {
  it(`if input is correct should return only today's data`, () => {
    // * #TEST: ARRANGE
    const input = weatherDataStub.list;
    const currentDate = new Date("2017-02-16 12:00:00").getDate();
    // * #TEST: ACT
    const result = getWeatherListForToday(input as WeatherListItem[]);
    // * #TEST: ASSERT
    expect(
      result.every((item) => new Date(item.dt_txt).getDate() === currentDate)
    ).toEqual(true);
  });

  it(`if input is empty should return an empty array`, () => {
    // * #TEST: ARRANGE
    const input: WeatherListItem[] = [];
    // * #TEST: ACT
    const result = getWeatherListForToday(input);
    // * #TEST: ASSERT
    expect(result).toHaveLength(0);
  });
});
