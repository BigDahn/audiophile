import React from "react";
import Heading from "./_components/Heading";
import bg from "@/public/assets/home/desktop/image-hero.jpg";
import Image from "next/image";
import Link from "next/link";
import SharedItemList from "./_components/SharedItemList";
import SharedSubFooter from "./_components/SharedSubFooter";

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
      <div className="max-w-[1110px]  w-full  mx-auto  h-[560px] rounded-md  mt-[4em] bg-[#D87D4A] overflow-hidden">
        <div className="bg-[url(/assets/home/desktop/pattern-circles.svg)] w-[88%]    bg-cover  bg-no-repeat bg-top-right flex justify-center  ">
          <div className="flex items-start mt-[5em] gap-[6em] justify-center ml-[8em] ">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker"
              width={410}
              height={483}
            />
            <div className=" w-[349px] flex flex-col gap-4 justify-center items-start  ">
              <h2 className="font-bold text-[56px] leading-[58px] tracking-[2px] text-white uppercase">
                zx9 speaker
              </h2>
              <p className="font-medium text-[15px] leading-[25px] tracking-[0px] text-white">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                href="\speakers\zx9-speaker"
                className="w-[160px] h-[48px] bg-[#4C4C4C] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center rounded-sm"
              >
                see product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1110px]  w-full  mx-auto  h-[284px] justify-center px-[6em] gap-[2em] bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] bg-center bg-cover bg-no-repeat rounded-md flex flex-col ">
        <h3 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h3>
        <Link
          href="\speakers\zx7-speaker"
          className="w-[160px] h-[48px] bg-[#000000] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
        >
          see product
        </Link>
      </div>
      <div className="max-w-[1110px]  w-full  mx-auto  h-[320px] rounded-md flex gap-[3em] ">
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          width={540}
          height={320}
          className="rounded-md"
          alt="desc"
        />
        <div className="bg-[#F1F1F1] w-[540px] h-[320px] rounded-md flex-col flex justify-center px-[6em] gap-[2em]">
          <h3 className="font-bold text-[28px] tracking-[2px]">
            YX1 EARPHONES
          </h3>
          <Link
            href="\earphones\yx1-earphones"
            className="w-[160px] h-[48px] bg-[#000000] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
          >
            see product
          </Link>
        </div>
      </div>
      <SharedSubFooter />
    </div>
  );
}

export default page;
