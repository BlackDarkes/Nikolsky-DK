import { IMasterClassesItem } from "@/constants/master-classes-items";
import { IMugsItems } from "@/constants/mugs-items";

interface ISelectorOptionProps {
  optinon: IMugsItems | IMasterClassesItem
}
  
export const SelectorOption = ({ optinon }: ISelectorOptionProps) => {
  return (
    <option value={optinon.id}>{optinon.name}</option>
  );
}