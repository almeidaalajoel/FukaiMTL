import React from "react";
import { AdBanner } from "..";

export default function Container({ children }) {
  return (
    <div className="flex flex-row h-full justify-around bg-[rgb(230,230,230)] dark:bg-black">
      <span className="w-[20rem] text-white bg-[rgb(230,230,230)] dark:bg-black">
        <AdBanner slotId={"1149041230"} />
      </span>
      <div className="flex flex-col items-center">{children}</div>
      <span className="w-[20rem] text-white bg-[rgb(230,230,230)] dark:bg-black">
        <AdBanner slotId={"1149041230"} />
      </span>
    </div>
  );
}
