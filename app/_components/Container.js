import { Suspense } from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Loading from "../loading";

function Container({ children }) {
  return (
    <>
      <Heading />
      {children}
      <Footer />
    </>
  );
}

export default Container;
