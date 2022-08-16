import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="flex flex-col items-center h-full dark:bg-black">
      <div className="flex bg-white flex-grow w-[100vw] flex-col pt-6 items-center lg:w-[70rem] space-y-4 dark:bg-[rgb(21,19,19)]">
        <h1 className="dark:text-gray-300">Donate</h1>
        <div className="w-[70%] lg:w-[54rem] h-[1px] bg-gray-300" />
        <div className="w-2/3 hover:cursor-pointer select-none">
          <Link href={"https://ko-fi.com/fukaimtl"}>
            <a>
              <Image src={require("../assets/kofi.png")} alt="ko-fi" />
            </a>
          </Link>
        </div>
        <p className="px-8 sm:px-10 md:px-14 lg:px-20 space-y-4 font-[ProximaNova] text-lg dark:text-white">
          Any donations help to maintain the site, and they show me that people
          appreciate the work I'm doing. Of course, only donate if it's within
          your means, and I would love to hear any kind comments or suggestions
          you have as an alternate way to show your support and let me know
          people enjoy the website.
        </p>
      </div>
    </div>
  );
}
