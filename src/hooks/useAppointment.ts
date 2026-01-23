import { useLocalStorage } from "usehooks-ts";

import { STORAGE_KEY, type Appointment } from "@/models/appointment";
import React from "react";
import { getAppointmentByHour } from "@/utils/get-appointment-by-hour";

export function useAppointments(selectedDate: string) {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    STORAGE_KEY,
    [],
  );

  function create(data: Omit<Appointment, "id">) {
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substring(2, 9),
      ...data,
    };

    setAppointments((prev) => [...prev, newAppointment]);
  }

  function remove(id: string) {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id),
    );
  }

  const AppointmentByDate = React.useMemo(() => {
    if (!selectedDate) return appointments;

    return appointments.filter(
      (appointment) => appointment.date === selectedDate,
    );
  }, [appointments, selectedDate]);

  const morning = AppointmentByDate.filter(
    (a) => getAppointmentByHour(a.time) === "morning",
  );

  const afternoon = AppointmentByDate.filter(
    (a) => getAppointmentByHour(a.time) === "afternoon",
  );

  const night = AppointmentByDate.filter(
    (a) => getAppointmentByHour(a.time) === "night",
  );

  return {
    appointments: AppointmentByDate,
    create,
    remove,
    morning,
    afternoon,
    night,
  };
}
