"use client";

import { HTMLInputTypeAttribute, useState } from "react";

interface IFieldProps {
  label: string;
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
}

export const Field = ({ label, name, id, type }: IFieldProps) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    console.log("focus");
  };

  return (
    <div className="relative mt-5 w-[min(100%,750px)]">
      <label
        htmlFor={id}
        className={`
          absolute left-2.5  transition-all text-[clamp(18px,4vw,20px)]  duration-600 pointer-events-none \n\r
          ${focused ? "-translate-y-full scale-90" : "translate-y-0 scale-100 text-(--placeholder-color)"}
        `}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onFocus={handleFocus}
        onBlur={() => setFocused(false)}
        className={`
          w-full p-[12px_10px] h-full  transition duration-400 outline-none border \r\n
              ${
                focused
                  ? "border-(--border-color) rounded-xl"
                  : "border-t-transparent border-x-transparent border-b-(--border-color) rounded-none"
              }
        `}
      />
    </div>
  );
};
