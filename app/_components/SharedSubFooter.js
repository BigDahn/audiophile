"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FadeInVariant = {
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

function SharedSubFooter({ style }) {
  return (
    <motion.div
      variants={FadeInVariant}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      className={style}
    >
      <div className="flex flex-col items-center mx-auto lg:mx-0 lg:items-start justify-center max-w-[327px] md:max-w-[573px] lg:max-w-[445px] gap-3 md:gap-[2em]">
        <h3 className="font-bold text-[28px] text-center md:text-[40px] uppercase leading-[44px] tracking-[1.43px] lg:text-left">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h3>
        <p className="font-medium text-[15px] leading-[25px] tracking-[0px] text-center lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="md:w-[750px] lg:w-[540px] md:h-[300px] lg:h-full relative aspect-square order-first lg:order-last ">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="feeling"
          className="object-cover rounded-md flex md:hidden lg:flex"
          fill
        />
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          alt="feeling"
          fill
          className="object-cover rounded-md hidden md:flex lg:hidden"
        />
      </div>
    </motion.div>
  );
}

export default SharedSubFooter;
