import "../globals.css";
import { Layout } from "../components";
import Script from "next/script";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(localStorage.getItem("dark"));
    }
  }, []);
  return (
    <div
      className={
        dark === "true"
          ? "dark flex-grow flex flex-col"
          : "flex flex-col flex-grow"
      }
    >
      <Layout setDark={setDark} dark={dark}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
