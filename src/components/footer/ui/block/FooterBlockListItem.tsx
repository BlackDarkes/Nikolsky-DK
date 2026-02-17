import { IFooterItem } from "@/constants/footer-items";
import Link from "next/link";

interface IFooterBlockListItemProps {
  item: IFooterItem;
}
  
export const FooterBlockListItem = ({ item }: IFooterBlockListItemProps) => {
  return (
    <li>
      { item.isTitle ? (<h3 className="mb-6.25 font-bold">{item.name}</h3>) : (<Link href={item.href ? item.href : "#"} className="mb-2.5">{item.name}</Link>) }
    </li>
  );
}