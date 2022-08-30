import React, { useState } from "react";
import { Container, FontSelector, FontSize } from "../components";
import { useFont } from "../hooks";
import TextareaAutosize from "react-textarea-autosize";

export default function Reader() {
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
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const formatStr = (str) => str.split("\n").map((s, i) => <p key={i}>{s}</p>);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => setText(formatStr(value));
  const handleReset = () => {
    setText("");
    setValue("");
  };

  return (
    <Container>
      <div className="flex flex-grow flex-col w-full lg:w-[65%] xl:w-[53%] text-[rgb(10,10,10)] bg-white dark:bg-[rgb(23,21,21)] dark:text-[rgb(200,200,200)] p-2 lg:p-12 lg:pt-6 leading-7 text-xl border border-solid border-gray-300 dark:border-gray-900">
        {text ? (
          <React.Fragment>
            <div className="flex flex-col self-center items-center justify-center w-min px-[.5rem] smPh:px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] border-4 bg-[rgb(240,239,242)] dark:bg-[rgb(33,30,30)] shadow-2xl dark:shadow-[0_0px_40px_8px_rgba(165,160,160,0.18)] border-solid dark:border-white rounded-2xl">
              <div className="flex flex-col smPh:flex-row items-center py-3 smPh:space-x-6 sm:space-x-10 justify-around">
                <FontSize
                  size={size}
                  setSize={setSize}
                  setFontSize={setFontSize}
                  setLineHeight={setLineHeight}
                />
                <FontSelector font={font} setFont={setFont} />
              </div>
            </div>
            <div
              className="flex flex-col space-y-4 my-6"
              style={{
                fontSize: `${fontSize}rem`,
                lineHeight: `${lineHeight}rem`,
                fontFamily: font,
              }}
            >
              {text}
            </div>
            <div
              onClick={handleReset}
              className="mt-6 w-1/4 h-[4rem] rounded-xl bg-slate-400 dark:bg-slate-600 dark:text-white flex items-center justify-center self-center hover:cursor-pointer font-bold font-[ProximaNova] shadow-xl"
            >
              Reset
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="flex flex-col w-4/5 self-center">
              <TextareaAutosize
                placeholder="Paste text to format here..."
                className="leading-5 border-solid border border-black rounded-md text-black"
                minRows={15}
                onChange={handleChange}
                value={value}
                style={{ border: "solid" }}
              />
            </div>
            <div
              onClick={handleClick}
              className="mt-6 w-1/4 h-[4rem] rounded-xl bg-slate-400 dark:bg-slate-600 dark:text-white flex items-center justify-center self-center hover:cursor-pointer font-bold font-[ProximaNova] shadow-xl"
            >
              Submit
            </div>
          </React.Fragment>
        )}
      </div>
    </Container>
  );
}
