import React from "react";
import { textVariants, type TextInterface } from "../../models/text";

export function Text({
  variant,
  children,
  as = "span",
  className,
  ...props
}: TextInterface) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
