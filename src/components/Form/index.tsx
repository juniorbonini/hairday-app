import { useAppointmentForm } from "@/hooks/useAppointmentForm";
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

export function Form() {
  const {
    date,
    setDate,
    selectedHour,
    clientName,
    setClientName,
    inputDateRef,
    today,
    openDatePicker,
    selectHour,
  } = useAppointmentForm();

  return (
    <form className="space-y-6">
      <InputField
        label="Data"
        leftIcon={DateIcon}
        rightIcon={ArrowIcon}
        onClick={openDatePicker}
      >
        <Input
          ref={inputDateRef}
          value={date}
          min={today}
          onChange={(event) => setDate(event.target.value)}
        />
      </InputField>
      <div className="space-y-3">
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-md">Manhã</Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.morning.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-md">Tarde</Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.afternoon.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
                onClick={() => selectHour(hour)}
              >
                {hour}
              </ButtonSelect>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Text variant="cataraman-title-md">Noite</Text>
          <div className="flex flex-wrap items-center gap-2">
            {AVAILABLE_HOURS.night.map((hour) => (
              <ButtonSelect
                key={hour}
                type="button"
                selected={selectedHour === hour}
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

        <Button><Text variant='cataraman-title-md' className="uppercase text-gray-800">Agendar</Text></Button>
    </form>
  );
}
