"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const FadeInVariations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.07,
      type: "linear",
    },
  },
};

// max-w-[370px] md:max-w-[600px] items-center  mx-auto  justify-center lg:max-w-[1110px]

function HomePageComponents() {
  return (
    <motion.main
      initial="initial"
      whileInView="animate"
      variants={FadeInVariations}
      viewport={{
        once: false,
      }}
      className="grid gap-[3em]  "
    >
      <div className="max-w-[370px] md:max-w-[750px]  lg:max-w-[1110px] w-screen  mx-auto  h-[600px] md:h-[720px] lg:h-[560px] rounded-md   mt-[0.4em] lg:mt-[4em] bg-[#D87D4A] overflow-hidden">
        <div className="bg-[url(/assets/home/desktop/pattern-circles.svg)] lg:w-[80%]   bg-cover  bg-no-repeat bg-bottom lg:bg-top-right relative top-[-6em] md:top-[3em] lg:top-[0em] lg:left-[0em]   flex justify-center  ">
          <div className=" flex flex-col lg:flex lg:flex-row mx-auto lg:items-start relative top-[9em] mt-0 lg:mt-[5em] gap-[4em] md:gap-[5em] lg:gap-[6em] items-center justify-center lg:ml-[8em] md:top-0">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="..."
              width="0"
              height="0"
              className="w-[100%] h-auto hidden lg:flex"
            />
            {/* src="/assets/home/tablet/image-speaker-zx9.png" */}
            <Image
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="speaker"
              width={172}
              height={207}
              className="flex md:hidden"
            />
            <Image
              src="/assets/home/tablet/image-speaker-zx9.png"
              alt="speaker"
              width={197}
              height={237}
              className="hidden md:flex lg:hidden"
            />
            <div className=" w-[280px] lg:w-[349px] flex flex-col gap-4 justify-center items-center text-center lg:items-start  lg:text-left">
              <h2 className="font-bold text-[36px]  leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] lg:tracking-[2px] text-white uppercase">
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
      {/* FOR LARGE SCREENS (LAPTOP) */}
      <div className="max-w-[1110px]  w-full  mx-auto  h-[284px] justify-center px-[6em] gap-[2em] bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] bg-center bg-cover bg-no-repeat rounded-md lg:flex lg:flex-col hidden ">
        <h3 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h3>
        <Link
          href="\speakers\zx7-speaker"
          className="w-[160px] h-[48px] bg-[#000000] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
        >
          see product
        </Link>
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="max-w-[370px]  w-full  mx-auto  h-[284px] justify-center px-[2em] gap-[2em] bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)]  bg-center bg-cover bg-no-repeat rounded-md flex flex-col md:hidden">
        <h3 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h3>
        <Link
          href="\speakers\zx7-speaker"
          className="w-[160px] h-[48px] bg-transparent text-black border-black border-2 uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
        >
          see product
        </Link>
      </div>
      {/* FOR TABLET SCREENS */}
      <div className="max-w-[750px]  w-full  mx-auto  h-[320px] justify-center px-[2em] gap-[2em] bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]  bg-center bg-cover bg-no-repeat rounded-md hidden md:flex md:flex-col lg:hidden">
        <h3 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h3>
        <Link
          href="\speakers\zx7-speaker"
          className="w-[160px] h-[48px] bg-transparent text-black border-black border-2 uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
        >
          see product
        </Link>
      </div>
      <div className=" max-w-[370px] md:max-w-[750px]  lg:max-w-[1110px]  w-full  mx-auto  lg:h-[320px] rounded-md flex flex-col gap-3 md:flex md:flex-row  lg:gap-[3em]  justify-between">
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          width={540}
          height={320}
          className="rounded-md md:hidden lg:flex"
          alt="desc"
        />
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          width={360}
          height={320}
          className="rounded-md hidden md:flex lg:hidden"
          alt="desc"
        />
        <div className="bg-[#F1F1F1] w-full md:w-[360px] lg:w-[540px] h-[200px] md:h-[320px] rounded-md flex-col flex justify-center px-[2em] lg:px-[6em] gap-[2em]">
          <h3 className="font-bold text-[28px] tracking-[2px]">
            YX1 EARPHONES
          </h3>
          <Link
            href="\earphones\yx1-earphones"
            className="w-[160px] h-[48px] bg-transparent lg:bg-[#000000] lg:text-white uppercase text-[13px] font-bold tracking-[1px] text-black border-black border-2 flex items-center justify-center "
          >
            see product
          </Link>
        </div>
      </div>
    </motion.main>
  );
}

export default HomePageComponents;
