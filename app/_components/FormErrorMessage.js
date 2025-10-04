import React from "react";

function FormErrorMessage({ error }) {
  return (
    <h3 className="font-medium text-[12px] tracking-[-0.21px] text-[#CD2C2C]">
      {error}
    </h3>
  );
}

export default FormErrorMessage;
