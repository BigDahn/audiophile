"use client";

import Checkout from "./Checkout";
import CartSummary from "./CartSummary";
import { FormProvider, useForm } from "react-hook-form";
import { useCart } from "../_context/CartContainer";
import Modal from "../_ui/modal";
import EmptyCart from "./EmptyCart";

function CartCheckout() {
  const { cart } = useCart();

  console.log(cart);

  const methods = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => console.log(data);
  const onError = (errors) => {
    console.log("Errors:", errors); // Check if this logs
  };
  return (
    <main>
      <FormProvider {...methods}>
        <form
          className="flex gap-[1.7em] items-start"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          {" "}
          <Checkout />
          {cart.length >= 1 ? (
            <CartSummary />
          ) : (
            <div>
              <Modal>
                <EmptyCart />
              </Modal>
            </div>
          )}
        </form>
      </FormProvider>
    </main>
  );
}

export default CartCheckout;
