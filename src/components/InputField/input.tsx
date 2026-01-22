import { type InputDateInterface } from "@/models/input-date";
import React from "react";

export const Input = React.forwardRef<HTMLInputElement, InputDateInterface>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="date"
        className={`bg-transparent
        w-full
        outline-none
        text-gray-200
        cursor-pointer
        [&::-webkit-calendar-picker-indicator]:hidden
        [&::-webkit-inner-spin-button]:hidden
        [&::-webkit-outer-spin-button]:hidden, ${className ?? ""}`}
        {...props}
      />
    );
  },
);

Input.displayName = 'input'
