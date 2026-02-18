"use client";

import { ChangeEvent, useState } from "react";
import { Field } from "./Field";
import { Radio } from "./Radio";
import { Selector } from "./Selector";
import { SubmitButton } from "./SubmitButton";
import { MUGS_ITEMS } from "@/constants/mugs-items";
import { MASTER_CLASSES_ITEMS } from "@/constants/master-classes-items";

export const Form = () => {
  const [type, setType] = useState<string>("masster-classes");
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [mesage, setMessage] = useState<string>("");

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const optionValues = type === "mugs" ? MUGS_ITEMS : MASTER_CLASSES_ITEMS;

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "fullname") {
      setFullName(event.target.value);
    } else if (event.target.name === "age") {
      setAge(event.target.value);
    }
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^([А-ЯЁ][а-яё]+[\s]){2}[А-ЯЁ][а-яё]+$/.test(fullName)) {
      setError("Поле 'ФИО (Иванов Иван Иванович)' должно содержать только кириллицу и пробелы");
      return;
    }

    if (Number(age) < 1 || Number(age) > 100) {
      setError("Поле 'Возраст' должно быть в диапазоне от 1 до 100");
      return;
    }

    setError("");
    setFullName("");
    setAge("");
    setMessage("Ваша заявка отправлена");
    console.log({ fullName, age, type });
  };

  return (
    <form className="flex flex-col " onSubmit={(e) => onSubmit(e)}>
      <div className="flex gap-x-[clamp(30px,4vw,50px)]">
        <Radio
          name="type"
          isChecked={type === "masster-classes"}
          message="Мастер класс"
          type="masster-classes"
          handleType={handleTypeChange}
        />
        <Radio
          name="type"
          isChecked={type === "mugs"}
          message="Кружки"
          type="mugs"
          handleType={handleTypeChange}
        />
      </div>
      <Field
        type="text"
        id="fullname"
        label="ФИО"
        name="fullname"
        value={fullName}
        handleValue={handleValue}
      />
      <Selector optinons={optionValues} />
      <Field
        type="number"
        id="age"
        label="Возраст"
        name="age"
        value={age}
        handleValue={handleValue}
      />

      {error && <p className="mt-5 text-red-700">{error}</p>}
      {mesage && <p className="mt-5 text-green-700">{mesage}</p>}

      <SubmitButton />
    </form>
  );
};
