"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";

function Heading() {
  const page = usePathname();
  const params = useParams();

  let keyValue = Object.keys(params);

  let { scrollY } = useScroll();
  const [pageScroll, setPageScroll] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setPageScroll(latest);
  });
  return (
    <main>
      <header
        className={`${
          page === "/" && pageScroll > 0
            ? "fixed z-[9999]  w-full bg-black "
            : pageScroll > 0 && page !== "/"
            ? "fixed z-[9999]  w-full bg-black"
            : keyValue.length !== 1 && page !== "/"
            ? "fixed z-[9999]  w-full bg-black"
            : keyValue.length === 1
            ? "fixed z-[9999]  w-full bg-black"
            : "fixed z-[9999]  w-full "
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className={`${
            pageScroll === 0 && keyValue.length !== 1 && page !== "/checkout"
              ? "flex  justify-between pb-[2.5em] pt-[2em]   max-w-[1110px] mx-auto z-[999] border-b-[#ffff] border-b-2  "
              : page === "/checkout"
              ? "flex  justify-between pb-[2.5em] pt-[2em]   max-w-[1110px] mx-auto z-[999]"
              : "flex  justify-between pb-[2.5em] pt-[2em]   max-w-[1110px] mx-auto z-[999] "
          }`}
        >
          <Logo />
          <Navigation />
          <Cart />
        </motion.div>
      </header>
    </main>
  );
}

export default Heading;
{
  /* */
}
