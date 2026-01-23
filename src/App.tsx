import { Text } from "@/components/core/Text";
import { Form } from "./components/Form";
import { Aside } from "@/components/Aside";
import Container from "@/components/core/Container";
import { useAppointmentForm } from "./hooks/useAppointmentForm";
import { Header } from "./components/core/Header";
import { MainContent } from "./components/core/Header-content";

function App() {
  const appointmentForm = useAppointmentForm();

  return (
    <div className="min-h-screen bg-gray-800 p-3 md:mx-auto">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Header />

        <Aside>
          <Container>
            <Text variant="cataraman-title-lg">
              Agende um atendimento
            </Text>

            <Text variant="cataraman-sm">
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
          <div className="mx-auto w-full md:w-240 flex flex-col">
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
