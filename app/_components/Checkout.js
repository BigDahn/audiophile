"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

function Checkout({ onSubmit }) {
  const { register, watch } = useFormContext();

  const radioValue = watch("payment");
  // console.log(radioValue);

  return (
    <main className="w-[730px] bg-white px-[2em] py-[3em] rounded-md flex flex-col gap-[2em] ">
      <h3 className="uppercase font-bold text-[32px] leading-[36px] tracking-[1.14px]">
        checkout
      </h3>
      <div className="flex flex-col gap-[4em]  px-2">
        {/* Billing Address */}
        <div className="flex flex-col gap-[1em]">
          <h3 className="font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase text-[#D87D4A]">
            billing details
          </h3>
          <div className="grid grid-cols-2 gap-[2em]">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                name
              </label>
              <input
                name="name"
                className="w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("Name", {
                  required: "this field is required",
                })}
              />
            </div>
            {/* <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                email address
              </label>
              <input
                name="email"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("Email address", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="number"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                phone number
              </label>
              <input
                name="number"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("phone number", {
                  required: true,
                })}
              />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
