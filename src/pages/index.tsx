import React, { FC, memo } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { WeatherHeader } from "@/components/WeatherHeader";
import { WeatherList } from "@/components/WeatherList";
import { WeatherData } from "@/types/weather-types";

import styles from "./styles.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from weather API on server side
  const res = await fetch(
    `https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`
  );
  const data = (await res.json()) as WeatherData;

  // Show 404 if there's no data
  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data } };
};

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Weather Forecasting Sample App </title>
      </Head>
      <main className={styles.main}>
        <WeatherHeader />
        <WeatherList />
      </main>
    </>
  );
};

export default memo(Home);
