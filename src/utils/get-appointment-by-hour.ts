
export function getAppointmentByHour(hour: string) {
  const selectedHour = Number(hour.split(":")[0]);

  if (selectedHour >= 9 && selectedHour < 12) return "morning";
  if (selectedHour >= 12 && selectedHour < 18) return "afternoon";
  return "night";
}
