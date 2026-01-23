import { Text } from "@/components/Text";
import Container from "@/components/Container";
import { Aside } from "@/components/Aside";
import { Header } from "@/core-components/Header";
import { Form } from "./components/Form";
import { MainContent } from "./core-components/Header-content";
import { useAppointmentForm } from "./hooks/useAppointmentForm";

function App() {
  const appointmentForm = useAppointmentForm();

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Header />

        <Aside>
          <Container>
            <Text variant="cataraman-title-lg" className="text-white">
              Agende um atendimento
            </Text>

            <Text>
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </Text>
          </Container>

          <Form
            formDate={appointmentForm.formDate}
            setFormDate={appointmentForm.setFormDate}
            selectedHour={appointmentForm.selectedHour}
            clientName={appointmentForm.clientName}
            setClientName={appointmentForm.setClientName}
            inputDateRef={appointmentForm.sidebarInputRef}
            today={appointmentForm.today}
            openDatePicker={() => appointmentForm.openDatePicker("sidebar")}
            selectHour={appointmentForm.selectHour}
          />
        </Aside>

        <main className="flex-1">
          <div className="mx-auto w-240 flex flex-col">
            <MainContent
              filterDate={appointmentForm.filterDate}
              setFilterDate={appointmentForm.setFilterDate}
              inputDateRef={appointmentForm.mainInputRef}
              today={appointmentForm.today}
              openDatePicker={() => appointmentForm.openDatePicker("main")}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
