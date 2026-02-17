import { Container } from "@/shared/ui";
import { MasterClassesList } from "./ui/MasterClassesList";
import { MASTER_CLASSES_ITEMS } from "@/constants/master-classes-items";

export const MasterClasses = () => {
  return (
    <section id="master-classes" className="py-[clamp(65px,12vw,120px)] scroll-mt-[30vh]">
      <Container>
        <MasterClassesList massterClasses={MASTER_CLASSES_ITEMS} />
      </Container>
    </section>
  );
}