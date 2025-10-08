"use client";

import Image from "next/image";
import { Modal } from "../_ui/modal";

import { useCart } from "../_context/CartContainer";
import EmptyCart from "./EmptyCart";
import CartItemList from "./CartItemList";

function Cart() {
  const { cart } = useCart();
  return (
    <>
      <Modal.Open open="modal">
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          height="20"
          quality={100}
          className="relative"
          width="24"
        />
        {cart.length >= 1 && (
          <div className="rounded-full text-white text-center flex items-center justify-center text-[13px] font-bold h-[20px] w-[20px] z-[99999] bg-[#D87D4A] fixed ml-3 top-7">
            {cart.length}
          </div>
        )}
      </Modal.Open>
      <Modal.ModalWindow
        open="modal"
        style="fixed  h-fit w-full lg:w-fit  z-[9999] top-[11%]  left-auto lg:left-[61%]"
      >
        {cart.length < 1 ? <EmptyCart /> : <CartItemList />}
      </Modal.ModalWindow>
    </>
  );
}

export default Cart;
