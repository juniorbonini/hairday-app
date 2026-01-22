import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow-base hover:fill-yellow-dark transition",
      secundary: "fill-gray-400"
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface IconInteface
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}
