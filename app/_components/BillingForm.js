import React from "react";
import Input from "../_ui/Input";

function BillingForm({ errors, register }) {
  return (
    <div className="flex flex-col gap-[1em]">
      <h3 className="font-bold text-[13px] leading-[25px] tracking-[0.93px] uppercase text-[#D87D4A]">
        billing details
      </h3>
      <div className="grid grid-cols-2 gap-[2em]">
        <Input
          style="flex flex-col gap-3"
          label="name"
          containerStyle="flex items-center justify-between"
          labelName="name"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.name?.message}
          errorStyle="w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="Alexei Ward"
          required="This field is required"
          register={register}
        />
        <Input
          style="flex flex-col gap-3"
          label="email address"
          containerStyle="flex items-center justify-between"
          labelName="email"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.email?.message}
          errorStyle="w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="alexei@mail.com"
          required="This field is required"
          value={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          message="Invalid Email"
          register={register}
        />
        <Input
          style="flex flex-col gap-3"
          label="phone number"
          containerStyle="flex items-center justify-between"
          labelName="phone"
          labelStyle="font-bold text-[12px] capitalize tracking-[-0.21px]"
          error={errors?.phone?.message}
          errorStyle="w-[309px] h-[56px] rounded-md border-1  border-[#CD2C2C] px-2 active:border-[#CD2C2C] focus:outline-[#CD2C2C] focus:outline-2 focus:border-0"
          className="w-[309px] h-[56px] rounded-md border-1  border-[#cfcfcf] px-2 active:border-[#D87D4A] focus:outline-[#D87D4A] focus:outline-1 focus:border-0"
          placeholder="+1 (202) 555-0136"
          required="This field is required"
          value={/^\+[1-9][0-9]{7,14}$/}
          message="Invalid Phone Number"
          register={register}
        />
      </div>
    </div>
  );
}

export default BillingForm;
