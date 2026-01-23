import  React from "react";

// @ts-expect-error: module declaration for SVG React import
import DateIcon from "@/assets/icons/calendar-blank.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowIcon from "@/assets/icons/arrow-down.svg?react";

// @ts-expect-error: module declaration for SVG React import
import UserSquare from "@/assets/icons/user-square.svg?react";

import { Text } from "../Text";
import { Button } from "../Button";
import { ButtonSelect } from "../ButtonSelect";
import { Input, InputField } from "../InputField";
import type { FormInterface } from "@/models/form";
import { useAppointments } from "@/hooks/useAppointment";
import { AVAILABLE_HOURS } from "@/utils/appointment-hour";

export function Form({
  setClientName,
  formDate,
  selectHour,
  selectedHour,
  clientName,
  today,
  openDatePicker,
  setFormDate,
  inputDateRef,
}: FormInterface) {
  const { create, appointments } = useAppointments(formDate);
  const reservedHours = appointments.map((a) => a.time);
  const [feedback, setFeedback] = React.useState<null | { type: "error" | "success"; text: string }>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!formDate || !selectedHour || !clientName) return;

    const ok = create({
      date: formDate,
      time: selectedHour,
      clientName,
    });

    if (!ok) {
      setFeedback({ type: "error", text: "Horário já reservado para esta data." });
      return;
    }

    setFeedback({ type: "success", text: "Agendamento criado com sucesso." });
    setClientName("");
    selectHour(selectedHour);

    window.setTimeout(() => setFeedback(null), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Data"
        leftIcon={DateIcon}
        rightIcon={ArrowIcon}
        onClick={openDatePicker}
      >
        <Input
          ref={inputDateRef}
          value={formDate}
          min={today}
          onChange={(event) => {
            setFormDate(event.target.value);
          }}
        />
      </InputField>
      <div className="space-y-6">
        <Text variant="cataraman-title-md">Horários</Text>
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-sm" className=" mb-6">
            Manhã
          </Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.morning.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
                disabled={!formDate || reservedHours.includes(hour)}
                title={reservedHours.includes(hour) ? "Horário já reservado" : undefined}
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-sm">Tarde</Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.afternoon.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
                disabled={!formDate || reservedHours.includes(hour)}
                title={reservedHours.includes(hour) ? "Horário já reservado" : undefined}
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-sm">Noite</Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.night.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
                disabled={!formDate || reservedHours.includes(hour)}
                title={reservedHours.includes(hour) ? "Horário já reservado" : undefined}
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
      </div>
      <InputField leftIcon={UserSquare} label="Cliente">
        <Input
          type="text"
          value={clientName}
          placeholder="Nome do cliente"
          onChange={(event) => setClientName(event.target.value)}
        />
      </InputField>

      <Button
        disabled={
          !formDate ||
          !selectedHour ||
          !clientName ||
          reservedHours.includes(selectedHour)
        }
      >
        <Text variant="cataraman-title-sm" className="uppercase text-gray-800">
          Agendar
        </Text>
      </Button>
      {feedback ? (
        <div className={`mt-2 ${feedback.type === "error" ? "text-red-400" : "text-green-400"}`} role="alert">
          <Text>{feedback.text}</Text>
        </div>
      ) : null}
    </form>
  );
}
