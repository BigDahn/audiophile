import React from "react";
import NavigateBack from "../_components/NavigateBack";
import EmptyCart from "../_components/EmptyCart";
import Modal from "../_ui/modal";
import Checkout from "../_components/Checkout";
import CartSummary from "../_components/CartSummary";
import CartCheckout from "../_components/CartCheckout";

function page() {
  return (
    <main className="w-screen bg-[#F2F2F2] min-h-screen">
      <section className=" max-w-[1110px]  mx-auto flex flex-col  py-[9em] gap-[3em]">
        <NavigateBack />
        <CartCheckout />
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
