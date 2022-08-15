import React from "react";

export default function FontSize({
  size,
  setSize,
  setFontSize,
  setLineHeight,
}) {
  const getSmaller = (s) => {
    switch (s) {
      case "xs":
        return "funo";
      case "s":
        return "xs";
      case "base":
        return "s";
      case "lg":
        return "base";
      case "xl":
        return "lg";
      case "2xl":
        return "xl";
      case "3xl":
        return "2xl";
      case "4xl":
        return "3xl";
    }
  };
  const getBigger = (s) => {
    switch (s) {
      case "xs":
        return "s";
      case "s":
        return "base";
      case "base":
        return "lg";
      case "lg":
        return "xl";
      case "xl":
        return "2xl";
      case "2xl":
        return "3xl";
      case "3xl":
        return "4xl";
      case "4xl":
        return "funo";
    }
  };
  const smaller = (s) => {
    if (getSmaller(s) !== "funo") {
      localStorage.setItem("size", getSmaller(s));
      setSize(getSmaller(s));
    }
  };
  const bigger = (s) => {
    if (getBigger(s) !== "funo") {
      localStorage.setItem("size", getBigger(s));
      setSize(getBigger(s));
    }
  };

  //   return (
  //     <div className="flex justify-center flex-row mb-3">
  //       <span
  //         className={size === "xs" ? "flex flex-[3]" : "flex flex-[2]"}
  //       ></span>
  //       <span className={size === "xs" ? "hidden" : "flex flex-1 justify-center"}>
  //         <svg
  //           onClick={() => smaller(size)}
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-7 w-7 hover:cursor-pointer"
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //           color="rgb(46,51,59)"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       </span>
  //       <span className="select-none flex flex-1 justify-center">{size}</span>
  //       <span
  //         className={size === "4xl" ? "hidden" : "flex flex-1 justify-center"}
  //       >
  //         <svg
  //           onClick={() => bigger(size)}
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-7 w-7 hover:cursor-pointer"
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //           color="rgb(46,51,59)"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       </span>
  //       <span
  //         className={size === "4xl" ? "flex flex-[3]" : "flex flex-[2]"}
  //       ></span>
  //     </div>
  //   );
  // }

  return (
    <div className="flex justify-center flex-row mb-3">
      <span className="flex flex-1" />
      <span className="flex flex-1 bg-slate-200 items-center rounded-3xl h-[3rem]">
        <span className="flex flex-[2] justify-center">
          <svg
            onClick={() => smaller(size)}
            xmlns="http://www.w3.org/2000/svg"
            className={
              size === "xs" ? "hidden" : "h-7 w-7 hover:cursor-pointer"
            }
            viewBox="0 0 20 20"
            fill="currentColor"
            color="rgb(46,51,59)"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="select-none flex flex-[8] justify-center">{size}</span>
        <span className="flex flex-[2] justify-center">
          <svg
            onClick={() => bigger(size)}
            xmlns="http://www.w3.org/2000/svg"
            className={
              size === "4xl" ? "hidden" : "h-7 w-7 hover:cursor-pointer"
            }
            viewBox="0 0 20 20"
            fill="currentColor"
            color="rgb(46,51,59)"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
      <span className="flex flex-1" />
    </div>
  );
}
