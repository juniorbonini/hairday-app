import React from "react";

export function useAppointmentForm() {
  const [formDate, setFormDate] = React.useState("");
  const [filterDate, setFilterDate] = React.useState("");
  const [clientName, setClientName] = React.useState("");
  const [selectedHour, setSelectedHour] = React.useState<string>("");
  

  const mainInputRef = React.useRef<HTMLInputElement | null>(null);
  const sidebarInputRef = React.useRef<HTMLInputElement | null>(null);
  const today = React.useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  function openDatePicker(target: "sidebar" | "main" = "sidebar") {
    if (target === "sidebar") {
      sidebarInputRef.current?.showPicker();
    } else {
      mainInputRef.current?.showPicker();
    }
  }

  function selectHour(value: string) {
    setSelectedHour((prev) => (prev === value ? "" : value));
  }

  return {
    formDate,
    setFormDate,
    filterDate,
    setFilterDate,

    clientName,
    setClientName,
    selectedHour,
    setSelectedHour,
    today,
    sidebarInputRef,
    mainInputRef,
    openDatePicker,
    selectHour,
  };
}
