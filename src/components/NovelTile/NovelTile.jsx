import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NovelTile({ title, description, image, author, link }) {
  return (
    <>
      <Link href={link}>
        <div className="flex flex-col w-[24rem] flex-grow px-4 hover:cursor-pointer font-['ProximaNova'] leading-6 rounded-2xl items-center sm:flex-row  sm:justify-evenly sm:w-[38rem] md:w-[50rem] lg:w-[64rem]">
          <div className="flex flex-col items-center justify-evenly p-3 w-[17rem] border-2 border-solid bg-[rgb(230,240,240)] border-black  rounded-xl mb-5 sm:mb-0 sm:mr-4">
            <div className="w-[14rem] relative mb-3">
              <Image
                alt={title}
                src={image}
                layout="responsive"
                className="rounded-xl max-h-full max-w-full "
              />
            </div>
            <p className="text-[#282c34] text-[1.75rem]">{title}</p>
            <div className="">by {author}</div>
          </div>
          <div className="flex flex-col justify-center sm:w-[20rem] md:w-[26rem] lg:w-[32rem]">
            <div className="whitespace-pre-wrap">{description}</div>
          </div>
        </div>
      </Link>
      <div className="mt-10 mb-10 w-[70%] lg:w-[54rem] h-[1px] bg-gray-300"></div>
    </>
  );
}
