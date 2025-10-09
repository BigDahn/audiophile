"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";
import { CartModalContext } from "../_ui/modal";
import Menu from "./Menu";

function Heading() {
  const page = usePathname();
  const params = useParams();
  const { open, openMenu, setOpenMenu, close } = useContext(CartModalContext);

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
            ? "fixed z-[9999]  w-full bg-black px-[1em] md:px-[3em] lg:px-0 "
            : pageScroll > 0 && page !== "/"
            ? "fixed z-[9999]  w-full bg-black px-[1em] md:px-[3em] lg:px-0 "
            : keyValue.length !== 1 && page !== "/"
            ? "fixed z-[9999]  w-full bg-black px-[1em]  md:px-[3em] lg:px-0 "
            : keyValue.length === 1
            ? "fixed z-[9999]  w-full bg-black px-[1em] md:px-[3em] lg:px-0 "
            : "fixed z-[9999]  w-full px-[1em] lg:px-0 md:px-[3em]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{
            once: false,
          }}
          className={`${
            pageScroll === 0 && keyValue.length !== 1 && page !== "/checkout"
              ? " px-[1em] md:px-[1em] flex  justify-between pb-[2.5em] pt-[2em]   lg:max-w-[1110px] mx-auto z-[999] border-b-[#ffff] border-b-2  "
              : page === "/checkout"
              ? "flex  justify-between pb-[2.5em] pt-[2em]   lg:max-w-[1110px] mx-auto z-[999]"
              : "flex  justify-between pb-[2.5em] pt-[2em]   lg:max-w-[1110px] mx-auto z-[999] "
          }`}
        >
          {openMenu ? (
            <Image
              alt="close"
              src="/assets/shared/mobile/icon-close.svg"
              width={26}
              height={10}
              className="lg:hidden"
              onClick={() => {
                close();
                setOpenMenu(false);
              }}
            />
          ) : (
            <Image
              alt="hamburger"
              src="/assets/shared/mobile/icon-hamburger.svg"
              width={26}
              height={10}
              className="lg:hidden"
              onClick={() => {
                open("menu"), setOpenMenu(true);
              }}
            />
          )}
          <Logo />
          <Navigation style=" hidden lg:flex gap-4 text-[#FFFFFF] font-bold" />
          <Cart />
        </motion.div>
      </header>
      {/* <Menu /> */}
    </main>
  );
}

export default Heading;
{
  /* */
}
