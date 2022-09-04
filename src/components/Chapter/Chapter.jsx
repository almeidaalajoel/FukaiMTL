import React from "react";
import {
  Navigation,
  MyMarkdown,
  FontSize,
  FontSelector,
  PageSeparator,
} from "..";
import { DiscussionEmbed } from "disqus-react";

export default function Chapter({
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
  chapterText,
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
      <div className="flex flex-col self-center items-center w-min px-[.5rem] smPh:px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] border-4 bg-[rgb(240,239,242)] dark:bg-[rgb(33,30,30)] shadow-2xl dark:shadow-[0_0px_40px_8px_rgba(165,160,160,0.18)] border-solid dark:border-white rounded-2xl">
        <div className="flex flex-col smPh:flex-row items-center smPh:space-x-6 sm:space-x-10 mt-3 justify-around">
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
      <MyMarkdown
        fontSize={fontSize}
        lineHeight={lineHeight}
        font={font}
        footnotes={footnotes}
      >
        {chapterText}
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
