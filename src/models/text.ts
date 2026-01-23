import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "cataraman-sm": "text-sm leading-6 font-normal text-gray-300",
      "cataraman-md": "text-md leading-6 font-normal  text-gray-300",
      "cataraman-title-sm": "text-sm leading-5 font-bold",
      "cataraman-title-md": "text-md leading-6 font-bold text-gray-200",
      "cataraman-title-lg": "text-lg leading-6 font-bold text-white",
      "cataraman-button-text": "text-sm leading-6 uppercase text-gray-900"
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
