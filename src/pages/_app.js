import "../globals.css";
import { Layout } from "../components";
import Script from "next/script";
import { useEffect, useState, Fragment } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("dark");
      setDark(isDark);
      if (isDark === "true") {
        document.body.style.backgroundColor = "rgb(23,21,21)";
      } else {
        document.body.style.backgroundColor = "rgb(255,255,255)";
      }
    }
  }, [dark]);
  return (
    <div className={dark === "true" ? "dark h-full" : "h-full"}>
      <Layout setDark={setDark} dark={dark}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
