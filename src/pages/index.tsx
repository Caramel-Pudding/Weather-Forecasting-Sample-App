import React, { FC, memo } from "react";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <main>
        <div>Weather Forecasting Sample App</div>
      </main>
    </>
  );
};

export default memo(Home);
