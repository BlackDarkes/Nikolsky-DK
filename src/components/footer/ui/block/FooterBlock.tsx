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
    <div>
      <Logo />

      <div>
        <FooterBlockList items={socialItems} />

        <FooterBlockList items={secureItems} />
      </div>
    </div>
  );
};
