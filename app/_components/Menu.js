"use client";
import React, { useContext } from "react";
import { CartModalContext, Modal } from "../_ui/modal";
import Image from "next/image";
import SharedItemList from "./SharedItemList";

import { motion } from "motion/react";
import Link from "next/link";

function Menu() {
  const { close, setOpenMenu } = useContext(CartModalContext);
  return (
    <Modal.ModalWindow
      open="menu"
      style="fixed max-h-[600px] md:max-h-[340px] rounded-bl-md rounded-br-md w-full  z-[999999999999]  bg-white  left-auto overflow-y-scroll flex lg:hidden "
      className="bg-black/50 fixed top-[6em] left-0 z-[99999999] h-screen w-screen flex m-auto lg:hidden"
    >
      <div className="max-w-[327px] md:max-w-[698px]  h-[670px] md:h-[320px]  flex flex-col md:flex-row items-center justify-center gap-[3em]  w-full  mx-auto    ">
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphone"
            width={140}
            height="104"
            className="absolute mb-[6em] "
          />

          <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
            <h3 className="font-bold text-[15px] text-black tracking-[1.07px] text-center uppercase">
              HeadPhones
            </h3>
            <Link
              href="/headphones"
              onClick={() => {
                close(), setOpenMenu(false);
              }}
              className=" flex gap-2 items-center justify-center "
            >
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
            </Link>
          </div>
        </div>
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers"
            width={130}
            height="104"
            className="absolute mb-[5em] "
          />

          <div className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2">
            <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
              speakers
            </h3>
            <Link
              href="/speakers"
              onClick={() => {
                close(), setOpenMenu(false);
              }}
              className=" flex gap-2 items-center justify-center "
            >
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
            </Link>
          </div>
        </div>
        <div className="bg-[#F1F1F1] rounded-md  w-[327px] h-[140px]  flex flex-col items-center justify-evenly  relative">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones"
            width={130}
            height="104"
            className="absolute mb-[5em] "
          />
          <Link
            href="/earphones"
            onClick={() => {
              close(), setOpenMenu(false);
            }}
            className=" mt-[4em] lg:mt-[6em] flex flex-col gap-2"
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
                  width={5}
                  alt="here"
                  height={10}
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Modal.ModalWindow>
  );
}

export default Menu;
