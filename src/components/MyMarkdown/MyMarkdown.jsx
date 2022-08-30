import React from "react";
import Markdown from "markdown-to-jsx";
import { Footnote, TranslatorNote, ChapterHeader } from "..";
import Link from "next/link";

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
    <div className="flex justify-evenly !my-14">
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
    </div>
  );
  const Wrapper = ({ children }) => (
    <div
      className="flex flex-col space-y-4 my-6"
      style={{
        fontSize: `${fontSize}rem`,
        lineHeight: `${lineHeight}rem`,
        fontFamily: font,
      }}
    >
      {children}
    </div>
  );

  const MyLink = (props) => {
    return <Link {...props}>{props.children[0]}</Link>;
  };

  return (
    <Markdown
      options={{
        wrapper: Wrapper,
        overrides: {
          Footnote: {
            component: Footnote,
            props: { footnotes: footnotes },
          },
          TranslatorNote: TranslatorNote,
          h1: MyH1,
          hr: MyHr,
          ChapterHeader: ChapterHeader,
          Link: MyLink,
        },
      }}
    >
      {children}
    </Markdown>
  );
}
