import { Button } from "@/components/Button";
import { Text } from "@/components/Text";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "@/assets/icons/trash.svg?react";

// @ts-expect-error: module declaration for SVG React import

import DateIcon from "@/assets/icons/calendar-blank.svg?react";
// @ts-expect-error: module declaration for SVG React import
import ArrowDown from "@/assets/icons/arrow-down.svg?react";

// @ts-expect-error: module declaration for SVG React import
import UserSquare from "@/assets/icons/user-square.svg?react";

import { Icon } from "@/components/ButtonIcon";
import { ButtonSelect } from "@/components/ButtonSelect";
import React from "react";
import Title from "@/components/Title";
import { Aside } from "@/components/Aside";
import { Header } from "@/core-components/Header";
import { LabelField } from "./components/LabelField";
import { InputDate } from "./components/InputDate";
import { TimeSelect } from "./components/TimeSelect";
import { AVAILABLE_HOURS } from "./utils/appointment-hour";

function App() {
  const [selectedHour, setSelectedHour] = React.useState<string | null>(null);
  const [date, setDate] = React.useState<string>("");
  const [clientName, setClientName] = React.useState("");
  const today = new Date().toISOString().split("T")[0];
  const inputRef = React.useRef<HTMLInputElement>(null);

  function openPicker() {
    inputRef.current?.showPicker();
  }

  function handleSelectHour(hour: string) {
    setSelectedHour((prev) => (prev === hour ? null : hour));
  }

  return (
    <main className="p-3 flex gap-3 flex-col md:flex-row max-w-360">
      <Header />
      <Aside>
        <Title />
        <form className="space-y-6">
          <LabelField
            label="Data"
            onClick={openPicker}
            leftIcon={DateIcon}
            rightIcon={ArrowDown}
          >
            <InputDate
              ref={inputRef}
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </LabelField>

          <TimeSelect className="flex flex-col gap-2 mt-5">
            <Text variant="cataraman-title-md" className="text-gray-200">
              Horários
            </Text>

            <div className="space-y-5">
              {/* MANHÃ */}
              <div className="flex flex-col gap-2">
                <Text>Manhã</Text>

                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_HOURS.morning.map((hour) => (
                    <ButtonSelect
                      key={hour}
                      type="button"
                      selected={selectedHour === hour}
                      onClick={() => handleSelectHour(hour)}
                    >
                      {hour}
                    </ButtonSelect>
                  ))}
                </div>
              </div>

              {/* TARDE */}
              <div className="flex flex-col gap-2">
                <Text>Tarde</Text>

                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_HOURS.afternoon.map((hour) => (
                    <ButtonSelect
                      key={hour}
                      type="button"
                      selected={selectedHour === hour}
                      onClick={() => handleSelectHour(hour)}
                    >
                      {hour}
                    </ButtonSelect>
                  ))}
                </div>
              </div>

              {/* NOITE */}
              <div className="flex flex-col gap-2">
                <Text>Noite</Text>

                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_HOURS.night.map((hour) => (
                    <ButtonSelect
                      key={hour}
                      type="button"
                      selected={selectedHour === hour}
                      onClick={() => handleSelectHour(hour)}
                    >
                      {hour}
                    </ButtonSelect>
                  ))}
                </div>
              </div>
            </div>
          </TimeSelect>

          <LabelField label="Cliente" leftIcon={UserSquare}>
            <InputDate
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </LabelField>
        </form>
        <div>
          <Button>
            <Text className="text-gray-900 uppercase">Agendar</Text>
          </Button>
        </div>
        <div>
          <Icon
            svg={TrashIcon}
            className="cursor-pointer text-yellow-base hover:text-yellow-dark"
          />
        </div>
      </Aside>
    </main>
  );
}

export default App;
