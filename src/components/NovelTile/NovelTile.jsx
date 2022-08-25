import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NovelTile({ title, description, image, author, link }) {
  return (
    <Link href={link}>
      <div className="flex flex-col w-[24rem] flex-grow px-4 hover:cursor-pointer font-['ProximaNova'] leading-6 rounded-2xl items-center sm:flex-row  sm:justify-evenly sm:w-[38rem] md:w-[50rem] lg:w-full dark:bg-[rgb(21,19,19)]">
        <div className="flex flex-col items-center justify-evenly p-3 w-[17rem] border-2 border-solid bg-[rgb(230,240,240)] border-black text-[#282c34] rounded-xl mb-5 sm:mb-0 sm:mr-4">
          <div className="w-[14rem] relative mb-3">
            <Image
              alt={title}
              src={image}
              layout="responsive"
              className="rounded-xl max-h-full max-w-full "
            />
          </div>
          <p className="text-[1.75rem]">{title}</p>
          <p>by {author}</p>
        </div>
        <div className="flex flex-col justify-center sm:w-[20rem] md:w-[26rem] lg:w-[32rem] dark:text-white">
          {description}
        </div>
      </div>
    </Link>
  );
}
