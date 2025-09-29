"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContainer";

function CartSummary() {
  const { cart } = useCart();
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
      <section className="flex flex-col gap-2 pt-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              Total
            </h3>
            <h3>$ 3400</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              shipping
            </h3>
            <h3>$ 3400</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
              var(included)
            </h3>
            <h3>$ 3400</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-[14px] leading-[25px] text-gray-400 font-medium">
            grand total
          </h3>
          <h3 className="text-[#D87D4A]">$ 3400</h3>
        </div>
      </section>

      <button className=" h-[48px] bg-[#D87D4A] flex justify-center items-center">
        continue & pay
      </button>
    </main>
  );
}

export default CartSummary;
