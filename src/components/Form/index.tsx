import { Input, InputField } from "../InputField";
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
import type { FormDataInterface } from "@/models/form";

export function Form({
  data,
  inputDateRef
}: FormDataInterface) {
  const { create, appointments } = useAppointments(data.formDate);
  const reservedHours = appointments.map((a) => a.time );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!data.formDate || !data.selectedHour || !data.clientName) return;

    create({
      date: data.date,
      time: data.selectedHour,
      clientName: data.clientName
    });

    data.setClientName("");
    // limpar seleção de horário após criação
    data.selectHour(data.selectedHour);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Data"
        leftIcon={DateIcon}
        rightIcon={ArrowIcon}
        onClick={data.openDatePicker}
      >
          <Input
            ref={inputDateRef}
            value={data.formDate}
            min={data.today}
            onChange={(event) => {
              data.setFormDate(event.target.value);
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
                selected={data.selectedHour === hour}
                disabled={!data.formDate || reservedHours.includes(hour)}
                onClick={() => data.selectHour(hour)}
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
                selected={data.selectedHour === hour}
                disabled={!data.formDate || reservedHours.includes(hour)}
                onClick={() => data.selectHour(hour)}
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
                selected={data.selectedHour === hour}
                disabled={!data.formDate || reservedHours.includes(hour)}
                onClick={() => data.selectHour(hour)}
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
          value={data.clientName}
          placeholder="Nome do cliente"
          onChange={(event) => data.setClientName(event.target.value)}
        />
      </InputField>

        <Button disabled={!data.formDate || !data.selectedHour || !data.clientName || reservedHours.includes(data.selectedHour)}>
          <Text variant='cataraman-title-sm' className="uppercase text-gray-800">Agendar</Text>
        </Button>
    </form>
  );
}
