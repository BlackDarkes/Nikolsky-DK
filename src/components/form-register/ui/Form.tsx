import { Field } from "./Field";
import { Radio } from "./Radio";
import { Selector } from "./Selector";
import { SubmitButton } from "./SubmitButton";

export const Form = () => {
  return (
    <form className="flex flex-col ">
      <div className="flex gap-x-[clamp(30px,4vw,50px)]">
        <Radio name="type" message="Мастер класс" />
        <Radio name="type" message="Кружки" />
      </div>
      <Field type="text" id="fullname" label="ФИО" name="fullname" />
      <Selector />
      <Field type="number" id="age" label="Возраст" name="age" />

      <SubmitButton />
    </form>
  );
}