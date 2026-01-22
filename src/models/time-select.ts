import type React from "react";

export interface TimeSelectInterface extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
