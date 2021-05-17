import { DayOfTheWeek, Month } from "@/consts/dates";
import {
  convertUnixTimestampToDate,
  getDayAsTextFromTimestamp,
  getMonthAsTextFromTimestamp,
  getTimeAsTextFromTimestamp,
} from "../dates";

describe("Convet UNIX timestamp to date", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: 0,
      expected: "1970-01-01T00:00:00.000Z",
    },
    {
      input: 1487516400,
      expected: "2017-02-19T15:00:00.000Z",
    },
    {
      input: -1487516400,
      expected: "1922-11-12T09:00:00.000Z",
    },
  ];

  testCases.forEach((test) => {
    it(`if input number is: ${test.input} should correctly convert it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = convertUnixTimestampToDate(test.input).toISOString();
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("Get day as text from timestamp", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: new Date(0),
      expected: DayOfTheWeek[4],
    },
    {
      input: new Date(1487516400000),
      expected: DayOfTheWeek[0],
    },
    {
      input: new Date(-1487516400000),
      expected: DayOfTheWeek[0],
    },
  ];

  testCases.forEach((test) => {
    it(`if input Date is: ${test.input.toISOString()} should correctly convert it to: ${
      test.expected
    }`, () => {
      // * #TEST: ACT
      const result = getDayAsTextFromTimestamp(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("Get month as text from timestamp", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: new Date("2021-01-11 00:00:00"),
      expected: Month[0],
    },
    {
      input: new Date("2021-03-11 00:00:00"),
      expected: Month[2],
    },
    {
      input: new Date("2021-05-11 00:00:00"),
      expected: Month[4],
    },
  ];

  testCases.forEach((test) => {
    it(`if input Date is: ${test.input.toISOString()} should correctly convert it to: ${
      test.expected
    }`, () => {
      // * #TEST: ACT
      const result = getMonthAsTextFromTimestamp(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("Get time as text from timestamp", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: new Date("2021-01-11 00:00:00"),
      expected: "00:00",
    },
    {
      input: new Date("2021-01-11 04:00:00"),
      expected: "04:00",
    },
    {
      input: new Date("2021-01-11 15:00:00"),
      expected: "15:00",
    },
  ];

  testCases.forEach((test) => {
    it(`if input Date is: ${test.input.toISOString()} should correctly convert it to: ${
      test.expected
    }`, () => {
      // * #TEST: ACT
      const result = getTimeAsTextFromTimestamp(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});
