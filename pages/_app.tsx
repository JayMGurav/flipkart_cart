import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/store/Store";

import productData from "data";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider initialState={{ filter: "", products: productData }}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp;
