"use client";

import Checkout from "./Checkout";
import CartSummary from "./CartSummary";
import { FormProvider, useForm } from "react-hook-form";

function CartCheckout() {
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
          <CartSummary />
        </form>
      </FormProvider>
    </main>
  );
}

export default CartCheckout;
