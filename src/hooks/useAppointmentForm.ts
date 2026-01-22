import React from "react";

export function useAppointmentForm() {
  const [date, setDate] = React.useState("");
  const [clientName, setClientName] = React.useState("");
 const [selectedHour, setSelectedHour] = React.useState<string | null>(null);

  const inputDateRef = React.useRef<HTMLInputElement>(null);
  const today = React.useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  function openDatePicker() {
    inputDateRef.current?.showPicker();
  }

  function selectHour(value: string) {
    setSelectedHour((prev) => (prev === value ? null : selectedHour));
  }

  return {
    date,
    setDate,
    clientName,
    setClientName,
    selectedHour,
    setSelectedHour,
    today,
    inputDateRef,
    openDatePicker,
    selectHour,
  };
}
