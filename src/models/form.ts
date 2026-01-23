export interface FormInterface {
    formDate: string;
    date: string;
    setFormDate: (value: string) => void;
    selectedHour: string;
    clientName: string;
    setClientName: (value: string) => void;
    today: string;
    openDatePicker: () => void;
    selectHour: (value: string) => void;
}


export interface FormDataInterface extends FormInterface {
    inputDateRef: React.RefObject<HTMLInputElement | null>;
    data: FormInterface;
}