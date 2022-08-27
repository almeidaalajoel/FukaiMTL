import React from "react";
import Link from "next/link";

export default function Navigation({ TOClink, prevURL, nextURL }) {
  const nextPrev =
    "flex px-4 lg:px-6 py-2 border-solid border-4 border-[rgb(70,70,70)] hover:border-black hover:text-black dark:bg-[rgb(23,21,21)] dark:border-gray-300  dark:hover:border-white dark:hover:text-white bg-[rgb(250,250,250)] hover:bg-white dark:hover:bg-[rgb(31,27,27)] rounded-2xl items-center justify-center select-none hover:cursor-pointer";

  const noNextPrev =
    "flex px-4 lg:px-6 py-2 border-solid border-4 border-[rgb(180,180,180)] text-[rgb(180,180,180)] dark:border-gray-700 dark:text-gray-700 rounded-2xl items-center justify-center select-none";

  const prevInnards = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      PREV
    </>
  );

  const nextInnards = (
    <>
      NEXT
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </>
  );

  return (
    <div className="flex w-full md:w-4/5 lg:w-3/4 xl:w-3/5 items-center self-center justify-around my-5 text-[rgb(70,70,70)] dark:text-gray-300 text-lg font-bold font-['ProximaNova']">
      {prevURL === "no" ? (
        <div className={noNextPrev}>{prevInnards}</div>
      ) : (
        <Link href={prevURL}>
          <div className={nextPrev}>{prevInnards}</div>
        </Link>
      )}
      <Link href="/tileasworries">
        <div className="flex px-4 py-2 border-solid border-4 border-[rgb(70,70,70)] hover:border-black bg-[rgb(250,250,250)] dark:bg-[rgb(23,21,21)] hover:bg-white dark:border-gray-300  dark:hover:border-white dark:hover:text-white dark:hover:bg-[rgb(31,27,27)] rounded-2xl items-center justify-center select-none hover:cursor-pointer">
          TOC
        </div>
      </Link>
      {nextURL === "no" ? (
        <div className={noNextPrev}>{nextInnards}</div>
      ) : (
        <Link href={nextURL}>
          <div className={nextPrev}>{nextInnards}</div>
        </Link>
      )}
    </div>
  );
}
