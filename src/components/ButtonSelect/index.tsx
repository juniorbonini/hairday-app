import {
  buttonSelectVariants,
  type ButtonSelectInterface,
} from "@/models/button-select";

export function ButtonSelect({
  variant,
  size,
  disabled,
  className,
  selected,
  ...props
}: ButtonSelectInterface) {
  return (
    <button
      className={buttonSelectVariants({ variant, size, disabled, selected, className })}
        {...props}
    >
      
    </button>
  );
}
