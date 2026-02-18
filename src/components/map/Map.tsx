import { Container } from "@/shared/ui";
import { MapBlock } from "./ui/MapBlock";

export const Map = () => {
  return (
    <section>
      <Container className="h-[clamp(450px,40vw,600px)] py-[clamp(65px,12vw,120px)]">
        <MapBlock />
      </Container>
    </section>
  );
}