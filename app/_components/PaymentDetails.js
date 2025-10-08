import React from "react";
import FormErrorMessage from "./FormErrorMessage";
import Image from "next/image";

function PaymentDetails({ errors, radioValue, register }) {
  return (
    <>
      <div className="flex flex-col gap-[1em]">
        <h3 className="text-[#D87D4A] font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase">
          payment details
        </h3>
        <section className="flex  flex-col gap-[1em] lg:gap-3  lg:flex-row justify-between">
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-[4em] w-[280px] lg:w-full">
            <h3 className="capitalize font-bold text-[12px] tracking-[-0.21px]">
              payment method
            </h3>
            <FormErrorMessage error={errors?.payment?.message} />
          </div>
          <article className="flex flex-col gap-3">
            <div
              className={`${
                errors?.payment?.message
                  ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-4 gap-3 flex items-center"
                  : radioValue === "e-money"
                  ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#D87D4A] px-4 gap-3 flex items-center"
                  : "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-4 gap-3 flex items-center"
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
                  ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-4 gap-3 flex items-center"
                  : radioValue === "cash on delivery"
                  ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#D87D4A] px-4 gap-3 flex items-center"
                  : "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-4 gap-3 flex items-center"
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
          <section className="flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-[280px] lg:w-full">
                <label
                  htmlFor="e-money number"
                  className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                >
                  e-Money Number
                </label>
                <FormErrorMessage error={errors?.e_money_number?.message} />
              </div>
              <input
                name="e-money number"
                className={`${
                  errors?.e_money_number?.message
                    ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
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
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center w-[280px] lg:w-full justify-between">
                <label
                  htmlFor="e-money pin"
                  className="flex items-center gap-3 font-bold text-[14px] tracking-[-0.25px]"
                >
                  e-Money pin
                </label>
                <FormErrorMessage error={errors?.e_money_pin?.message} />
              </div>

              <input
                name="e-money pin"
                className={`${
                  errors?.e_money_pin?.message
                    ? "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
                    : "w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
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
          <div className="flex flex-col items-center  lg:w-full lg:flex-row gap-[2em]">
            <Image
              alt="cash"
              src="/assets/checkout/icon-cash-on-delivery.svg"
              width={48}
              height={48}
            />
            <h3 className="font-medium text-[15px] leading-[25px] tracking-[0px]  text-gray-400  text-center lg:text-left">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </h3>
          </div>
        )}
      </section>
    </>
  );
}

export default PaymentDetails;
