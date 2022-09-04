import React, { useRef, useEffect } from "react";
import { Container, ChPage, Chapter } from "../../components";
import { useFont } from "../../hooks";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: "v3c37" } },
      { params: { page: "v3c38" } },
      { params: { page: "v3c39" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { page } = context.params;
  const firstCh = 37;
  const lastCh = 39;
  const currentCh = parseInt(page.slice(-2));
  try {
    const chapterText =
      require(`../../assets/TileasWorries/chapters/${page}.md`).default;
    return { props: { chapterText, firstCh, lastCh, currentCh, page } };
  } catch {
    return { notFound: true };
  }
}

export default function TileasWorries({
  dark,
  firstCh,
  lastCh,
  currentCh,
  chapterText,
  page,
}) {
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

  const footnotes = useRef({});
  //reset state of footnotes when page changes
  useEffect(() => {
    footnotes.current = {};
  }, [page]);

  return (
    <Container>
      <ChPage>
        <Chapter
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
            chapterText,
            page,
            dark,
          }}
          title="Tilea's Worries"
          path="/tileasworries/v3c"
          novel="tileasworries"
        />
      </ChPage>
    </Container>
  );
}
