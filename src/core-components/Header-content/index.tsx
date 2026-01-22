import { Text } from "@/components/Text";

export function HeaderContent() {
  return (
    <div className="mx-auto flex flex-col gap-6 max-w-170.5">
      <Text variant="cataraman-title-lg" className="text-white">
        Sua agenda
      </Text>
      <Text>Consulte os seus cortes de cabelo agendado</Text>
    </div>
  );
}
