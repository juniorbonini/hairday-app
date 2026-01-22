import { Icon } from "../ButtonIcon";
import { Text } from "../Text";
import { inputFieldVariants, type LabelFieldInterface } from "@/models/date-field";

export function InputField({
  label,
  leftIcon,
  rightIcon,
  size,
  className,
  onClick,
  children,
  ...props
}: LabelFieldInterface) {
  return (
    <label className="flex flex-col gap-3">
      {label && <Text variant="cataraman-title-md">{label}</Text>}
      <div
        className={inputFieldVariants({ size, className })}
        onClick={onClick}
        {...props}
      >
        {leftIcon && <Icon svg={leftIcon} className="w-5 h-5" />}

        {children}
        {rightIcon && (
          <div className="ml-auto">
            <Icon svg={rightIcon} className="w-5 h-5" />
          </div>
        )}
      </div>
    </label>
  );
}
