"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContainer";
import { reduce } from "../_lib/reduceFunction";
import { useForm, useFormContext } from "react-hook-form";
// import Modal from "../_ui/modal";
import { Modal } from "../_ui/modal";
import Link from "next/link";
import MiniLoader from "../_ui/MiniLoader";
import { shipping, VAT } from "../_lib/constants";

function CartSummary() {
  const {
    formState: { errors, isSubmitted, isSubmitting },
  } = useFormContext();
  const { cart } = useCart();

  const total = reduce(cart);

  // const hasErrors = isSubmitted && Object.keys(errors).length >= 1;

  // const name = hasErrors ? "" : "checkout";

  // const open = isSubmitted && !isSubmitting && name === "checkout";
  // console.log(isSubmitting, isSubmitted, name, open);

  return (
    <main className="bg-white py-[1.5em] px-[1.3em] w-[350px] flex flex-col gap-[1.3em] ">
      <h3 className="text-bold text-[18px] tracking-[1.29px] uppercase">
        Summary
      </h3>
      {cart.map((cart) => {
        const { image, name, quantity, price } = cart;
        const set = name.split(" ");

        return (
          <div
            key={name}
            className=" h-[64px] flex gap-2 items-start justify-between"
          >
            <div className="flex items-center gap-3">
              {" "}
              <Image width={64} height={64} alt="image" src={image} />
              <div>
                <h3 className="font-bold">
                  {set.splice(0, set.length - 1).join(" ")}
                </h3>
                <h5 className="font-bold text-[14px] leading-[25px] tracking-[0px] text-gray-400">
                  $ {new Intl.NumberFormat().format(price)}
                </h5>
              </div>
            </div>
            <div>
              <h3>x{quantity}</h3>
            </div>
          </div>
        );
      })}
      <section className="flex flex-col gap-[1.3em] pt-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              Total
            </h3>
            <h3 className="font-bold text-[18px]">
              $ {new Intl.NumberFormat().format(total)}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              shipping
            </h3>
            <h3 className="font-bold text-[18px] ">$ {shipping}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              var(included)
            </h3>
            <h3 className="font-bold text-[18px]">
              $ {new Intl.NumberFormat().format(VAT(total))}
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
            grand total
          </h3>
          <h3 className="text-[#D87D4A] font-bold text-[18px]">
            $ {new Intl.NumberFormat().format(total + shipping)}
          </h3>
        </div>
      </section>

      <button
        type="submit"
        className=" h-[48px] bg-[#D87D4A] flex justify-center items-center font-bold text-[13px] tracking-[1px] uppercase text-white"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <h3>Processing</h3>
            <MiniLoader />
          </div>
        ) : (
          " continue & pay"
        )}
      </button>

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
            <div>
              {cart.map((cart) => {
                const { image, name, quantity, price } = cart;
                const set = name.split(" ");
                return (
                  <div
                    key={name}
                    className="flex  items-start justify-between gap-[3em] py-3 px-3"
                  >
                    <div className="flex gap-1">
                      <Image
                        alt="property"
                        src={image}
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3 className="font-bold">
                          {set.splice(0, set.length - 1).join(" ")}
                        </h3>
                        <h5 className="font-bold text-[14px] leading-[25px] tracking-[0px] text-gray-400">
                          $ {new Intl.NumberFormat().format(price)}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] leading-[25px]">
                        x{quantity}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-black w-[198px] rounded-tr-md rounded-br-md flex flex-col justify-end py-[2em] gap-[1em] items-start px-[2em]">
              <h3 className="font-medium text-[15px] leading-[25px] text-gray-400 uppercase ">
                grand total
              </h3>
              <h3 className="font-bold text-[18px] leading-[25px] text-white uppercase ">
                $ 4,009
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
    </main>
  );
}

export default CartSummary;
