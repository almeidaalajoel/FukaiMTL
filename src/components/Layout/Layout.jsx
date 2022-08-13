import React from "react";
import { Header } from "../index";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
