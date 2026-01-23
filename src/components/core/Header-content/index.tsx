import { Input, InputField } from "@/components/InputField";
import { AppointmentList } from "@/components/List";

// @ts-expect-error: module declaration for SVG React import
import DateIcon from "@/assets/icons/calendar-blank.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowIcon from "@/assets/icons/arrow-down.svg?react";
import type { MainContentInterface } from "@/models/main-content";
import { Text } from "../Text";

export function MainContent({
  filterDate,
  openDatePicker,
  inputDateRef,
  today,
  setFilterDate,
}: MainContentInterface) {
  return (
    <div className="w-full py-20">
      <div className="mx-auto w-full md:w-240 flex flex-col gap-6">
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
              value={filterDate}
              min={today}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </InputField>
        </header>

        <AppointmentList selectedDate={filterDate} />
      </div>
    </div>
  );
}
