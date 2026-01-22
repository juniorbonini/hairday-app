import { Icon } from "../ButtonIcon";
import { Text } from "../Text";
import type { LabelFieldInterface } from "@/models/date-field";

export function LabelField({
  label,
  leftIcon,
  rightIcon,
  children,
  ...props
}: LabelFieldInterface) {
  return (
    <label className="flex flex-col gap-3">
      <Text variant="cataraman-title-md">{label}</Text>
      <div
        className="w-85 border border-gray-500 rounded-xl p-3 flex items-center gap-2 cursor-pointer"
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
