import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { TOC } from "../../components";

const TileaTOC = () => {
  const chapters = [
    {
      name: "Volume 3 Chapter 37: The Pride of Rosetta Pratoline",
      link: "/tileasworries/v3c37",
    },
    {
      name: "Volume 3 Chapter 38: My Oath and the Lady's Decision",
      link: "/tileasworries/v3c38",
    },
    {
      name: "Volume 3 Chapter 39: What Dark Matter, Production Cheat? ★",
      link: "/tileasworries/v3c39",
    },
  ];
  return (
    <TOC
      chapters={chapters}
      image={require("../../assets/TileasWorries/tileasworries1.jpg")}
      title={"Tilea's Worries"}
    />
  );
};

export default TileaTOC;
