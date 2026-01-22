import React from "react";
import { asideVariants, type AsideInterface } from "@/models/aside";

export function Aside({
  as = "aside",
  size,
  children,
  className,
  ...props
}: AsideInterface) {
  return React.createElement(
    as,
    {
      className: asideVariants({ size, className }),
      ...props,
    },
    children,
  );
}
