"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContainer";

function CartItemList() {
  const { cart } = useCart();

  return (
    <main className="w-[377px] bg-white flex flex-col  m-auto rounded-md ">
      <div className="px-6 flex flex-col gap-[1.4em] py-4">
        <header className="flex justify-between">
          <h3 className="uppercase font-bold">Cart({cart.length})</h3>
          <button className="capitalize font-normal">remove all</button>
        </header>
        <section className="flex flex-col gap-4">
          {cart.map((cart) => {
            const { image, name, price, quantity } = cart;

            console.log(name.split(" "));
            return (
              <div
                key={name}
                className=" h-[64px] flex gap-2 items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {" "}
                  <Image width={64} height={64} alt="image" src={image} />
                  <div>
                    <h3>{name.split(" ")[0]}</h3>
                    <h5>$ {price}</h5>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex items-center justify-between px-3">
                  <button>-</button>
                  <h3>{quantity}</h3>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </section>
        <div className="flex justify-between items-center uppercase">
          <h3>Total</h3>
          <h5>$ 4000</h5>
        </div>
        <button className="bg-[#D87D4A] py-2 text-white uppercase font-bold">
          checkout
        </button>
      </div>
    </main>
  );
}

export default CartItemList;
