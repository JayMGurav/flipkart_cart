import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/store/Store";

import productData from "data";
import { useEffect, useState } from "react";
import { setUncaughtExceptionCaptureCallback } from "process";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider
      initialState={{ products: [], cart: [], filter: null, sortedBy: null }}
    >
      <Component {...pageProps} />
    </StoreProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp;
