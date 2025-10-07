import React from "react";

import bg from "@/public/assets/home/desktop/image-hero.jpg";
import Image from "next/image";
import Link from "next/link";
import SharedItemList from "./_components/SharedItemList";
import SharedSubFooter from "./_components/SharedSubFooter";
import HomePageComponents from "./_components/HomePageComponents";

function page() {
  return (
    <div className="grid gap-[2em] pb-2 ">
      <main className="relative h-screen flex items-center justify-start">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bg}
            alt="hero"
            fill
            className="object-cover"
            placeholder="blur"
            quality={80}
          />
          <div className="text-white relative w-full  flex h-full items-center justify-start max-w-[1110px]  mx-auto   ">
            <div className="max-w-[398px] flex flex-col gap-[1.8em]">
              <h3 className="font-normal text-[14px] tracking-[10px] leading-normal uppercase">
                New product
              </h3>
              <h1 className="font-bold text-[56px] leading-[58px] tracking-[2px] text-[#ffffff]">
                XX99 Mark II Headphones
              </h1>
              <p className="font-medium text-[15px] leading-[25px] tracking-[0px]">
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
      <SharedItemList />
      <HomePageComponents />
      <SharedSubFooter style="max-w-[1110px]  w-full  mx-auto  h-[588px] rounded-md flex gap-[9em] my-[4em] " />
    </div>
  );
}

export default page;
