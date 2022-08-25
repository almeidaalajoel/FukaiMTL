import React from "react";
import PageSeparator from "../PageSeparator";

export default function TranslatorNote({ children }) {
  return (
    <React.Fragment>
      <div className="px-4 self-center lg:w-[90%]">
        <p>{children}</p>
      </div>
      <PageSeparator />
    </React.Fragment>
  );
}
