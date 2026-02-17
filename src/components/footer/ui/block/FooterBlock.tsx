import { IFooterItem } from "@/constants/footer-items";
import { Logo } from "@/shared/ui";
import { FooterBlockList } from "./FooterBlockList";

interface IFooterBlockProps {
  socialItems: IFooterItem[];
  secureItems: IFooterItem[];
}

export const FooterBlock = ({
  socialItems,
  secureItems,
}: IFooterBlockProps) => {
  return (
    <div className="flex justify-between pt-[clamp(60px,4vw,120px)] pb-[clamp(140px,10vw,250px)] w-full max-lg:flex-col  max-lg:w-[min(100%,430px)] max-lg:mx-auto max-lg:gap-y-[clamp(60px,4vw,120px)]">
      <Logo />

      <div className="flex gap-x-[clamp(60px,4vw,150px)] text-(--primary-color) max-sm:flex-col max-sm:gap-y-[clamp(60px,4vw,120px)]">
        <FooterBlockList items={socialItems} />

        <FooterBlockList items={secureItems} />
      </div>
    </div>
  );
};
