import { useLocalStorage } from "usehooks-ts";
import React from "react";

import { STORAGE_KEY } from "@/models/appointment";
import type { Appointment, AppointmentCreation } from "@/types";
import { groupAppointmentsByPeriod } from "@/utils/schedule";

export function useAppointments(selectedDate: string) {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    STORAGE_KEY,
    [],
  );

  function create(data: AppointmentCreation) {
    const exists = appointments.some(
      (a) => a.date === data.date && a.time === data.time,
    );

    if (exists) return false;

    const newAppointment: Appointment = {
      id: Math.random().toString(36).substring(2, 9),
      ...data,
    };

    setAppointments((prev) => [...prev, newAppointment]);
    return true;
  }

  function remove(id: string) {
    setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
  }

  const filtered = React.useMemo(() => {
    if (!selectedDate) return appointments;
    return appointments.filter((a) => a.date === selectedDate);
  }, [appointments, selectedDate]);

  const grouped = React.useMemo(() => groupAppointmentsByPeriod(filtered), [filtered]);

  return {
    appointments: filtered,
    allAppointments: appointments,
    create,
    remove,
    morning: grouped.morning,
    afternoon: grouped.afternoon,
    night: grouped.night,
  } as const;
}
