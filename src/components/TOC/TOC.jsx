import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChLink, Separator } from "..";

export default function TOC({ image, title, chapters }) {
  return (
    <div className="flex flex-col items-center px-6 w-full">
      <div className="flex flex-col items-center justify-evenly p-3 border-2 border-solid bg-[rgb(230,240,240)] border-black rounded-xl mb-5 sm:mb-0 sm:mr-4">
      <div className="w-[14rem] 2xl:w-[15rem] 3xl:w-[16rem] relative mb-3 select-none">
       <Image
            src={image}
            alt={""}
            layout="responsive"
            className="max-w-full max-h-full rounded-xl"
          /> 
      </div>
        <p className="text-[1.75rem] text-[#282c34]">{title}</p>
      </div>
      <Separator />
      <h1 className="dark:text-gray-300">
        <strong>Table of Contents</strong>
      </h1>
      <ul className="list-disc self-start my-3 ml-20 text-xl dark:text-white">
        {chapters.map((ch, i) => (
          <ChLink name={ch.name} link={ch.link} key={i} />
        ))}
      </ul>
    </div>
  );
}

