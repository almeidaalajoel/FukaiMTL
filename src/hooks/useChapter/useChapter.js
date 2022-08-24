import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useChapter(path, chAdjustment) {
  const [currentCh, setCurrentCh] = useState(0);
  const [chapter, setChapter] = useState("");
  const footnotes = useRef();
  const router = useRouter();
  const { page } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    setCurrentCh(chAdjustment(page));
    footnotes.current = {};
    try {
      const text = require(`../../assets/${path}/chapters/${page}.md`);
      setChapter(text.default);
    } catch (e) {
      console.error(e);
      setChapter("not found");
    }
  }, [router.isReady, page]);
  return [currentCh, chapter, footnotes, page];
}
