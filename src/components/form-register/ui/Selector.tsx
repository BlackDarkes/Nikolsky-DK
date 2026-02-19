import { IMasterClassesItem } from "@/constants/master-classes-items";
import { IMugsItems } from "@/constants/mugs-items";
import { SelectorOption } from "./SelectorOption";

interface ISelectorProps {
  optinons: IMugsItems[] | IMasterClassesItem[];
}
  
export const Selector = ({ optinons }: ISelectorProps) => {
  return (
    <select name="type" id="type" className="mt-10 p-2.5 border border-(--secondary-bg) rounded-lg w-[min(100%,300px)] cursor-pointer">
      { optinons.map((option) => (
        <SelectorOption key={option.id} optinon={option} />
      )) }
    </select>
  );
}