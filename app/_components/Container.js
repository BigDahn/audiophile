"use client";

import Footer from "./Footer";
import Heading from "./Heading";
import Loading from "../loading";
import Menu from "./Menu";

function Container({ children }) {
  return (
    <>
      <Heading />
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Container;
