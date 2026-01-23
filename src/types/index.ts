export type Period = "morning" | "afternoon" | "night";

export interface Appointment {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  clientName: string;
}

export interface AppointmentCreation {
  date: string;
  time: string;
  clientName: string;
}

export interface AppointmentCardProps {
  time: string;
  clientName: string;
  onRemove: () => void;
}

export interface AppointmentListProps {
  selectedDate: string;
}
