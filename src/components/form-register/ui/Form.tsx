import { Field } from "./Field";
import { Radio } from "./Radio";
import { Selector } from "./Selector";
import { SubmitButton } from "./SubmitButton";

export const Form = () => {
  return (
    <form>
      <div>
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