import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const inputFieldVariants = cva(
  ` border border-gray-500 rounded-xl p-3 flex items-center gap-2 cursor-pointer`,
  {
    variants: {
      size: {
        md: "w-full md:w-85",
        sm: "w-full md:w-55",
      },
      focused: {
        true: "border-yellow-base",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface LabelFieldInterface
  extends React.ComponentProps<"div">, VariantProps<typeof inputFieldVariants> {
  label?: string;
  leftIcon?: React.FC<React.ComponentProps<"svg">>;
  rightIcon?: React.FC<React.ComponentProps<"svg">>;
}
