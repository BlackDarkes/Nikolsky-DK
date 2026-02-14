import { IMugsItems } from "@/constants/mugs-items";
import { HeroListItem } from "./HeroListItem";

interface IHeroListProps {
  mugsItems: IMugsItems[];
}
  
export const HeroList = ({ mugsItems }: IHeroListProps) => {
  return (
    <ul className={`flex h-95 w-full gap-x-[clamp(24px,8vw,53px)] overflow-auto md:scrollbar-hide snap-x snap-mandatory`}>
      { mugsItems.map((item) => (
        <HeroListItem key={item.id} mugItem={item} />
      )) }
    </ul>
  );
}