import React, { FC, memo, useState, useMemo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { WeatherHeader } from "@/components/WeatherHeader";
import { WeatherList } from "@/components/WeatherList";
import { WeatherData, WeatherListItem } from "@/types/weather";
import { city } from "@/consts/mocked";

import { getWeatherListForToday } from "@/utilities/data";
import { fetchWeather } from "@/network/weather-api/methods/fetch-weather";
import { homeMainTestId } from "@/consts/test-ids";
import ErrorPage from "./404";
import styles from "./styles.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from weather API on server side
  const data = await fetchWeather(city);
  // Show 404 if there's no data
  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { weatherData: data } };
};

interface HomeProps {
  weatherData: WeatherData;
}

const Home: FC<HomeProps> = ({ weatherData }) => {
  const weatherPeriodWeActuallyCareAbout: WeatherListItem[] = useMemo(
    () => getWeatherListForToday(weatherData?.list),
    [weatherData]
  );

  const [selectedWeatherItem, setSelectedWeatherItem] =
    useState<WeatherListItem>(weatherPeriodWeActuallyCareAbout[0]);

  const handleWeatherItemChange = (timestamp: number) => {
    const targetWeatherItem = weatherPeriodWeActuallyCareAbout.find(
      (weatherItem) => weatherItem.dt === timestamp
    );
    if (!targetWeatherItem) {
      return;
    }
    setSelectedWeatherItem(targetWeatherItem);
  };

  if (!weatherData || !selectedWeatherItem) {
    return <ErrorPage />;
  }

  return (
    <>
      <Head>
        <title>Weather Forecasting Sample App </title>
      </Head>
      <main className={styles.main} data-testid={homeMainTestId}>
        <WeatherHeader
          cityName={weatherData.city.name}
          selectedWeatherItem={selectedWeatherItem}
        />
        <WeatherList
          handleWeatherItemChange={handleWeatherItemChange}
          selectedWeatherItemTimestamp={selectedWeatherItem.dt}
          weatherItems={weatherPeriodWeActuallyCareAbout}
        />
      </main>
    </>
  );
};

export default memo(Home);
