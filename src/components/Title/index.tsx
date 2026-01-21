import { Text } from "../Text";

export default function Title() {
  return (
    <div className='flex flex-col w-full gap-2'>
      <Text variant="cataraman-title-lg" className="text-white">
        Agende um atendimento
      </Text>
      <Text>
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </Text>
    </div>
  );
}
