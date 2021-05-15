import { DayOfTheWeek, Month } from "@/consts/dates";

export const convertUnixTimestampToDate = (unixTimestamp: number): Date =>
  new Date(unixTimestamp * 1000);

export const getDayAsTextFromTimestamp = (timestamp: Date): string =>
  DayOfTheWeek[timestamp.getDay()];

export const getMonthAsTextFromTimestamp = (timestamp: Date): string =>
  Month[timestamp.getMonth()];

export const getTimeAsTextFromTimestamp = (timestamp: Date): string => {
  return `${timestamp.getHours()}:00`;
};
