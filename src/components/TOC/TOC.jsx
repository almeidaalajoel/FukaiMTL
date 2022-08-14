import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChLink } from "..";

export default function TOC({ image, title, chapters }) {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="bg-white flex flex-col flex-grow items-center w-100vw lg:w-[70rem]">
        <div className="flex flex-col items-center p-6 ">
          <div className="flex flex-col items-center justify-evenly p-3 border-2 border-solid bg-[rgb(230,240,240)] border-black  rounded-xl mb-5 sm:mb-0 sm:mr-4">
            <div className="w-[16rem] relative mb-3 select-none">
              <Image
                src={image}
                alt={""}
                layout="responsive"
                className="max-h-full max-w-full rounded-xl"
              />
            </div>
            <p className=" text-[1.75rem] text-[#282c34]">{title}</p>
          </div>
          <div className="my-10 w-[90vw] lg:w-[60rem] h-[1px] bg-gray-300" />
          <h1>
            <strong>Table of Contents</strong>
          </h1>
          <ul className="list-disc self-start my-3 ml-20 text-xl">
            {chapters.map((ch, i) => (
              <ChLink name={ch.name} link={ch.link} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
