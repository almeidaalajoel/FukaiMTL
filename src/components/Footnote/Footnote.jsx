import React, { useEffect, useRef, useState } from "react";

export default function Footnote({ num, note, start, end, footnotes }) {
    const [showNote, setShowNote] = useState(
        footnotes.current[num] ? true : false
    );

    //footnotes stores state of all footnotes of a page
    //footnotes = {[num]: true/false} (plus other footnote numbers)
    //update footnotes whenever the components state changes
    useEffect(() => {
        footnotes.current[num] = showNote;
    }, [showNote]);

    start = start.split("&apos;").join("'");
    end = end.split("&apos;").join("'");
    return (
        <div>
            <span>
                {start}
                <sup
                    onClick={() => setShowNote(!showNote)}
                    className="text-blue-700 lgPh:hover:underline hover:cursor-pointer select-none"
                >
                    {num}
                </sup>{" "}
            </span>
            <div
                onClick={() => setShowNote(false)}
                className={
                    showNote
                        ? "mx-auto break-words border-solid border border-green-100 w-4/5 text-[smaller] shadow-lg py-1 px-2 rounded-md bg-stone-100 h-min min-h-[2.5em] my-2 hover:cursor-pointer dark:bg-stone-700 dark:border-green-900"
                        : "hidden"
                }
            >
                <p>{note}</p>
            </div>
            <span>{end}</span>
        </div>
    );
}
