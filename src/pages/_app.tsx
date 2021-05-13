import "@/debug/wdyr";
import React, { FC, memo } from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";

import "@/styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (process.env.NEXT_PUBLIC_VITALS === "true") {
    // eslint-disable-next-line no-console
    console.debug(metric);
  }
}

export default memo(MyApp);
