import { IMugsItems } from "@/constants/mugs-items";
import Image from "next/image";
import Link from "next/link";

interface IHeroListItemProps {
  mugItem: IMugsItems;
}

export const HeroListItem = ({ mugItem }: IHeroListItemProps) => {
  return (
    <li className="relative w-[clamp(280px,30vw,320px)] h-full shrink-0 snap-center z-20">
      <Link href={"#"}>
        <Image
          src={mugItem.mug}
          alt={mugItem.name}
          width={100}
          height={100}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div
          className={`
            absolute bottom-2.5 left-[50%] translate-x-[-50%] bg-(--mugs-bg) w-[90%] h-35 \n\r
            flex items-center justify-center
          `}
        >
          <p className="text-center text-[clamp(20px,4vw,28px)] font-bold text-(--primary-color)">
            {mugItem.name}
          </p>
        </div>
      </Link>
    </li>
  );
};
