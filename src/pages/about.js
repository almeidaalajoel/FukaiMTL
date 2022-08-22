import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { Container, InnerContainer, Separator } from "../components";

export default function About() {
  const text = (
    <div className="px-8 sm:px-10 md:px-14 lg:px-20 space-y-4 font-[ProximaNova] text-lg">
      <p>
        Hello! That cool guy on the toadstool up there is me, Bicksy. I guess
        you could call it a bicksystool (ha-ha!). I made this site after I
        realized how good machine translation has gotten these days, and that
        even I (with a small knowledge of Japanese) could copy and paste (or
        rather, make a script that does it for me :P) and edit the results.
        Hopefully the end product has turned into something decent. I&apos;ve
        started with <span className="font-bold">Tilea&apos;s Worries</span>{" "}
        because it&apos;s a series that I always was sad got dropped, and I
        personally wanted to read more. My goal is to at least finish volume 3
        (which goes to chapter 85). After that, I might continue, translate
        something else, or quit altogether. It really depends on my motivation
        (which will likely depend on the feedback I get).
      </p>
      <p>
        I wrote the code for this site myself, and I haven&apos;t done extensive
        testing across different target devices, so if anything looks funky or
        doesn&apos;t work, don&apos;t hesitate to shoot me a message. If
        you&apos;re using a screen reader and you&apos;re having any issues,
        please message me! I don&apos;t want anyone to have a hard time using
        the site. Any feature requests you&apos;d like to see are welcome as
        well. And if you like my (coding) work here and are in need of a
        NextJS/React/React Native (among others) developer, I am open to
        messages about that as well, hehe ;).
      </p>
      <p>
        Anyway, go ahead and message me about anything at{" "}
        <span className="font-bold text-slate-500">fukaiMTL@gmail.com</span>
      </p>
    </div>
  );

  return (
    <Container>
      <InnerContainer>
        <h1 className="dark:text-gray-300">About</h1>
        <Separator />
        <div className="relative w-[17rem] select-none">
          <Image
            src={require("../assets/about/bicksy.jpg")}
            alt="bicksy"
            className="max-h-full max-w-full"
          />
        </div>
        {text}
      </InnerContainer>
    </Container>
  );
}
