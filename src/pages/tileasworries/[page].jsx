import React, { useState, useEffect, useRef } from "react";
import ErrorPage from "next/error";
import { Container, PageLoading, ChPage } from "../../components";
import { useChapter, useFont } from "../../hooks";

export default function TileasWorries({ dark }) {
  const [
    font,
    size,
    fontSize,
    lineHeight,
    setFont,
    setSize,
    setFontSize,
    setLineHeight,
  ] = useFont();
  const [currentCh, chapter, footnotes, page] = useChapter(
    "TileasWorries",
    (p) => parseInt(p.slice(-2))
  );

  if (chapter === "not found") return <ErrorPage statusCode={404} />;

  const firstCh = 37;
  const lastCh = 39;

  return chapter ? (
    <Container>
      <div className="flex flex-grow flex-col w-full lg:w-[65%] xl:w-[53%] text-[rgb(10,10,10)] bg-white dark:bg-[rgb(23,21,21)] dark:text-[rgb(200,200,200)] p-2 lg:p-12 lg:pt-6 leading-7 text-xl border border-solid border-gray-300 dark:border-gray-900">
        <ChPage
          {...{
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
          }}
          title="Tilea's Worries"
          path="/tileasworries/v3c"
          novel="tileasworries"
        />
      </div>
    </Container>
  ) : (
    <PageLoading />
  );
}
