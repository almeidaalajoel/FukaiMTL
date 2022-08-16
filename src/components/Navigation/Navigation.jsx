import React from "react";
import Link from "next/link";

export default function Navigation({ TOClink, prevURL, nextURL }) {
  return (
    <div className="flex justify-center my-4">
      <span className="w-[7rem] leading-none flex justify-center items-center">
        {prevURL === "no" ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(107,114,128)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-center text-gray-500 ml-2 select-none">
              Previous
            </span>
          </span>
        ) : (
          <Link href={prevURL}>
            <a className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgb(29,78,216)"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="text-center group-hover:underline text-blue-700 ml-2 select-none">
                Previous
              </span>
            </a>
          </Link>
        )}
      </span>
      <span className="w-[7rem] flex justify-center">
        <Link href={TOClink}>
          <a className="hover:underline text-center text-blue-700 select-none">
            TOC
          </a>
        </Link>
      </span>
      <span className="w-[7rem] flex justify-center items-center">
        {nextURL === "no" ? (
          <span>
            <span className="text-center text-gray-500 mr-2 select-none">
              Next
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(107,114,128)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        ) : (
          <Link href={nextURL}>
            <a className="group">
              <span className="text-center group-hover:underline text-blue-700 mr-2 select-none">
                Next
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgb(29,78,216)"
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
      </span>
    </div>
  );
}
