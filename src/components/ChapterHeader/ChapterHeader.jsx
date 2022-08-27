import React from "react";

export default function ChapterHeader({ translator, proofreader, date, children }) {
  return (
    <React.Fragment>
      <span className="text-[larger]">
        <h1 className="text-[larger] leading-tight dark:text-gray-300">
          <strong>{children}</strong>
        </h1>
      </span>
      <div className="text-[smaller]">
        <p className="text-slate-500 dark:text-slate-300 text-[smaller]">
          <strong>Translator</strong>: {translator}
          {"    "}|{"    "}
          <strong>Proofreader</strong>: {proofreader}
          {"    "}|{"    "}
          <strong>Posted</strong>: {date}
        </p>
      </div>
    </React.Fragment>
  );
}
