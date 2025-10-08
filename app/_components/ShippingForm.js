import React from "react";
import Input from "../_ui/Input";

function ShippingForm({ errors, register }) {
  return (
    <div className="flex flex-col gap-[1em] ">
      <h3 className="font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase text-[#D87D4A]">
        shipping info
      </h3>
      <div className="grid lg:grid-cols-2 gap-[2em]">
        <Input
          style=" flex flex-col w-[280px] lg:w-full lg:grid  lg:col-span-2 gap-3"
          label="address"
          containerStyle="flex items-center justify-between col-span-2"
          labelName="address"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.address?.message}
          errorStyle="h-[56px] rounded-md border-1  lg:col-span-2 border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0 "
          className="h-[56px] rounded-md border-1 lg:col-span-2 border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="1137 Williams Avenue"
          required="This field is required"
          register={register}
        />
        <Input
          style="flex flex-col gap-3 w-[280px] lg:w-full"
          label="zip code"
          containerStyle="flex items-center justify-between"
          labelName="zip"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.zip?.message}
          errorStyle="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="10001"
          required="This field is required"
          register={register}
          value={/^[0-9]+$/}
          message="Invalid zip code"
          maxValue={5}
          maxMessage="Wrong zip code"
        />
        <Input
          style="flex flex-col gap-3 w-[280px] lg:w-full"
          label="city"
          containerStyle="flex items-center justify-between"
          labelName="city"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.city?.message}
          errorStyle="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="New York"
          required="This field is required"
          register={register}
        />
        <Input
          style="flex flex-col gap-3 w-[280px] lg:w-full"
          label="country"
          containerStyle="flex items-center justify-between"
          labelName="country"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.country?.message}
          errorStyle="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[280px] lg:w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="United States"
          required="This field is required"
          register={register}
        />
      </div>
    </div>
  );
}

export default ShippingForm;
