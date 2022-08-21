import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, InnerContainer, Separator } from "../components";

export default function Donate() {
  return (
    <Container>
      <InnerContainer>
        <h1 className="dark:text-gray-300">Donate</h1>
        <Separator />
        <div className="w-2/3 hover:cursor-pointer select-none">
          <Link href={"https://ko-fi.com/fukaimtl"}>
            <a>
              <Image src={require("../assets/kofi.png")} alt="ko-fi" />
            </a>
          </Link>
        </div>
        <p className="px-8 sm:px-10 md:px-14 lg:px-20 space-y-4 font-[ProximaNova] text-lg">
          Any donations help to maintain the site, and they show me that people
          appreciate the work I&apos;m doing. Of course, only donate if
          it&apos;s within your means, and I would love to hear any kind
          comments or suggestions you have as an alternate way to show your
          support and let me know people enjoy the website.
        </p>
      </InnerContainer>
    </Container>
  );
}
