import { IFooterItem } from "@/constants/footer-items";
import { FooterBlockListItem } from "./FooterBlockListItem";

interface IFooterBlockListProps {
  items: IFooterItem[];
}

export const FooterBlockList = ({ items }: IFooterBlockListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <FooterBlockListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
