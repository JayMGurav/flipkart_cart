import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/store/Store";

import productData from "data";
import { useEffect, useState } from "react";
import { setUncaughtExceptionCaptureCallback } from "process";

function MyApp({ Component, pageProps }: AppProps) {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setCart(() => {
  //     if (typeof window !== "undefined") {
  //       const cartDataFromLocalStorage = window.localStorage.getItem("cart");
  //       if (cartDataFromLocalStorage) {
  //         return JSON.parse(cartDataFromLocalStorage);
  //       }
  //     }
  //   });
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((resProducts) => {
  //       // console.log(resProducts);
  //       setProducts(resProducts);
  //     });
  // }, []);

  // console.log(products);

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
