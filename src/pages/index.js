import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NovelTile } from "../components";
import Markdown from "markdown-to-jsx";

export default function Home() {
  const [tileaDesc, setTileaDesc] = useState("");

  useEffect(() => {
    fetch("tilea/description.md")
      .then((r) => r.text())
      .then((description) => setTileaDesc(description));
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex space-y-4 bg-white w-full flex-col items-center lg:w-[70rem] flex-grow pt-6 ">
        <h1>Novels</h1>
        <div className="w-[70%] lg:w-[54rem] h-[1px] bg-gray-300" />
        <div className="flex bg-white w-[100vw] lg:w-[70rem] flex-col items-center">
          <NovelTile
            title={`Tilea's Worries`}
            description={tileaDesc}
            link={"/tileasworries"}
            author={"里奈使徒"}
            image={require("../assets/TileasWorries/tileasworries1.jpg")}
          />
        </div>
      </div>
    </div>
  );
}
