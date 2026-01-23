import { Icon } from "@/components/core/ButtonIcon";
import { Text } from "@/components/core/Text";
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
      {label && <Text variant="cataraman-title-md" className="text-gray-200">{label}</Text>}
      <div
        className={inputFieldVariants({ size, className })}
        onClick={onClick}
        {...props}
      >
        {leftIcon && <Icon svg={leftIcon} className="w-5 h-5" />}

        {children}
        {rightIcon && (
          <div className="ml-auto">
            <Icon svg={rightIcon} variant='secundary' className="w-5 h-5 mt-1.5"  />
          </div>
        )}
      </div>
    </label>
  );
}
