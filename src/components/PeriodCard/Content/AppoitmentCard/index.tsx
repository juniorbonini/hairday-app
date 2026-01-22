import { Icon } from "@/components/ButtonIcon";
import { Text } from "@/components/Text";
import type { AppointmentInterface } from "@/models/appointment";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "@/assets/icons/trash.svg?react"

export function AppointmentCard({
  time,
  clientName,
  onRemove,
}: AppointmentInterface) {
  return (
    <div className="flex items-center justify-between px-5 py-4 rounded-lg border border-gray-700 bg-gray-800">
      <div className="flex items-center gap-6">
        <Text variant="cataraman-title-sm">{time}</Text>
        <Text variant="cataraman-sm">{clientName}</Text>
      </div>
      <Icon svg={TrashIcon} onClick={onRemove} type="button" />
    </div>
  );
}
