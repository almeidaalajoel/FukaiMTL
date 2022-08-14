import React, { useState } from "react";

export default function Footnote({ num, note, children }) {
  const [showNote, setShowNote] = useState(false);
  return (
    <>
      <p className="self-start">
        {children}
        <sup
          onClick={() => setShowNote(!showNote)}
          className="text-blue-700 hover:underline hover:cursor-pointer select-none"
        >
          {num}
        </sup>
      </p>
      <div
        onClick={() => setShowNote(false)}
        className={
          showNote
            ? "mx-auto break-words select-none border-solid border border-green-100 text-[1rem] w-4/5 shadow-lg py-1 px-2 rounded-md bg-stone-100 min-h-[4rem] my-2 hover:cursor-pointer"
            : "hidden"
        }
      >
        <p>{note}</p>
      </div>
    </>
  );
}
