import React from "react";
import NavigateBack from "../_components/NavigateBack";
import EmptyCart from "../_components/EmptyCart";
import Modal from "../_ui/modal";
import Checkout from "../_components/Checkout";
import CartSummary from "../_components/CartSummary";

function page() {
  return (
    <main className="w-screen bg-[#F2F2F2] h-screen ">
      <section className=" max-w-[1110px] mx-auto flex flex-col  py-[9em] gap-[3em]">
        <NavigateBack />
        <section className="flex gap-[3em] justify-between items-start">
          <div>
            <Checkout />
          </div>
          <div>
            <CartSummary />
          </div>
        </section>
      </section>
    </main>
  );
}

export default page;
{
  /* <div>
  <Modal>
    <EmptyCart />
  </Modal>
</div>; */
}
