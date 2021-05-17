import fetchMock from "jest-fetch-mock";
import { weatherDataStub } from "@/tests//stubs";
import { fetchWeather } from "../methods/fetch-weather";
import { city } from "../../../consts/mocked";
import { buildWeatherAPIRequestRoute } from "../utilities/link-builders";

describe("Fetch Weather", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it(`if request resolves should return data`, async () => {
    // * #TEST: ARRANGE
    fetchMock.mockResponseOnce(JSON.stringify(weatherDataStub));
    // * #TEST: ACT
    const result = await fetchWeather(city);
    // * #TEST: ASSERT
    expect(result).toEqual(weatherDataStub);
    expect(fetchMock.mock.calls).toHaveLength(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
  });

  it(`if request rejects should return null`, async () => {
    // * #TEST: ARRANGE
    fetchMock.mockRejectOnce();
    // * #TEST: ACT
    const result = await fetchWeather(city);
    // * #TEST: ASSERT
    expect(result).toBeNull();
    expect(fetchMock.mock.calls).toHaveLength(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
  });
});

describe("Build fetch weather link", () => {
  it(`Should return valid url if input is valid`, () => {
    // * #TEST: ARRANGE
    const result = buildWeatherAPIRequestRoute(city);

    // * #TEST: ASSERT
    expect(result).toEqual(
      "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
  });
});
