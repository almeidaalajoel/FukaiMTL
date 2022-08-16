import React, { Fragment } from "react";
import { Header } from "../index";

export default function Layout({ children, setDark, dark }) {
  return (
    <Fragment>
      <Header setDark={setDark} dark={dark} />
      {children}
    </Fragment>
  );
}
