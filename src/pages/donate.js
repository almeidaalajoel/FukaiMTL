import React from "react";
import Image from "next/image";
import Link from "next/link";
import donate from "../assets/kofi.png";
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
              <Image src={donate} alt="ko-fi" priority />
            </a>
          </Link>
        </div>
        <div className="px-8 sm:px-10 md:px-14 lg:px-20 space-y-4 font-[ProximaNova] text-lg">
          <p>
            Any donations help to maintain the site, and they show me that
            people appreciate the work I&apos;m doing. In addition, each $10
            donated (cumulatively) will trigger an extra chapter release and all
            those who contributed to the extra chapter will be thanked in that
            chapter (unless you request otherwise). For example, if 3 people
            donate $5, $7, and $8 respectively (for a total of $20), two extra
            chapters would be released beyond the regular timetable, person 1
            and 2 would be thanked in the first, and person 3 would be thanked
            in the second.
          </p>
          <p>
            Of course, only donate if it&apos;s within your means, and I would
            love to hear any kind comments or suggestions you have as an
            alternate way to show your support and let me know people enjoy the
            website.
          </p>
        </div>
      </InnerContainer>
    </Container>
  );
}
