import { Text } from "@/components/Text";
import Container from "@/components/Container";
import { Aside } from "@/components/Aside";
import { Header } from "@/core-components/Header";
import { Form } from "./components/Form";

function App() {
  return (
    <main className="p-3 flex gap-3 flex-col md:flex-row max-w-360">
      <Header />
      <Aside>
        <Container>
          <Text variant="cataraman-title-lg" className="text-white">
            Agende um atendimendo
          </Text>
          <Text>
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Text>
        </Container>

        <Form />
      </Aside>
    </main>
  );
}

export default App;
