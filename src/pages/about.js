import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

export default function About() {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("/about/about.md")
      .then((r) => r.text())
      .then((t) => setText(t));
  }, []);

  const Wrapper = ({ children }) => (
    <div className="px-8 sm:px-10 md:px-14 lg:px-20 space-y-4 font-[ProximaNova] text-lg">
      {children}
    </div>
  );

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex bg-white flex-grow w-[100vw] flex-col pt-6 items-center lg:w-[70rem] space-y-4 pb-16">
        <h1>About</h1>
        <div className="w-[70%] lg:w-[54rem] h-[1px] bg-gray-300" />
        <div className="relative w-[18rem] select-none">
          <Image
            src={require("../../public/about/bicksy.jpg")}
            alt="bicksy"
            className="max-h-full max-w-full"
          />
        </div>
        <Markdown options={{ wrapper: Wrapper }}>{text}</Markdown>
      </div>
    </div>
  );
}
