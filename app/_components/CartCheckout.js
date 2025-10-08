"use client";

import Checkout from "./Checkout";
import CartSummary from "./CartSummary";
import { FormProvider, useForm } from "react-hook-form";
import { useCart } from "../_context/CartContainer";
import { Modal, CartModalContext } from "../_ui/modal";

import EmptyCart from "./EmptyCart";
import emailjs from "@emailjs/browser";
import { reduce } from "../_lib/reduceFunction";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { shipping, VAT } from "../_lib/constants";
import { toast } from "react-toastify";

function CartCheckout() {
  const { cart } = useCart();
  const { open } = useContext(CartModalContext);

  const total = reduce(cart);
  const vat = VAT(total);

  const methods = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    const id = nanoid();
    const formdata = {
      order_id: id,
      orders: cart,
      email: data.Email,
      total: new Intl.NumberFormat().format(total),
      cost: {
        shipping: shipping,
        Grand_Total: new Intl.NumberFormat().format(total + shipping),
        vat: new Intl.NumberFormat().format(vat),
      },
    };
    open("checkout");

    // return new Promise((resolve) => {
    //   setTimeout(
    //     () =>
    //       resolve(
    //         emailjs
    //           .send(
    //             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //             process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //             formdata,
    //             {
    //               publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    //             }
    //           )
    //           .then(
    //             () => {
    //               open("checkout");
    //               toast.success("order confirmation sent to mail");
    //               toast.success("order confirmation sent to mail");
    //             },
    //             (error) => {
    //               open("");
    //               toast.error("There was an error.. Try again");
    //               toast.error("There was an error.. Try again");
    //             }
    //           )
    //       ),
    //     1000
    //   );
    // });
  };
  const onError = (errors) => {
    console.log("Errors:", errors);
  };
  return (
    <main>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[1em] items-center lg:flex-row lg:gap-[1.7em] lg:items-start"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          {" "}
          <Checkout />
          {cart.length >= 1 ? (
            <CartSummary />
          ) : (
            <div>
              <EmptyCart />
            </div>
          )}
        </form>
      </FormProvider>
    </main>
  );
}

export default CartCheckout;
