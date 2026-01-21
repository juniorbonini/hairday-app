import { Button } from "./components/Button";
import { Text } from "./components/Text";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "./assets/icons/trash.svg?react";
import { Icon } from "./components/ButtonIcon";

function App() {
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
        <Icon svg={TrashIcon} className="cursor-pointer text-yellow-base hover:text-yellow-dark" />
      </div>
    </main>
  );
}

export default App;
