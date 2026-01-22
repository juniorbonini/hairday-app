import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const titleVariants = cva("flex flex-col", {
  variants: {
    variant: {
      primary: "gap-2 w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ContainerInterface
  extends React.ComponentProps<"div">, VariantProps<typeof titleVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}
