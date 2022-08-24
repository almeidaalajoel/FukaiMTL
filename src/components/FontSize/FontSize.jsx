import React from "react";

export default function FontSize({ size, setSize }) {
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

  const tSize = (s) => {
    switch (s) {
      case "xs":
        return 0;
      case "s":
        return 1;
      case "base":
        return 2;
      case "lg":
        return 3;
      case "xl":
        return 4;
      case "2xl":
        return 5;
      case "3xl":
        return 6;
      case "4xl":
        return 7;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <span>
        <svg
          onClick={() => smaller(size)}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 hover:cursor-pointer select-none ${
            size === "xs" ? "dark:stroke-gray-700" : "dark:stroke-gray-300"
          }`}
          fill="none"
          color={size === "xs" ? "gray" : "black"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <span className="w-[4rem] h-[3.6rem] flex justify-center items-center">
        <svg
          className="dark:fill-gray-300"
          width={`${2 + 0.2 * tSize(size)}rem`}
          height={`${2 + 0.2 * tSize(size)}rem`}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>text-size</title>
          <path d="M256 144L128 144 128 80 448 80 448 144 320 144 320 432 256 432 256 144ZM144 272L64 272 64 224 232 224 232 272 192 272 192 432 144 432 144 272Z" />
        </svg>
      </span>
      <span>
        <svg
          onClick={() => bigger(size)}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 hover:cursor-pointer select-none ${
            size === "4xl" ? "dark:stroke-gray-700" : "dark:stroke-gray-300"
          }`}
          fill="none"
          color={size === "4xl" ? "gray" : "black"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
  );
}
