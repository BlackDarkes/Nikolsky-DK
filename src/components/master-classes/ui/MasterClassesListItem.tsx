import { IMasterClassesItem } from "@/constants/master-classes-items";
import Image from "next/image";
import Link from "next/link";

interface IMasterClassesListItemProps {
  masterClass: IMasterClassesItem;
}

export const MasterClassesListItem = ({
  masterClass,
}: IMasterClassesListItemProps) => {
  return (
    <li className="relative">
      <Link href={"#"}>
        <Image
          src={masterClass.masterClass}
          alt={masterClass.name}
          width={460}
          height={380}
        />

        <div className="absolute top-[50%] left-[50%] flex items-center justify-center translate-[-50%] text-(--primary-color) text-[clamp(24px,4vw,32px)] bg-(--master-classes-bg) w-[clamp(230px,30vw,280px)] h-[clamp(150px,25vw,190px)] rounded-xl text-center">
          <p>{masterClass.name}</p>
        </div>
      </Link>
    </li>
  );
};
