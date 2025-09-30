"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Checkout({ onSubmit }) {
  const { register, watch, handleSubmit } = useForm();

  const radioValue = watch("payment");
  console.log(radioValue);
  return (
    <main className="w-[730px] bg-white px-[2em] py-[3em] rounded-md flex flex-col gap-[2em] ">
      <h3 className="uppercase font-bold text-[32px] leading-[36px] tracking-[1.14px]">
        checkout
      </h3>
      <form
        className="flex flex-col gap-[4em]  px-2"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
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
            </div>
          </div>
        </div>
        {/* shipping address */}
        <div className="flex flex-col gap-[1em] ">
          <h3 className="font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase text-[#D87D4A]">
            shipping info
          </h3>
          <div className="grid grid-cols-2 gap-[2em]">
            <div className="grid col-span-2 gap-3">
              <label
                htmlFor="address"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                address
              </label>
              <input
                name="address"
                className=" h-[56px] rounded-md border border-[#cfcfcf] col-span-2 px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("Address", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="zip"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                zip code
              </label>
              <input
                name="zip"
                type="number"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("zip code", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="city"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                city
              </label>
              <input
                name="city"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("city", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="country"
                className="font-bold text-[12px] capitalize tracking-[-0.21px]"
              >
                country
              </label>
              <input
                name="country"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("country", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        {/* payment details */}

        <div className="flex flex-col gap-[1em]">
          <h3 className="text-[#D87D4A] font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase">
            payment details
          </h3>
          <section className="flex justify-between">
            <h3 className="capitalize font-bold text-[12px] tracking-[-0.21px]">
              payment method
            </h3>
            <article className="flex flex-col gap-3">
              <div
                className={`w-[309px] h-[56px] rounded-md border ${
                  radioValue === "e-money"
                    ? "border-[#D87D4A]"
                    : " border-[#cfcfcf]"
                } px-4 gap-3 flex items-center`}
              >
                <label
                  htmlFor="e-money"
                  className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                >
                  e-Money
                </label>
                <input
                  name="cash"
                  type="radio"
                  value="e-money"
                  className="order-first h-[20px] w-[20px] form-radio accent-[#d87d4a] p-3 my-4"
                  {...register("payment", {
                    required: true,
                  })}
                />
              </div>
              <div
                className={`w-[309px] h-[56px] rounded-md border ${
                  radioValue === "cash on delivery"
                    ? "border-[#D87D4A]"
                    : " border-[#cfcfcf]"
                } px-4 gap-3 flex items-center`}
              >
                <label
                  htmlFor="cash"
                  className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                >
                  Cash on Delivery
                </label>
                <input
                  name="cash on delivery"
                  type="radio"
                  value="cash on delivery"
                  className="order-first h-[20px] w-[20px] form-radio accent-[#d87d4a]"
                  {...register("payment", {
                    required: true,
                  })}
                />
              </div>
            </article>
          </section>
        </div>

        {radioValue === "e-money" && (
          <section className="flex justify-between">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="e-money number"
                className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
              >
                e-Money Number
              </label>
              <input
                name="e-money number"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("e-money number", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="e-money pin"
                className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
              >
                e-Money pin
              </label>
              <input
                name="e-money pin"
                className="w-[309px] h-[56px] rounded-md border border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                {...register("pin", {
                  required: true,
                })}
              />
            </div>
          </section>
        )}

        {radioValue === "cash on delivery" && (
          <div className="flex  items-center gap-[2em]">
            <Image
              alt="cash"
              src="/assets/checkout/icon-cash-on-delivery.svg"
              width={48}
              height={48}
            />
            <h3 className="font-medium text-[15px] leading-[25px] tracking-[0px]  text-gray-400">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </h3>
          </div>
        )}
      </form>
    </main>
  );
}

export default Checkout;
