import { Input, InputField } from "@/components/InputField";
import { Text } from "@/components/Text";
import { useAppointmentForm } from "@/hooks/useAppointmentForm";

// @ts-expect-error: module declaration for SVG React import
import DateIcon from "@/assets/icons/calendar-blank.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowIcon from "@/assets/icons/arrow-down.svg?react";

export function MainContent() {
  const { date, openDatePicker, inputDateRef, today, setDate } =
    useAppointmentForm();
  return (
    <div className="w-full py-20">
      <div className="mx-auto w-240 flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Text variant="cataraman-title-lg" className="text-white">
              Sua agenda
            </Text>

            <Text>Consulte os seus cortes de cabelo agendado</Text>
          </div>

          <InputField
            size="sm"
            onClick={openDatePicker}
            leftIcon={DateIcon}
            rightIcon={ArrowIcon}
          >
            <Input
              ref={inputDateRef}
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputField>
        </header>
      </div>
    </div>
  );
}
