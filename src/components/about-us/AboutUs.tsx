import { Container } from "@/shared/ui";
import { AboutText } from "./ui/AboutText";

export const AboutUs = () => {
  return (
    <section id="about-us" className="scroll-mt-[30vh]">
      <Container>
        <AboutText />
      </Container>
    </section>
  );
}