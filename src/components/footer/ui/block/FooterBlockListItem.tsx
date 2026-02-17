import { IFooterItem } from "@/constants/footer-items";
import Link from "next/link";

interface IFooterBlockListItemProps {
  item: IFooterItem;
}
  
export const FooterBlockListItem = ({ item }: IFooterBlockListItemProps) => {
  return (
    <li>
      { item.isTitle ? (<h3>{item.name}</h3>) : (<Link href={item.href ? item.href : "#"}>{item.name}</Link>) }
    </li>
  );
}