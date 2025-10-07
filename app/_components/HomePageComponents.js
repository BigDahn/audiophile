"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const FadeInVariations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function HomePageComponents() {
  return (
    <motion.main
      initial="initial"
      whileInView="animate"
      variants={FadeInVariations}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="grid gap-[2em]"
    >
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
    </motion.main>
  );
}

export default HomePageComponents;
