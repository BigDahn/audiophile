"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Image from "next/image";
import Navigation from "./Navigation";

import { motion } from "motion/react";

function Footer() {
  const pathName = usePathname();

  return (
    <main className="bg-[#101010] h-[654px] lg:h-[343px] ">
      <div className=" max-w-[375px] lg:max-w-[1110px] mx-auto flex flex-col justify-center gap-[3em] items-center  lg:items-start lg:h-full relative ">
        {(pathName === "/" || pathName === "/checkout") && (
          <div className="w-[104px] border-b-[#D87D4A] border-b-4 absolute top-[0em] ml-[0.2em]"></div>
        )}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.07,
            type: "linear",
          }}
          viewport={{
            once: false,
          }}
          className="flex flex-col pt-[3.3em] lg:pt-0 lg:gap-[1em] gap-[3em] items-center lg:justify-between w-full lg:flex-row"
        >
          <Logo />
          <Navigation style=" flex-col flex lg:flex lg:flex-row gap-4 text-[#FFFFFF] font-bold text-center" />
        </motion.div>
        <div className=" flex gap-[4em] flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between w-full lg:items-end">
          <h4 className="font-medium text-[15px] leading-[25px] text-[#979797] max-w-[521px] text-center lg:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </h4>
          <div className="flex gap-3 items-center order-last lg:order-0">
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="socials"
              width={24}
              height={24}
              className="hover:fill-amber-500 cursor-pointer"
            />
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="socials"
              width={24}
              height={24}
              className="hover:fill-amber-500 cursor-pointer"
            />
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="socials"
              width={24}
              height={24}
              className="hover:fill-amber-500 cursor-pointer"
            />
          </div>
          <p className="text-[15px] font-bold leading-[25px] text-[#979797] lg:hidden">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="lg:flex text-[15px] font-bold leading-[25px] text-[#979797] hidden">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </main>
  );
}

export default Footer;
