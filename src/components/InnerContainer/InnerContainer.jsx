import React from "react";
import { AdBanner } from "..";

export default function InnerContainer({ children }) {
  return (
    <div className="flex bg-white flex-grow w-full flex-col pt-6 items-center lg:w-[65%] space-y-4 pb-16 dark:bg-[rgb(21,19,19)] dark:text-white">
      {children}
      {/* <AdBanner slotId={"1787900138"} /> */}
    </div>
  );
}
