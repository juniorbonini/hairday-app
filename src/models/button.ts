import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const buttonVariants = cva(
  "items-center justify-center w-85 rounded-lg cursor-pointer transition",
  {
    variants: {
      variant: {
        primary: "bg-yellow-base hover:bg-yellow-light",
      },
      size: {
        md: "h-14 py-4",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export interface ButtonInterface
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {

    }
