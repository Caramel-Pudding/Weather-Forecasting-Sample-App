import { DayOfTheWeek, Month } from "@/consts/dates";

export const getDayAsTextFromTimestamp = (timestamp: Date): string =>
  DayOfTheWeek[timestamp.getDay()];

export const getMonthAsTextFromTimestamp = (timestamp: Date): string =>
  Month[timestamp.getMonth()];
