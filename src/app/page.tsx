import { FormRegister } from "@/components/form-register";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormRegister />
      </main>
    </>
  );
}
