import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const asideVariants = cva(
  "p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col space-y-16",
  {
    variants: {
      size: {
        md: "w-[31.25rem] ",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface AsideInterface
  extends React.ComponentProps<"aside">, VariantProps<typeof asideVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}
