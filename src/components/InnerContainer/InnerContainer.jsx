import React from "react";

export default function InnerContainer({ children }) {
  return (
    <div className="flex bg-white flex-grow w-full flex-col pt-6 items-center lg:w-[73rem] space-y-4 pb-16 dark:bg-[rgb(21,19,19)] dark:text-white">
      {children}
    </div>
  );
}