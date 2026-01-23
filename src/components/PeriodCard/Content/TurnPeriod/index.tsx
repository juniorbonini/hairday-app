import { Text } from "@/components/core/Text";
import type { TurnPeriodInterface } from "@/models/turn-period";
import React from "react";

export function TurnPeriod({
  title,
  range,
  children,
  icon,
}: TurnPeriodInterface) {
  const hasAppointments = React.Children.count(children) > 0;
  return (
    <div className="rounded-xl border border-gray-600 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-2 border-b border-gray-600">
        <div className="flex items-center justify-center gap-3">
          <span className="mt-1.5">{icon}</span>

          <Text variant="cataraman-sm">{title}</Text>
        </div>

        <Text>{range}</Text>
      </div>

      <div className="p-6">
        {hasAppointments ? (
          <div>{children}</div>
        ) : (
          <Text className="text-gray-500">Nenhum agendamento para este período</Text>
        )}
      </div>
    </div>
  );
}
