import "../globals.css";
import { Layout } from "../components";
import { Script } from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3890555720020555"
        crossorigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
