"use client";

import useGoBack from "../_hooks/useGoBack";

function NavigateBack() {
  const click = useGoBack();
  return (
    <button
      onClick={click}
      className=" font-bold text-[16px]   outline-none  flex justify-start items-start w-full h-fit capitalize cursor-pointer hover:text-[#D87D4A]"
    >
      go back
    </button>
  );
}

export default NavigateBack;
