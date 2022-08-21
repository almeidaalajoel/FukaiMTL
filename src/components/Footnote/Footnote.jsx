import React, { useState } from "react";

export default function Footnote({ num, note, start, end }) {
  const [showNote, setShowNote] = useState(false);
  return (
    <div>
      <span>
        {start}
        <sup
          onClick={() => setShowNote(!showNote)}
          className="text-blue-700 hover:underline hover:cursor-pointer select-none"
        >
          {num}
        </sup>{" "}
      </span>
      <div
        onClick={() => setShowNote(false)}
        className={
          showNote
            ? "mx-auto break-words border-solid border border-green-100 w-4/5 text-[smaller] shadow-lg py-1 px-2 rounded-md bg-stone-100 h-min min-h-[3rem] my-2 hover:cursor-pointer dark:bg-stone-700 dark:border-green-900"
            : "hidden"
        }
      >
        <p>{note}</p>
      </div>
      <span>{end}</span>
    </div>
  );
}
