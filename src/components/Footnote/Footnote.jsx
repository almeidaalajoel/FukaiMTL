import React, { useState } from "react";

export default function Footnote(num, note, children) {
  return (
    <span>
      <sup className="hover:cursor-pointer select-none">
        1
        <span className="w-[10rem] font-normal bg-[#555] text-white text-center rounded-md p-2 absolute z-1 bottom-[125%] left-1/2 ml-[-80px] after:content-[''] after:absolute after:top-full after:left-1/2 after:ml-[-5px] after:border-[5px] after:border-solid after:border-[#555 transparent transparent transparent]">
          Hello my good friend how are you im doing quite swell :)
        </span>
      </sup>
    </span>
  );
}
