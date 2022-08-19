import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex flex-col flex-grow items-center bg-[rgb(230,230,230)] dark:bg-black">
      {children}
    </div>
  );
}
