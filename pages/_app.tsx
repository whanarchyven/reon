import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from "react";
import Router from "next/router";
import LoadingScreen from "../components/LoadingScreen";
// @ts-ignore
import NProgress from "nprogress";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);
  React.useEffect(() =>{
    setTimeout(() => setLoading(false), 1500);
  })
  return (
      <>
        {!loading ? (
            <React.Fragment>
              <Component {...pageProps} />
            </React.Fragment>
        ) : (
            <LoadingScreen />
        )}
      </>
  );
}

export default MyApp
