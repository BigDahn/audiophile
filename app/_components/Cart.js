"use client";

import Image from "next/image";
import { Modal } from "../_ui/modal";
import { useCart } from "../_context/CartContainer";
import EmptyCart from "./EmptyCart";
import dynamic from "next/dynamic";
import Loading from "../loading";

const CartItemList = dynamic(() => import("./CartItemList"), {
  loading: () => <Loading />,
  ssr: false,
});

function Cart() {
  const { cart } = useCart();
  return (
    <>
      <Modal.Open open="modal">
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          className="relative w-auto h-auto"
          height={0}
          width={0}
        />
        {cart.length >= 1 && (
          <div className="rounded-full text-white text-center flex items-center justify-center text-[13px] font-bold h-[20px] w-[20px] z-[99999] bg-[#D87D4A] fixed ml-3 top-7">
            {cart.length}
          </div>
        )}
      </Modal.Open>
      <Modal.ModalWindow
        open="modal"
        style="fixed  h-fit w-full md:w-full lg:w-fit  z-[9999] top-[11%]  left-auto md:left-[25%] lg:left-[61%]"
        className="bg-black/50 fixed top-0 left-0 z-[99999999] h-full w-full flex m-auto"
      >
        {cart.length < 1 ? <EmptyCart /> : <CartItemList />}
      </Modal.ModalWindow>
    </>
  );
}

export default Cart;
