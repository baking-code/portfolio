import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";

import "../styles/base.css";
import "../styles/custom.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Benjamin King - Portfolio</title>
      </Head>
      <Global
        //keyframes + ring and shadow classes variables  ... to global styles
        styles={{
          ...xw`XWIND_GLOBAL`,
        }}
      />
      <div className="background linear-gradient"></div>
      <Component {...pageProps} />
    </>
  );
}

export default App;
