import { IMasterClassesItem } from "@/constants/master-classes-items";
import { MasterClassesListItem } from "./MasterClassesListItem";

interface IMasterClassesListProps {
  massterClasses: IMasterClassesItem[];
}
  
export const MasterClassesList = ({ massterClasses }: IMasterClassesListProps) => {
  return (
    <ul className="grid grid-cols-3 justify-items-center w-full gap-x-5 gap-y-15 max-lg:grid-cols-2 max-md:grid-cols-1">
      { massterClasses.map((item) => (
        <MasterClassesListItem key={item.id} masterClass={item} />
      )) }
    </ul>
  );
}