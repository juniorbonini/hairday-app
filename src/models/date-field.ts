import type React from "react";

export interface LabelFieldInterface extends React.ComponentProps<"div"> {
  label: string;
  leftIcon?: React.FC<React.ComponentProps<"svg">>
  rightIcon?: React.FC<React.ComponentProps<"svg">>;
}
