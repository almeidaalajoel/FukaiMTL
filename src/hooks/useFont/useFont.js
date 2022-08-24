import React, { useState, useEffect } from "react";

export default function useFont() {
  const [font, setFont] = useState("");
  const [size, setSize] = useState("xl");
  const [fontSize, setFontSize] = useState("1.25");
  const [lineHeight, setLineHeight] = useState("1.75");

  //initially set font variable on pageload based on localstorage
  useEffect(() => {
    const s = localStorage.getItem("font");
    if (s !== null) {
      setFont(s);
    } else setFont("serif");
  }, []);

  //initially set fontsize variable on pageload based on localstorage
  useEffect(() => {
    const s = localStorage.getItem("size");
    if (s !== null) {
      setSize(s);
    } else setSize("xl");
  }, []);

  //set actual fontsize based on size variable
  useEffect(() => {
    const s = localStorage.getItem("size");
    if (s) getHeight(s);
  }, [size]);

  const getHeight = (s) => {
    switch (s) {
      case "xs":
        setFontSize(".75");
        setLineHeight("1.25");
        break;
      case "s":
        setFontSize(".875");
        setLineHeight("1.5");
        break;
      case "base":
        setFontSize("1");
        setLineHeight("1.75");
        break;
      case "lg":
        setFontSize("1.125");
        setLineHeight("1.85");
        break;
      case "xl":
        setFontSize("1.25");
        setLineHeight("2");
        break;
      case "2xl":
        setFontSize("1.5");
        setLineHeight("2.25");
        break;
      case "3xl":
        setFontSize("1.875");
        setLineHeight("2.5");
        break;
      case "4xl":
        setFontSize("2.25");
        setLineHeight("2.75");
        break;
    }
  };

  return [
    font,
    size,
    fontSize,
    lineHeight,
    setFont,
    setSize,
    setFontSize,
    setLineHeight,
  ];
}
