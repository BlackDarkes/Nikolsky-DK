
import { AboutUs } from "@/components/about-us";
import { Footer } from "@/components/footer";
import { FormRegister } from "@/components/form-register";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Map } from "@/components/map";
import { MasterClasses } from "@/components/master-classes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormRegister />
        <MasterClasses />
        <AboutUs/>
        <Map />
      </main>
      <Footer />
    </>
  );
}
