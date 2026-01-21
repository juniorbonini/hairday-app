import { iconVariants, type IconInteface } from "../../models/button-icon";

export function Icon({
  variant,
  className,
  svg: SvgComponent,
  ...props
}: IconInteface) {
  return (
    <button>
      <SvgComponent
        className={iconVariants({ variant, className })}
        {...props}
      />
    </button>
  );
}
