"use client";

import Image from "next/image";

import { useFormContext } from "react-hook-form";
import Input from "../_ui/Input";
import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import FormErrorMessage from "./FormErrorMessage";
import PaymentDetails from "./PaymentDetails";

function Checkout() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const radioValue = watch("payment");

  return (
    <main className="w-[730px] bg-white px-[2em] py-[3em] rounded-md flex flex-col gap-[2em] ">
      <h3 className="uppercase font-bold text-[32px] leading-[36px] tracking-[1.14px]">
        checkout
      </h3>
      <div className="flex flex-col gap-[4em]  px-2">
        {/* Billing Address */}
        <BillingForm errors={errors} register={register} />

        {/* shipping address */}
        <ShippingForm errors={errors} register={register} />
        {/* payment details */}

        <PaymentDetails
          errors={errors}
          register={register}
          radioValue={radioValue}
        />
      </div>
    </main>
  );
}

export default Checkout;
