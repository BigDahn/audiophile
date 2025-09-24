"use client";

import Image from "next/image";
import Modal from "../_ui/modal";
import { Link } from "lucide-react";

function Cart() {
  return (
    <Modal>
      <Modal.Open open="modal">
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          height="20"
          quality={100}
          width="24"
        />
      </Modal.Open>
      <Modal.ModalWindow open="modal">
        <main className=" fixed inset-0 z-[9999] top-[8em] left-[45em]">
          <div className="w-[377px] bg-white max-h-[488px] flex flex-col  m-auto rounded-md ">
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
                  <button
                    className="w-[160px] mt-2 h-[48px] bg-[#D87D4A] text-white  text-[13px] font-bold tracking-[1px] flex items-center justify-center uppercase "
                    // onClick={() => alert("sdsd")}
                  >
                    start shopping
                  </button>
                </Modal.Button>
              </div>
            </div>
          </div>
        </main>
      </Modal.ModalWindow>
    </Modal>
    //   <button onClick={() => alert("hello")}>

    //   </button>
    //
  );
}

export default Cart;
