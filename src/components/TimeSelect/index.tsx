import type { TimeSelectInterface } from "@/models/time-select";
import React from "react";

export function TimeSelect({
  as = "div",
  children,
  className,
  ...props
}: TimeSelectInterface) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children,
  );
}
