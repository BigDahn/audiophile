"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Image from "next/image";
import Navigation from "./Navigation";

import { motion } from "motion/react";

function Footer() {
  const pathName = usePathname();

  return (
    <footer className="bg-[#101010] h-[654px] md:h-[400px] lg:h-[343px] ">
      <main className=" max-w-[375px] md:max-w-[750px] lg:max-w-[1110px] px-[1em] mx-auto flex flex-col justify-center gap-[2em] items-center  md:items-start md:h-full relative ">
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
          className="flex flex-col pt-[3.3em] md:pt-0 md:gap-[1em] gap-[3em] items-center lg:justify-between w-full md:items-start lg:flex-row"
        >
          <Logo />
          <Navigation style=" flex-col flex md:flex md:flex-row gap-4 text-[#FFFFFF] font-bold text-center" />
        </motion.div>
        <div className=" flex gap-[4em] flex-col justify-center items-center md:items-start md:flex md:flex-row lg:justify-between w-full lg:items-end  md:justify-start">
          <h4 className="font-medium text-[15px] leading-[25px] text-[#979797] max-w-[521px] md:max-w-[689px] text-center md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </h4>
          <div className="flex gap-3 items-center order-last lg:order-0 md:hidden">
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
          <p className="text-[15px] font-bold leading-[25px] text-[#979797] md:hidden">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="md:flex text-[15px] font-bold leading-[25px] text-[#979797] hidden  justify-between w-full">
          <h3> Copyright 2021. All Rights Reserved</h3>
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
        </div>
      </main>
    </footer>
  );
}

export default Footer;
