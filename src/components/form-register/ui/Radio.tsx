interface IRadioProps {
  name: string;
  message: string;
}
  
export const Radio = ({ name, message }: IRadioProps) => {
  return (
    <div>
      <label className="flex gap-x-1.25 text-5 font-(family-name:--instrument-sans)">
        <input type="radio" name={name} id="" /> {message}
      </label>
    </div>
  );
}