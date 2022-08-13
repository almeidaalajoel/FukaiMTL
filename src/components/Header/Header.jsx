import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-[6vh] items-center flex-shrink-0 bg-[rgb(46,51,59)] font-['ProximaNova'] text-white">
      <span className="flex flex-1 pl-3">
        <Link href="/">
          <a>FukaiMTL</a>
        </Link>
      </span>
      <span className="flex flex-1 justify-center">
        <Link href="/about">
          <a>About/Contact</a>
        </Link>
      </span>
      <span className="flex flex-1 justify-end pr-3 lg:pr-0 lg:justify-center">
        <Link href="/donate">
          <a>Donate</a>
        </Link>
      </span>
      <span className="hidden lg:flex lg:flex-1 lg:pr-3"></span>
    </div>
  );
}
