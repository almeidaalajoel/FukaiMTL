import Script from "next/script";
import React from "react";

export default function InnerContainer({ children }) {
  return (
    <div className="flex bg-white flex-grow w-full flex-col pt-6 items-center lg:w-[73rem] space-y-4 pb-16 dark:bg-[rgb(21,19,19)] dark:text-white">
      {children}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3890555720020555"
        crossorigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3890555720020555"
        data-ad-slot="1787900138"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
    </div>
  );
}
