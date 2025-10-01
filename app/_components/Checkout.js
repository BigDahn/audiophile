"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

function Checkout({ onSubmit }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  name
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.Name?.message}
                </h3>
              </div>
              <input
                name="name"
                className={`${
                  errors?.Name?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                placeholder="Alexei Ward"
                {...register("Name", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  email address
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.Email?.message}
                </h3>
              </div>
              <input
                name="email"
                placeholder="alexei@mail.com"
                className={`${
                  errors?.Email?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                {...register("Email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "wrong format",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="number"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  phone number
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.phone?.message}
                </h3>
              </div>
              <input
                name="number"
                placeholder="+1 202-555-0136"
                className={`${
                  errors?.phone?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                {...register("phone", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+[1-9][0-9]{7,14}$/,
                    message: "wrong format",
                  },
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
              <div className="flex items-center justify-between  col-span-2">
                <label
                  htmlFor="address"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  address
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.Address?.message}
                </h3>
              </div>
              <input
                name="address"
                className={`${
                  errors?.Address?.message
                    ? " h-[56px] rounded-md border-1 col-span-2 border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : " h-[56px] rounded-md border-1 col-span-2 border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                placeholder="1137 Williams Avenue"
                {...register("Address", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="zip"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  zip code
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.zip?.message}
                </h3>
              </div>

              <input
                name="zip"
                placeholder="10001"
                className={`${
                  errors?.zip?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                {...register("zip", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "wrong format",
                  },
                  maxLength: {
                    value: 5,
                    message: "wrong zip code",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  city
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.city?.message}
                </h3>
              </div>
              <input
                name="city"
                className={`${
                  errors?.city?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                placeholder="New York"
                {...register("city", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                {" "}
                <label
                  htmlFor="country"
                  className="font-bold text-[12px] capitalize tracking-[-0.21px]"
                >
                  country
                </label>
                <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                  {errors?.country?.message}
                </h3>
              </div>
              <input
                name="country"
                placeholder="United States"
                className={`${
                  errors?.country?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                }`}
                {...register("country", {
                  required: "This field is required",
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
            <div className="flex justify-between gap-[4em]">
              <h3 className="capitalize font-bold text-[12px] tracking-[-0.21px]">
                payment method
              </h3>
              <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                {errors?.payment?.message}
              </h3>
            </div>
            <article className="flex flex-col gap-3">
              <div
                className={`${
                  errors?.payment?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-4 gap-3 flex items-center"
                    : radioValue === "e-money"
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#D87D4A] px-4 gap-3 flex items-center"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-4 gap-3 flex items-center"
                }`}
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
                    required: "Select a payment method",
                  })}
                />
              </div>
              <div
                className={`${
                  errors?.payment?.message
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-4 gap-3 flex items-center"
                    : radioValue === "cash on delivery"
                    ? "w-[309px] h-[56px] rounded-md border-1  border-[#D87D4A] px-4 gap-3 flex items-center"
                    : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-4 gap-3 flex items-center"
                }`}
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
                    required: "Select a payment method",
                  })}
                />
              </div>
            </article>
          </section>
        </div>

        <section>
          {radioValue === "e-money" && (
            <section className="flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="e-money number"
                    className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                  >
                    e-Money Number
                  </label>
                  <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                    {errors?.e_money_number?.message}
                  </h3>
                </div>
                <input
                  name="e-money number"
                  className={`${
                    errors?.e_money_number?.message
                      ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                      : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                  }`}
                  placeholder="238521993"
                  {...register("e_money_number", {
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "wrong format",
                    },
                    minLength: {
                      value: 9,
                      message: "invalid number",
                    },
                    maxLength: {
                      value: 10,
                      message: "invalid",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="e-money pin"
                    className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                  >
                    e-Money pin
                  </label>
                  <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
                    {errors?.e_money_pin?.message}
                  </h3>
                </div>

                <input
                  name="e-money pin"
                  className={`${
                    errors?.e_money_pin?.message
                      ? "w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                      : "w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
                  }`}
                  placeholder="6891"
                  {...register("e_money_pin", {
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "wrong format",
                    },
                    maxLength: {
                      value: 4,
                      message: "invalid pin... too long",
                    },
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
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </h3>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Checkout;
