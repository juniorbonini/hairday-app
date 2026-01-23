import { InputField } from "../InputField";
import { Input } from "../Input";
import { AVAILABLE_HOURS } from "@/utils/appointment-hour";
import { ButtonSelect } from "../ButtonSelect";

// @ts-expect-error: module declaration for SVG React import
import DateIcon from "@/assets/icons/calendar-blank.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowIcon from "@/assets/icons/arrow-down.svg?react";

// @ts-expect-error: module declaration for SVG React import
import UserSquare from "@/assets/icons/user-square.svg?react";
import { Text } from "../Text";
import { Button } from "../Button";
import { useAppointments } from "@/hooks/useAppointment";
import type React from "react";

export type FormProps = {
  formDate: string;
  setFormDate: (value: string) => void;
  selectedHour: string;
  clientName: string;
  setClientName: (value: string) => void;
  inputDateRef: React.RefObject<HTMLInputElement>;
  today: string;
  openDatePicker: () => void;
  selectHour: (value: string) => void;
};

export function Form({
  formDate,
  setFormDate,
  selectedHour,
  clientName,
  setClientName,
  inputDateRef,
  today,
  openDatePicker,
  selectHour,
}: FormProps) {
  const { create, appointments } = useAppointments(formDate);
  const reservedHours = appointments.map((a) => a.time);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!formDate || !selectedHour || !clientName) return;

    create({
      date: formDate,
      time: selectedHour,
      clientName,
    });

    setClientName("");
    // limpar seleção de horário após criação
    selectHour(selectedHour);
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
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
      </div>
      <InputField leftIcon={UserSquare} label="Cliente" >
        <Input
          type="text"
          value={clientName}
          placeholder="Nome do cliente"
          onChange={(event) => setClientName(event.target.value)}
        />
      </InputField>

        <Button disabled={!formDate || !selectedHour || !clientName || reservedHours.includes(selectedHour)}>
          <Text variant='cataraman-title-sm' className="uppercase text-gray-800">Agendar</Text>
        </Button>
    </form>
  );
}
