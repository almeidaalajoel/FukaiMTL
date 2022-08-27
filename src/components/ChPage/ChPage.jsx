import React from "react";
import {
  Navigation,
  MyMarkdown,
  FontSize,
  FontSelector,
  PageSeparator,
} from "..";
import { DiscussionEmbed } from "disqus-react";

export default function ChPage({
  size,
  setSize,
  fontSize,
  setFontSize,
  lineHeight,
  setLineHeight,
  font,
  setFont,
  footnotes,
  currentCh,
  firstCh,
  lastCh,
  chapter,
  page,
  dark,
  title,
  path,
  novel,
}) {
  return (
    <React.Fragment>
      <p className="self-center text-3xl font-bold font-['ProximaNova'] text-[#282c34] dark:text-white mb-5">
        {title}
      </p>
      {/* <PageSeparator /> */}
      <div className="flex flex-col self-center items-center w-min px-[.5rem] mdPh:px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] border-4 bg-[rgb(238,242,242)] dark:bg-[rgb(33,30,30)] shadow-lg border-solid dark:border-white rounded-2xl">
        <div className="flex flex-col mdPh:flex-row items-center mdPh:space-x-6 sm:space-x-10 mt-3 justify-around">
          <FontSize
            size={size}
            setSize={setSize}
            setFontSize={setFontSize}
            setLineHeight={setLineHeight}
          />
          <FontSelector font={font} setFont={setFont} />
        </div>
        <Navigation
          TOClink={`/${novel}`}
          prevURL={currentCh === firstCh ? "no" : `${path}${currentCh - 1}`}
          nextURL={currentCh === lastCh ? "no" : `${path}${currentCh + 1}`}
        />
      </div>
      {/* <PageSeparator /> */}
      <MyMarkdown
        fontSize={fontSize}
        lineHeight={lineHeight}
        font={font}
        footnotes={footnotes}
      >
        {chapter}
      </MyMarkdown>
      <PageSeparator />
      <Navigation
        TOClink={`/${novel}`}
        prevURL={currentCh === firstCh ? "no" : `${path}${currentCh - 1}`}
        nextURL={currentCh === lastCh ? "no" : `${path}${currentCh + 1}`}
      />
      <DiscussionEmbed
        theme={dark}
        shortname="fukaimtl"
        config={{
          url: `https://fukaimtl.com/${novel}/${page}`,
          identifier: `${novel}/${page}`,
          title: `${title} ${page.toUpperCase()}`,
          language: "en",
        }}
      />
    </React.Fragment>
  );
}
