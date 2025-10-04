import React from "react";
import FormErrorMessage from "../_components/FormErrorMessage";

function Input({
  style,
  className,
  labelName,
  label,
  error,
  labelStyle,
  placeholder,
  errorStyle,
  required,
  value,
  message,
  containerStyle,
  register,
  maxValue,
  maxMessage,
}) {
  return (
    <div className={style}>
      <div className={containerStyle}>
        <label htmlFor={labelName} className={labelStyle}>
          {label}
        </label>
        <FormErrorMessage error={error} />
      </div>
      <input
        name={label}
        className={`${error ? errorStyle : className}`}
        placeholder={placeholder}
        {...register(labelName, {
          required: required,
          pattern: {
            value: value,
            message: message,
          },
          maxLength: {
            value: maxValue,
            message: maxMessage,
          },
        })}
      />
    </div>
  );
}

export default Input;
