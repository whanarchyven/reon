import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from "react";
import Router from "next/router";

// @ts-ignore
import NProgress from "nprogress";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect config material-ui
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
