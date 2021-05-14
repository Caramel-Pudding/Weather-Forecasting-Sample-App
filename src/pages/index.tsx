import React, { FC, memo, useState, useMemo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { WeatherHeader } from "@/components/WeatherHeader";
import { WeatherList } from "@/components/WeatherList";
import { WeatherData, WeatherListItem } from "@/types/weather";

import { getWeatherListForToday } from "@/utilities/data";
import { fetchWeather } from "@/network/methods/weather-api";
import styles from "./styles.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from weather API on server side
  const data = await fetchWeather();

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
    () => getWeatherListForToday(weatherData.list),
    [weatherData]
  );

  const [chosenWeatherItem, setChosenWeatherItem] = useState<WeatherListItem>(
    weatherPeriodWeActuallyCareAbout[0]
  );

  const handleWeatherItemChange = (timestamp: string) => {
    const targetWeatherItem = weatherPeriodWeActuallyCareAbout.find(
      (weatherItem) => weatherItem.dt_txt === timestamp
    );
    if (!targetWeatherItem) {
      return;
    }
    setChosenWeatherItem(targetWeatherItem);
  };

  return (
    <>
      <Head>
        <title>Weather Forecasting Sample App </title>
      </Head>
      <main className={styles.main}>
        <WeatherHeader
          chosenWeatherItem={chosenWeatherItem}
          city={weatherData.city}
        />
        <WeatherList
          chosenWeatherItem={chosenWeatherItem}
          handleWeatherItemChange={handleWeatherItemChange}
          weatherItems={weatherPeriodWeActuallyCareAbout}
        />
      </main>
    </>
  );
};

export default memo(Home);
