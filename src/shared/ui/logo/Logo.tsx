import Image from "next/image";
import LogoImage from "@/assets/logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-1.25 text-(--accent-color) text-[clamp(20px,4vw,32px)] font-bold">
      <Image src={LogoImage} alt="Логотип" width={60} height={60} />
      Никольский ДК
    </div>
  );
};
