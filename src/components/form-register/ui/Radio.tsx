import { ChangeEvent } from "react";

interface IRadioProps {
  name: string;
  message: string;
  type: string;
  handleType: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
  
export const Radio = ({ name, message, type, handleType, isChecked }: IRadioProps) => {
  return (
    <div>
      <label className="flex gap-x-1.25 text-5 text-[clamp(16px,4vw,20px)] font-(family-name:--instrument-sans)">
        <input type="radio" name={name} id="" checked={isChecked} value={type} onChange={(e) => handleType(e)} /> {message}
      </label>
    </div>
  );
}