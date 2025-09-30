"use client";

import Checkout from "./Checkout";
import CartSummary from "./CartSummary";

function CartCheckout() {
  function handleSubmit() {
    // alert("clicked");
    return function getData(data) {
      console.log(data);
    };
  }

  return (
    <main className="flex gap-[1.7em] items-start">
      <Checkout onSubmit={handleSubmit} />
      <CartSummary onClick={handleSubmit} />
    </main>
  );
}

export default CartCheckout;
