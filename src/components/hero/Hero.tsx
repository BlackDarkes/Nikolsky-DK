import { Container } from "@/shared/ui";
import { HeroList } from "./ui/HeroList";
import { MUGS_ITEMS } from "@/constants/mugs-items";

export const Hero = () => {
  return (
    <section id="mugs" className="pt-[clamp(65px,12vw,120px)]">
      <Container>
        <HeroList mugsItems={MUGS_ITEMS}/>
      </Container>
    </section>
  );
}