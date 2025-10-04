"use client";

import Image from "next/image";
import { Modal } from "../_ui/modal";
import Link from "next/link";
import { useState } from "react";
import MinimizedCartList from "./MinimizedCartList";
import MaximizedCartList from "./MaximizedCartList";

function ConfirmationModal({ cart, total, shipping }) {
  const [showLess, setShowLess] = useState(true);

  return (
    <Modal.ModalWindow open="checkout">
      <main className=" fixed inset-0 z-[9999] top-[3em] mx-auto w-[500px] h-fit bg-white flex flex-col gap-[2em] px-[2em] py-[2.3em]">
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="confirm"
          width={64}
          height={64}
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase ">
            Thank you <br />
            for your order
          </h3>
          <p className="font-medium text-[15px] leading-[25px]">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="w-[440px]  rounded-md bg-[#F1F1F1] flex  justify-between">
          <div className="flex flex-col p-2 pl-3  ">
            {showLess ? (
              <MinimizedCartList cart={cart} />
            ) : (
              <MaximizedCartList cart={cart} />
            )}

            {cart.length > 2 && (
              <>
                {" "}
                <div className="border-b-2 border-b-gray-400 mt-1"></div>
                <button
                  onClick={() => setShowLess(!showLess)}
                  className="text-[12px] font-bold tracking-[-0.21px] text-black/40 text-center pt-2 cursor-pointer"
                >
                  {showLess
                    ? `and ${cart.length - 1} other item(s)`
                    : "view less"}
                </button>
              </>
            )}
          </div>
          <div className="bg-black w-[198px] rounded-tr-md rounded-br-md flex flex-col justify-end py-[2em] gap-[1em] items-start px-[2em]">
            <h3 className="font-medium text-[15px] leading-[25px] text-gray-400 uppercase ">
              grand total
            </h3>
            <h3 className="font-bold text-[18px] leading-[25px] text-white uppercase ">
              $ {new Intl.NumberFormat().format(total + shipping)}
            </h3>
          </div>
        </div>
        <Link
          href="/"
          className="uppercase bg-[#D87D4A] hover:bg-[#FBAF85] w-full h-[48px] py-3 text-white text-[13px] tracking-[1px] font-bold flex items-center justify-center"
        >
          back to home
        </Link>
      </main>
    </Modal.ModalWindow>
  );
}

export default ConfirmationModal;
