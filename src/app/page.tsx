import { FormRegister } from "@/components/form-register";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MasterClasses } from "@/components/master-classes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormRegister />
        <MasterClasses />
      </main>
    </>
  );
}
