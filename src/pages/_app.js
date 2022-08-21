import "../globals.css";
import { Layout } from "../components";
import Script from "next/script";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  //when dark changes, change body background color
  useEffect(() => {
    if (dark === "true") {
      document.body.style.backgroundColor = "rgb(23,21,21)";
    } else {
      document.body.style.backgroundColor = "rgb(255,255,255)";
    }
  }, [dark]);

  //set initial theme based on localstorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("dark");
      if (isDark === null) setDark("false");
      else setDark(isDark);
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
        <Component {...pageProps} dark={dark} />
      </Layout>
    </div>
  );
}

export default MyApp;
