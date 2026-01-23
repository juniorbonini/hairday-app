export interface AppointmentInterface {
  time: string;
  clientName: string;
  onRemove: () => void;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  clientName: string;
}

export interface AppointmentListInterface {
  selectedDate: string;
}

export const STORAGE_KEY = "@hairday:appointments";
