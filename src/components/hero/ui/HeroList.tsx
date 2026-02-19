import { IMugsItems } from "@/constants/mugs-items";
import { HeroListItem } from "./HeroListItem";
import { RefObject } from "react";

interface IHeroListProps {
  mugsItems: IMugsItems[];
  scrollRef: RefObject<HTMLUListElement | null>;
}

export const HeroList = ({
  mugsItems,
  scrollRef,
}: IHeroListProps) => {
  return (
    <ul
      ref={scrollRef}
      className={`flex flex-nowrap h-100 py-5 w-full gap-x-[clamp(24px,8vw,53px)] overflow-auto md:scrollbar-hide snap-x snap-mandatory`}
    >
      {mugsItems.map((item) => (
        <HeroListItem key={item.id} mugItem={item} />
      ))}
    </ul>
  );
};
