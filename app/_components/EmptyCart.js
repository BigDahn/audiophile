"use client";

import Image from "next/image";
import React from "react";
import Modal from "../_ui/modal";

function EmptyCart() {
  return (
    <main className="w-[377px] bg-white max-h-[488px] flex flex-col  m-auto rounded-md ">
      <div className="flex flex-col gap-4 justify-center w-full items-center px-5 py-5">
        <Image
          src="/assets/shared/desktop/empty-cart.svg"
          alt="empty-cart"
          width={50}
          height={30}
        />
        <div className="flex flex-col justify-center w-full gap-1 items-center">
          <h3>Your cart is empty!</h3>
          <p className="text-center">
            Browse our categories and discover our best deals!
          </p>
          <Modal.Button>
            <button className="w-[160px] mt-2 h-[48px] bg-[#D87D4A] text-white  text-[13px] font-bold tracking-[1px] flex items-center justify-center uppercase ">
              start shopping
            </button>
          </Modal.Button>
        </div>
      </div>
    </main>
  );
}

export default EmptyCart;
