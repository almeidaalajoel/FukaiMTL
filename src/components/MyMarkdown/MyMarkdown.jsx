import React from "react";
import Markdown from "markdown-to-jsx";
import { Footnote } from "..";

export default function MyMarkdown({
  fontSize,
  lineHeight,
  font,
  footnotes,
  children,
}) {
  const MyH1 = ({ children }) => (
    <>
      <span className="text-[larger]">
        <h1 className="text-[larger] leading-tight dark:text-gray-300">
          {children}
        </h1>
      </span>
      <div className="text-[smaller]">
        <p className="text-slate-500 dark:text-slate-300 text-[smaller]">
          <strong>Translator</strong>: Bicksy{"    "}|{"    "}
          <strong>Proofreader</strong>: Bicksy
        </p>
      </div>
    </>
  );
  const MyHr = () => (
    <div className="flex justify-center">
      <p className="whitespace-pre-wrap">
        {"*           *           *           *           *"}
      </p>
    </div>
  );
  const Wrapper = ({ children }) => (
    <div
      className="space-y-4 my-6 font-serif"
      style={{
        fontSize: `${fontSize}rem`,
        lineHeight: `${lineHeight}rem`,
        fontFamily: font,
      }}
    >
      {children}
    </div>
  );
  return (
    <Markdown
      options={{
        wrapper: Wrapper,
        overrides: {
          Footnote: {
            component: Footnote,
            props: { footnotes: footnotes },
          },
          h1: MyH1,
          hr: MyHr,
        },
      }}
    >
      {children}
    </Markdown>
  );
}
