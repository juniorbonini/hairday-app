export interface FormInterface {
    formDate: string;
    setFormDate: (value: string) => void;
    inputDateRef: React.RefObject<HTMLInputElement | null>;
    selectedHour: string;
    clientName: string;
    setClientName: (value: string) => void;
    today: string;
    openDatePicker: () => void;
    selectHour: (value: string) => void;
}