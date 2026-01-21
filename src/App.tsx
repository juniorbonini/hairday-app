import { Button } from "./components/Button";
import { Text } from "./components/Text";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "./assets/icons/trash.svg?react";
import { Icon } from "./components/ButtonIcon";
import { ButtonSelect } from "./components/ButtonSelect";
import React from "react";

function App() {
  const [selectedHour, setSelectedHour] = React.useState<string | null>(null);

  function handleSelectHour(hour: string) {
    setSelectedHour((prev) =>
    prev === hour ? null : hour)
  }

  return (
    <main>
      <div className="items-center justify-center text-yellow-light">
        <Text variant="cataraman-sm">Olá Mundo</Text>
        <Text variant="cataraman-md">Olá Mundo</Text>
        <Text variant="cataraman-title-sm">Olá Mundo</Text>
        <Text variant="cataraman-title-md">Olá Mundo</Text>
        <Text variant="cataraman-title-lg">Olá Mundo</Text>
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
    </main>
  );
}

export default App;
