import React from "react";

import bg from "@/public/assets/home/desktop/image-hero.jpg";
import sg from "@/public/assets/home/mobile/image-header.jpg";
import Image from "next/image";
import Link from "next/link";
import SharedItemList from "./_components/SharedItemList";
import SharedSubFooter from "./_components/SharedSubFooter";
import HomePageComponents from "./_components/HomePageComponents";

function page() {
  return (
    <div className="grid gap-[4em] lg:gap-[2em] pb-[2em] lg:pb-2 ">
      <main className="relative h-screen  flex items-center justify-start">
        <div className="absolute inset-0   lg:w-full lg:h-full">
          <Image
            src={bg}
            alt="hero"
            fill
            className="lg:object-cover lg:flex hidden"
            placeholder="blur"
            quality={80}
          />
          <Image
            src={sg}
            alt="hero"
            fill
            className="object-cover flex lg:hidden"
            placeholder="blur"
            quality={80}
          />

          <div className="text-white relative w-full flex h-full items-center justify-start max-w-[1110px]  mx-auto   ">
            <div className=" max-w-[328px] md:max-w-[379px] m-auto lg:m-0 lg:max-w-[398px] flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start  gap-[1.8em]">
              <h3 className="font-normal text-[14px] tracking-[10px] leading-normal uppercase">
                New product
              </h3>
              <h1 className="font-bold text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.29px] uppercase md:tracking-[2px] text-[#ffffff]">
                XX99 Mark II Headphones
              </h1>
              <p className="font-medium text-[15px] leading-[25px] tracking-[0px] max-w-[349px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                href="\headphones\xx99-mark-two-headphones"
                className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] flex items-center justify-center font-bold leading-normal tracking-[1px] text-[13px]"
              >
                see product
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className=" lg:max-w-[1110px] md:max-w-screen  flex-col flex items-center mx-auto">
        <SharedItemList />
        <HomePageComponents />

        <SharedSubFooter style=" max-w-[370px] md:max-w-[750px] lg:max-w-[1110px]  w-full  mx-auto  lg:h-[588px] h-[698px] md:h-[633px] rounded-md lg:flex lg:flex-row lg:gap-[9em] my-[2em] md:my-[2em] lg:my-[4em] flex flex-col gap-[1em] md:gap-[3em] " />
      </div>
    </div>
  );
}

export default page;
