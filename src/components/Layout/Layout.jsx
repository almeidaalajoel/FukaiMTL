import React from "react";
import { Header } from "../index";

export default function Layout({ children, setDark, dark }) {
  return (
    <>
      <Header setDark={setDark} dark={dark} />
      {children}
    </>
  );
}
