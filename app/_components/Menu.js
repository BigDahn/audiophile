"use client";
import React from "react";
import { Modal } from "../_ui/modal";
import Image from "next/image";
import SharedItemList from "./SharedItemList";

import { motion } from "motion/react";

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

function Menu() {
  return (
    <Modal.ModalWindow
      open="menu"
      style="fixed h-fit rounded-bl-md rounded-br-md w-full  z-[999999999999]  bg-white  left-auto overflow-y-scroll flex "
      className="bg-black/50 fixed top-[6em] left-0 z-[99999999] h-screen w-screen flex m-auto"
    >
      <div
        // variants={fadeInVariation}
        // initial="initial"
        // whileInView="animate"
        // viewport={{
        //   once: false,
        // }}
        className="max-w-[327px] h-[683px]   flex flex-col items-center justify-center gap-[3em]  w-full  mx-auto    "
      >
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphone"
            width={130}
            height="104"
            className="absolute mb-[5em] md:hidden"
          />
          {/* <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphone"
            width="210"
            height="160"
            className="hidden md:absolute md:mb-[8em]  lg:hidden"
          /> */}
          <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
            <h3 className="font-bold text-[15px] text-black tracking-[1.07px] text-center uppercase">
              HeadPhones
            </h3>
            <div className=" flex gap-2 items-center justify-center ">
              <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
                shop
              </p>
              <span>
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  width={5}
                  alt="here"
                  height={10}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers"
            width={130}
            height="104"
            className="absolute mb-[5em] md:hidden"
          />
          {/* <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers"
            width="210"
            height="160"
            className="hidden md:absolute md:mb-[8em]  lg:hidden"
          /> */}
          <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
            <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
              speakers
            </h3>
            <div className=" flex gap-2 items-center justify-center ">
              <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
                shop
              </p>
              <span>
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  width={5}
                  alt="here"
                  height={10}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          {/* <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones"
            width="170"
            height="120"
            className="absolute mb-[8em] md:hidden"
          /> */}
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones"
            width={130}
            height="104"
            className="absolute mb-[5em] md:hidden"
          />
          <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
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
                  width={5}
                  alt="here"
                  height={10}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal.ModalWindow>
  );
}

export default Menu;
