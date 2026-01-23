import { TurnPeriod } from "@/components/PeriodCard/Content/TurnPeriod";

import { Icon } from "@/components/ButtonIcon";

// @ts-expect-error: module declaration for SVG React import
import SunHorizon from "@/assets/icons/sun-horizon.svg?react";

// @ts-expect-error: module declaration for SVG React import
import CloudIcon from "@/assets/icons/cloud-sun.svg?react";

// @ts-expect-error: module declaration for SVG React import
import MoonIcon from "@/assets/icons/moon-star.svg?react";
import { useAppointments } from "@/hooks/useAppointment";
import { AppointmentCard } from "../PeriodCard/Content/AppoitmentCard";
import type { AppointmentListProps } from "@/types";



export function AppointmentList({ selectedDate }: AppointmentListProps) {
  const { morning, afternoon, night, remove } = useAppointments(selectedDate);

  return (
    <div className="flex flex-col gap-6">
      <TurnPeriod
        title="Manhã"
        range="9h-12h"
        icon={<Icon svg={SunHorizon} className="w-5 h-5" />}
      >
        {morning.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            time={appointment.time}
            clientName={appointment.clientName}
            onRemove={() => remove(appointment.id)}
          />
        ))}
      </TurnPeriod>

      <TurnPeriod
        title="Tarde"
        range="13h-18h"
        icon={<Icon svg={CloudIcon} className="w-5 h-5" />}
      >
        {afternoon.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            time={appointment.time}
            clientName={appointment.clientName}
            onRemove={() => remove(appointment.id)}
          />
        ))}
      </TurnPeriod>

      <TurnPeriod
        title="Noite"
        range="19h-21h"
        icon={<Icon svg={MoonIcon} className="w-5 h-5" />}
      >
        {night.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            time={appointment.time}
            clientName={appointment.clientName}
            onRemove={() => remove(appointment.id)}
          />
        ))}
      </TurnPeriod>
    </div>
  );
}
