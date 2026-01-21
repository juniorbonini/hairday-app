import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const textVariants = cva("font-sans, text-gray-300", {
  variants: {
    variant: {
      "cataraman-sm": "text-sm leading-6 font-normal",
      "cataraman-md": "text-md leading-6 font-normal",
      "cataraman-title-sm": "text-sm leading-5 font-bold",
      "cataraman-title-md": "text-md leading-6 font-bold",
      "cataraman-title-lg": "text-lg leading-6 font-bold",
    },
  },
  defaultVariants: {
    variant: "cataraman-sm",
  },
});

export interface TextInterface extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}
