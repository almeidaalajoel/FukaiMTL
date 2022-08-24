import React from "react";
import Link from "next/link";

export default function Navigation({ TOClink, prevURL, nextURL }) {
  const nextPrev =
    "flex px-4 border-solid border-4 border-[rgb(70,70,70)] hover:border-black hover:text-black dark:border-gray-300  dark:hover:border-white dark:hover:text-white dark:hover:bg-[rgb(28,25,25)] w-1/4 h-[3rem] rounded-2xl items-center justify-center select-none hover:cursor-pointer";

  const noNextPrev =
    "flex px-4 border-solid border-4 border-[rgb(180,180,180)] text-[rgb(180,180,180)] dark:border-gray-700 dark:text-gray-700  w-1/4 h-[3rem] rounded-2xl items-center justify-center select-none";

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
    <div className="flex w-2/3 items-center self-center justify-around my-5 text-[rgb(70,70,70)] dark:text-gray-300 text-lg font-bold font-['ProximaNova']">
      {prevURL === "no" ? (
        <div className={noNextPrev}>{prevInnards}</div>
      ) : (
        <Link href={prevURL}>
          <div className={nextPrev}>{prevInnards}</div>
        </Link>
      )}
      <Link href="/tileasworries">
        <div className="flex border-solid border-4 border-[rgb(70,70,70)] hover:border-black hover:bg-[rgb(250,250,250)] dark:border-gray-300  dark:hover:border-white dark:hover:text-white dark:hover:bg-[rgb(28,25,25)] w-[20%] h-[3rem] rounded-2xl items-center justify-center select-none hover:cursor-pointer">
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
