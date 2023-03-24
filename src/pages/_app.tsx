import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import Layout from '../pages/Layout/index'
import Style from "./Layout/style/index.module.scss";
import '../App.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return Layout(<Component {...pageProps} />);
}
