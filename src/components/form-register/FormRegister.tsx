import { Container } from "@/shared/ui";
import { Form } from "./ui/Form";

export const FormRegister = () => {
  return (
    <section id="make-an-appointment">
      <Container>
        <div className="w-full bg-(--primary-color) p-[clamp(20px,4vw,30px)_clamp(30px,4vw,40px)] rounded-[40px]">
          <h2 className="text-center text-[clamp(20px,4vw,26px)] font-medium mb-[clamp(20px,4vw,40px)]">Форма записи</h2>

          <Form />
        </div>
      </Container>
    </section>
  );
}