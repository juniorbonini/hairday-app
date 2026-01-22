import { titleVariants, type ContainerInterface } from "@/models/title";
import React from "react";
export default function Title({
  variant,
  as = "div",
  className,
  children,
  ...props
}: ContainerInterface) {
  return React.createElement(
    as,
    {
      className: titleVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
