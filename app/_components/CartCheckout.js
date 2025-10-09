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
  const onSubmit = async (data) => {
    const id = nanoid();
    const formdata = {
      order_id: id,
      orders: cart,
      email: data.email,
      total: new Intl.NumberFormat().format(total),
      cost: {
        shipping: shipping,
        Grand_Total: new Intl.NumberFormat().format(total + shipping),
        vat: new Intl.NumberFormat().format(vat),
      },
    };

    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });

          const result = await response.json();

          if (result.success) {
            open("checkout");
            toast.success("Order confirmation sent to mail");
            resolve(result);
          } else {
            open("");
            toast.error("There was an error.. Try again");

            resolve(result);
          }
        } catch (error) {
          open("");
          toast.error("There was an error.. Try again");

          resolve({ success: false });
        }
      }, 1000);
    });
  };
  const onError = (errors) => {
    console.log("Errors:", errors);
  };
  return (
    <main>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[1em] items-center lg:flex-row lg:gap-[1.7em] lg:items-start  w-full "
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
