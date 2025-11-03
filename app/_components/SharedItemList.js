"use client";

import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fadeInVariation = {
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

function SharedItemList() {
  return (
    <m.div
      variants={fadeInVariation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      className="max-w-[327px] md:max-w-[750px]  lg:max-w-[1110px] flex flex-col items-center gap-[8em] md:gap-[2em]  lg:gap-[5em] md:flex md:flex-row w-screen lg:w-full md:h-[217px]  mx-auto md:justify-between lg:h-[284px] lg:items-end  my-[3em] lg:my-[3em]"
    >
      <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[165px]  md:w-[367px] md:h-[165px] lg:w-[350px] lg:h-[204px] flex flex-col items-center justify-evenly  relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphone"
          width="256"
          height="247"
          className="lg:flex lg:absolute lg:mb-[8em] hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphone"
          width="170"
          height="120"
          className="absolute mb-[8em] md:hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphone"
          width="256"
          height="247"
          className="hidden md:flex md:absolute md:mb-[8em]  lg:hidden"
        />
        <Link
          href="/headphones"
          className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2"
          prefetch={false}
        >
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            HeadPhones
          </h3>
          <div className=" flex gap-2 items-center justify-center ">
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="here"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </span>
          </div>
        </Link>
      </div>
      <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[165px]  md:w-[367px] md:h-[165px] lg:w-[350px] lg:h-[204px] flex flex-col items-center justify-evenly  relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="speakers"
          width="256"
          height="238"
          className="lg:flex lg:absolute lg:mb-[8em] hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="speakers"
          width="256"
          height="238"
          className="absolute mb-[8em] md:hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="speakers"
          width="256"
          height="238"
          className="hidden md:flex md:absolute md:mb-[8em]  lg:hidden"
        />
        <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            speakers
          </h3>
          <Link
            href="/speakers"
            className=" flex gap-2 items-center justify-center "
            prefetch={false}
          >
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="here"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[165px]  md:w-[367px] md:h-[165px] lg:w-[350px] lg:h-[204px] flex flex-col items-center justify-evenly  relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphones"
          width="256"
          height="222"
          className="lg:flex lg:absolute lg:mb-[8em] hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphones"
          width="256"
          height="222"
          className="absolute mb-[8em] md:hidden"
        />
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphones"
          width="256"
          height="222"
          className="hidden md:flex md:absolute md:mb-[8em]  lg:hidden"
        />
        <Link
          href="/earphones"
          className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2"
          prefetch={false}
        >
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            earphones
          </h3>
          <div className=" flex gap-2 items-center justify-center ">
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="here"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </span>
          </div>
        </Link>
      </div>
    </m.div>
  );
}

export default SharedItemList;
