import React from "react";
import Link from "next/link";

export default function Header({ setDark, dark }) {
  const toggleDark = () => {
    const newVal = dark === "true" ? "false" : "true";
    setDark(newVal);
    localStorage.setItem("dark", newVal);
  };

  return (
    <div className="flex h-[6vh] items-center w-full flex-shrink-0 bg-[rgb(46,51,59)] font-['ProximaNova'] text-white">
      <span className="flex flex-1 pl-3">
        <Link href="/">
          <a>FukaiMTL</a>
        </Link>
      </span>
      <span className="flex flex-1 justify-center ml-9">
        <Link href="/about">
          <a>About/Contact</a>
        </Link>
      </span>
      <span className="flex flex-1 justify-end lg:justify-center pr-6">
        <Link href="/donate">
          <a>Donate</a>
        </Link>
      </span>
      <span className="pr-3 hover:cursor-pointer" onClick={() => toggleDark()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </span>
    </div>
  );
}
