import { buttonVariants, type ButtonInterface } from "@/models/button";
import { Text } from "../Text";

export function Button({
  size,
  variant,
  className,
  disabled,
  children,
  ...props
}: ButtonInterface) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Text>{children}</Text>
    </button>
  );
}
