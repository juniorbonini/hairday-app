import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const buttonSelectVariants = cva(
  "items-center justify-center rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-gray-600 hover:bg-gray-500",
      },
      selected: {
        true: 'text-yellow-base border border-yellow-base',
        false: 'border-transparent text-gray-300'
      },
      size: {
        sm: "h-10 w-19.5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
      selected: false
    },
  },
);

export interface ButtonSelectInterface
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonSelectVariants> {
        selected: boolean
    }
