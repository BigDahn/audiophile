"use client";

import useGoBack from "../_hooks/useGoBack";

function NavigateBack() {
  const click = useGoBack();
  return (
    <button
      onClick={click}
      className=" font-bold text-[16px] max-w-[6%] outline-none  flex justify-start capitalize cursor-pointer hover:text-[#D87D4A]"
    >
      go back
    </button>
  );
}

export default NavigateBack;
