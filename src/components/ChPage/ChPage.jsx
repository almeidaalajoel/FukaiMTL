import React from "react";
import { Navigation, MyMarkdown, FontSize, FontSelector } from "..";
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
      <p className="self-center text-3xl text-[#282c34] dark:text-white select-none z-[1000]">
        {title}
      </p>
      <div className="flex flex-row items-center w-full md:w-4/5 lg:w-3/4 xl:w-3/5 self-center justify-around">
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
      <div className="w-full self-center lg:w-[90%] h-[1px] bg-gray-300" />
      <MyMarkdown
        fontSize={fontSize}
        lineHeight={lineHeight}
        font={font}
        footnotes={footnotes}
      >
        {chapter}
      </MyMarkdown>
      <div className="w-full self-center lg:w-[90%] h-[1px] bg-gray-300" />
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