"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Image from "next/image";
import Navigation from "./Navigation";

function Footer() {
  const pathName = usePathname();
  // const path = pathName.replace("/", "");

  console.log(pathName);

  return (
    <main className="bg-[#101010] h-[365px] ">
      <div className="max-w-[1110px] mx-auto flex flex-col justify-center gap-[3em] items-start h-full relative ">
        {(pathName === "/" || pathName === "/checkout") && (
          <div className="w-[104px] border-b-[#D87D4A] border-b-4 absolute top-[0em] ml-[0.2em]"></div>
        )}
        <div className="flex justify-between w-full">
          <Logo />
          <Navigation />
        </div>
        <div className="flex justify-between w-full items-end">
          <h4 className="font-medium text-[15px] leading-[25px] text-[#979797] max-w-[521px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </h4>
          <div className="flex gap-3 items-center">
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
        <p className="text-[15px] font-bold leading-[25px] text-[#979797]">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </main>
  );
}

export default Footer;
