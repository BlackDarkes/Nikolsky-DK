import { screen, render, waitFor, cleanup } from "@testing-library/react";
import { it, describe, expect, afterEach } from "vitest";
import { FormRegister } from "./FormRegister";
import userEvent from "@testing-library/user-event";

describe("Компонент Form", () => {
  afterEach(cleanup);

  it("Должен показать ошибку при некорректном заполнении поля ФИО", async () => {
    const user = userEvent.setup();
    render(<FormRegister />);

    const nameInput = screen.getByRole("textbox", { name: /фио/i });
    const submitButton = screen.getByRole("button", { name: /записаться/i });

    await user.type(nameInput, "Иванов Иван");
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/должно содержать только кириллицу и пробелы/i),
      ).toBeDefined();
    });
  });

  it("Должен показать ошибку при некорректном заполнении поля возраст", async () => {
    const user = userEvent.setup();
    render(<FormRegister />);

    const nameInput = screen.getByRole("textbox", { name: /фио/i });
    const ageInput = screen.getByRole("spinbutton", { name: /возраст/i });
    const submitButton = screen.getByRole("button", { name: /записаться/i });

    await user.type(nameInput, "Иванов Иван Иванович");
    await user.type(ageInput, "150"); 
    await user.click(submitButton);

    expect(screen.getByText(/должно быть в диапазоне от 1 до 100/i)).toBeInTheDocument();
  });

  it("Должна успешно отправляться форма", async () => {
    const user = userEvent.setup();
    render(<FormRegister />);

    const nameInput = screen.getByRole("textbox", { name: /фио/i });
    const ageInput = screen.getByRole("spinbutton", { name: /возраст/i });
    const submitButton = screen.getByRole("button", { name: /записаться/i });

    await user.type(nameInput, "Иванов Иван Иванович");
    await user.type(ageInput, "20");
    await user.click(submitButton);

    expect(screen.getByText(/Ваша заявка отправлена/i)).toBeInTheDocument();

    expect(nameInput).toHaveValue("");
  })
});
