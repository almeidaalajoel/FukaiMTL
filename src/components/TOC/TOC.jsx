import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChLink, Separator } from "..";

export default function TOC({ image, title, chapters }) {
  return (
    <div className="flex flex-col items-center p-6 w-full">
      <div className="flex flex-col items-center justify-evenly p-3 border-2 border-solid bg-[rgb(230,240,240)] border-black rounded-xl mb-5 sm:mb-0 sm:mr-4">
        <p className=" text-[1.75rem] text-[#282c34]">{title}</p>
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
      <div className="h-10 w-10 bg-lime-500"/>
      <div className="w-full h-full bg-red-700 mb-3 select-none">
          wtf is this
      </div>
    </div>
  );
}

    /* <Image
            src={image}
            alt={""}
            layout="fill"
            className="max-w-full max-h-full rounded-xl"
          /> */