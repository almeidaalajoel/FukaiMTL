import React from "react";
import Link from "next/link";

export default function Navigation({ TOClink, prevURL, nextURL }) {
  return (
    <div className={"self-center w-full lg:w-2/3 flex text-blue-700 my-5"}>
      {prevURL === "no" ? (
        <span className="flex-1"></span>
      ) : (
        <Link href={prevURL}>
          <a className="hover:underline flex-1 text-center select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="ml-2">Previous</span>
          </a>
        </Link>
      )}
      <Link href={TOClink}>
        <a className="hover:underline flex-1 text-center select-none">TOC</a>
      </Link>
      {nextURL === "no" ? (
        <span className="flex-1"></span>
      ) : (
        <Link href={nextURL}>
          <a className="hover:underline flex-1 text-center select-none">
            <span className="mr-2">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
      )}
    </div>
  );
}
