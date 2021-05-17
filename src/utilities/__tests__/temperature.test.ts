import { convertKelvinToCelsius } from "../temperature";

describe("Convet Kelvin to Celsius", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: 274,
      expected: 1,
    },
    {
      input: 310,
      expected: 37,
    },
    {
      input: 0,
      expected: -273,
    },
  ];

  testCases.forEach((test) => {
    it(`if input temperature is: ${test.input} should correctly convert it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = convertKelvinToCelsius(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});
