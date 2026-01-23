export interface MainContentInterface {
  filterDate: string;
  setFilterDate: (value: string) => void;
  inputDateRef: React.RefObject<HTMLInputElement | null>;
  today: string;
  openDatePicker: () => void;
}
