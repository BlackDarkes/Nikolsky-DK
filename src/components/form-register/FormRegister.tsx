import { Container } from "@/shared/ui";
import { Form } from "./ui/Form";

export const FormRegister = () => {
  return (
    <section>
      <Container>
        <div className="w-full">
          <h2>Форма записи</h2>

          <Form />
        </div>
      </Container>
    </section>
  );
}