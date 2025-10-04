"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContainer";
import { reduce } from "../_lib/reduceFunction";
import { Modal } from "../_ui/modal";
import Link from "next/link";

function CartItemList() {
  const { cart, dispatch } = useCart();

  return (
    <main className="w-[377px] bg-white flex flex-col  m-auto rounded-md ">
      <div className="px-6 flex flex-col gap-[1.4em] py-4">
        <header className="flex justify-between">
          <h3 className="uppercase font-bold">Cart({cart.length})</h3>
          <button
            onClick={() => dispatch({ type: "remove/all" })}
            className="capitalize font-normal"
          >
            remove all
          </button>
        </header>
        <section className="flex flex-col gap-4">
          {cart.map((cart) => {
            const { image, name, price, quantity } = cart;

            const set = name.split(" ");

            return (
              <div
                key={name}
                className=" h-[64px] flex gap-2 items-center justify-between"
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
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex items-center justify-between px-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "decrease/cart", payload: name })
                    }
                  >
                    -
                  </button>
                  <h3>{quantity}</h3>
                  <button
                    onClick={() =>
                      dispatch({ type: "increase/cart", payload: name })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <div className="flex justify-between items-center uppercase">
          <h3 className="font-bold text-[15px] leading-[25px] tracking-[0px] text-gray-400">
            Total
          </h3>
          <h5 className="font-bold text-[18px]">
            $ {new Intl.NumberFormat().format(reduce(cart))}
          </h5>
        </div>
        <Modal.Button>
          <Link
            href="/checkout"
            className="bg-[#D87D4A] py-2 text-white uppercase font-bold text-center"
          >
            checkout
          </Link>
        </Modal.Button>
      </div>
    </main>
  );
}

export default CartItemList;
