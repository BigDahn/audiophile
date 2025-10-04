"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContainer";
import { reduce } from "../_lib/reduceFunction";
import { useFormContext } from "react-hook-form";

import MiniLoader from "../_ui/MiniLoader";
import { shipping, VAT } from "../_lib/constants";
import ConfirmationModal from "./ConfirmationModal";

function CartSummary() {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const { cart } = useCart();

  //  calculate the total
  const total = reduce(cart);

  return (
    <main className="bg-white py-[1.5em] px-[1.3em] w-[350px] flex flex-col gap-[1.3em] ">
      <h3 className="text-bold text-[18px] tracking-[1.29px] uppercase">
        Summary
      </h3>
      {cart.map((cart) => {
        const { image, name, quantity, price } = cart;
        const ItemName = name.split(" ");

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
                  {ItemName.splice(0, ItemName.length - 1).join(" ")}
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

      <ConfirmationModal cart={cart} total={total} shipping={shipping} />
    </main>
  );
}

export default CartSummary;
