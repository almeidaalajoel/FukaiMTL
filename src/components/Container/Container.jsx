import React from "react";
import Script from "next/script";

export default function Container({ children }) {
  return (
    <div className="flex flex-row h-full justify-around bg-[rgb(230,230,230)] dark:bg-black">
      <span className="w-[20rem] text-white bg-[rgb(230,230,230)] dark:bg-black">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3890555720020555"
          crossorigin="anonymous"
        ></Script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3890555720020555"
          data-ad-slot="1149041230"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
      </span>
      <div className="flex flex-col items-center">{children}</div>
      <span className="w-[20rem] text-white bg-[rgb(230,230,230)] dark:bg-black">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3890555720020555"
          crossorigin="anonymous"
        ></Script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3890555720020555"
          data-ad-slot="1149041230"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
      </span>
    </div>
  );
}
