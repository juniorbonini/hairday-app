import { Button } from "@/components/Button";
import { Text } from "@/components/Text";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "@/assets/icons/trash.svg?react";
import { Icon } from "@/components/ButtonIcon";
import { ButtonSelect } from "@/components/ButtonSelect";
import React from "react";
import Title from "@/components/Title";
import { Aside } from "@/components/Aside";
import { LabelField } from "@/components/LabelField";
import { Header } from "@/core-components/Header";

function App() {
  const [selectedHour, setSelectedHour] = React.useState<string | null>(null);

  function handleSelectHour(hour: string) {
    setSelectedHour((prev) => (prev === hour ? null : hour));
  }

  return (
    <main className="p-3 flex gap-3 flex-col md:flex-row max-w-360">
      <Header />
      <Aside>
        <Title />
        <div className="items-center justify-center text-yellow-light">
         <LabelField />
        </div>
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
        <div>
          <ButtonSelect
            onClick={() => handleSelectHour("09:00")}
            selected={selectedHour === "09:00"}
          >
            09:00
          </ButtonSelect>
        </div>
      </Aside>
    </main>
  );
}

export default App;
