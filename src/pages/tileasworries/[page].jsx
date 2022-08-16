import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Markdown, { compiler } from "markdown-to-jsx";
import ErrorPage from "next/error";
import {
  ChLink,
  FontSize,
  Footnote,
  Navigation,
  Separator,
} from "../../components";
import { DiscussionEmbed } from "disqus-react";

export default function TileasWorries() {
  const [chapter, setChapter] = useState("");
  const [ready, setReady] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [currentCh, setCurrentCh] = useState(0);

  const [size, setSize] = useState(null);
  const [fontSize, setFontSize] = useState("1.25");
  const [lineHeight, setLineHeight] = useState("1.75");
  const getHeight = (s) => {
    switch (s) {
      case "xs":
        setFontSize(".75");
        setLineHeight("1");
        break;
      case "s":
        setFontSize(".875");
        setLineHeight("1.25");
        break;
      case "base":
        setFontSize("1");
        setLineHeight("1.5");
        break;
      case "lg":
        setFontSize("1.125");
        setLineHeight("1.75");
        break;
      case "xl":
        setFontSize("1.25");
        setLineHeight("1.75");
        break;
      case "2xl":
        setFontSize("1.5");
        setLineHeight("2");
        break;
      case "3xl":
        setFontSize("1.875");
        setLineHeight("2.25");
        break;
      case "4xl":
        setFontSize("2.25");
        setLineHeight("2.5");
        break;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("size");
      if (s !== null) {
        setSize(s);
        getHeight(s);
      } else setSize("xl");
    }
  }, [size]);

  const router = useRouter();
  const { page } = router.query;

  const firstCh = 37;
  const lastCh = 39;

  useEffect(() => {
    if (!router.isReady) return;
    setCurrentCh(parseInt(page.slice(-2)));
    fetch(`../tilea/chapters/${page}.md`)
      .then((r) => {
        if (r.status === 404) {
          setNotFound(true);
          return 404;
        }
        return r.text();
      })
      .then((text) => {
        if (text === 404) return;
        setNotFound(false);
        setChapter(text);
        setReady(true);
      });
  }, [router.isReady, page]);

  if (notFound) return <ErrorPage statusCode={404} />;

  const MyP = ({ children, ...props }) => (
    <>
      <p className="mb-4">
        {`${children[0]}`} {children[1]}
      </p>
    </>
  );

  const MyH1 = ({ children, ...props }) => (
    <>
      <span className="text-[larger]">
        <h1 className="text-[larger] leading-tight">{children}</h1>
      </span>
      <div className="text-[smaller]">
        <p className="text-slate-500 text-[smaller]">
          <strong>Translator</strong>: Bicksy{"    "}|{"    "}
          <strong>Proofreader</strong>: Bicksy
        </p>
      </div>
    </>
  );

  const MyHr = ({ children, ...props }) => (
    <>
      <div className="flex my-10 justify-center">
        <p className="whitespace-pre-wrap">
          {"*           *           *           *           *"}
        </p>
      </div>
    </>
  );

  const Wrapper = ({ children }) => (
    <div
      className="space-y-4 my-6"
      style={{ fontSize: `${fontSize}rem`, lineHeight: `${lineHeight}rem` }}
    >
      {children}
    </div>
  );

  return ready ? (
    <div className="flex flex-col items-center ">
      <div className="flex flex-grow flex-col w-full lg:w-[60rem] bg-white p-4 lg:p-12 lg:pt-6 leading-7 text-xl border border-solid border-gray-300">
        <p className="self-center text-3xl text-[#282c34]">
          {"Tilea's Worries"}
        </p>
        <Navigation
          TOClink="/tileasworries"
          prevURL={
            currentCh === firstCh ? "no" : `/tileasworries/v3c${currentCh - 1}`
          }
          nextURL={
            currentCh === lastCh ? "no" : `/tileasworries/v3c${currentCh + 1}`
          }
        />
        <FontSize
          size={size}
          setSize={setSize}
          setFontSize={setFontSize}
          setLineHeight={setLineHeight}
        />
        <div className="w-full self-center lg:w-[90%] h-[1px] bg-gray-300" />
        <Markdown
          options={{
            wrapper: Wrapper,
            overrides: {
              Footnote: { component: Footnote, props: { size: size } },
              h1: { component: MyH1 },
              hr: { component: MyHr },
              ChLink: { component: ChLink },
            },
          }}
        >
          {chapter}
        </Markdown>
        <div className="w-full self-center lg:w-[90%] h-[1px] bg-gray-300" />
        <Navigation
          TOClink="/tileasworries"
          prevURL={
            currentCh === firstCh ? "no" : `/tileasworries/v3c${currentCh - 1}`
          }
          nextURL={
            currentCh === lastCh ? "no" : `/tileasworries/v3c${currentCh + 1}`
          }
        />
        <DiscussionEmbed
          shortname="fukaimtl"
          config={{
            url: `https://fukai-mtl.vercel.app/tileasworries/${page}`,
            identifier: `tileasworries${page}`,
            title: `Tilea's Worries ${page.toUpperCase()}`,
            language: "en",
          }}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col flex-grow w-full items-center">
      <div className="flex w-full h-full lg:w-[55rem] bg-white items-center justify-center border-gray-300">
        <div role="status">
          <svg
            aria-hidden="true"
            className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
