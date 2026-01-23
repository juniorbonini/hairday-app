import { Icon } from "@/components/ButtonIcon";
import { Text } from "@/components/Text";
import type { AppointmentCardProps } from "@/types";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "@/assets/icons/trash.svg?react"

export function AppointmentCard({
  time,
  clientName,
  onRemove,
}: AppointmentCardProps) {
  return (
    <div className="flex items-center justify-between px-2 py-2">
      <div className="flex items-center gap-6">
        <Text variant="cataraman-title-sm">{time}</Text>
        <Text variant="cataraman-sm">{clientName}</Text>
      </div>
      <Icon svg={TrashIcon} onClick={onRemove} type="button" className="w-5 h-5" />
    </div>
  );
}
