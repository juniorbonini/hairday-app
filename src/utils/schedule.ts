import type { Period, Appointment } from "@/types";

export function getPeriodByHour(hour: string): Period {
  const selectedHour = Number(hour.split(":")[0]);

  if (selectedHour >= 9 && selectedHour < 12) return "morning";
  if (selectedHour >= 12 && selectedHour < 18) return "afternoon";
  return "night";
}

export function groupAppointmentsByPeriod(appointments: Appointment[]) {
  return {
    morning: appointments.filter((a) => getPeriodByHour(a.time) === "morning"),
    afternoon: appointments.filter((a) => getPeriodByHour(a.time) === "afternoon"),
    night: appointments.filter((a) => getPeriodByHour(a.time) === "night"),
  } as Record<Period, Appointment[]>;
}

export function isHourReserved(appointments: Appointment[], time: string) {
  return appointments.some((a) => a.time === time);
}
