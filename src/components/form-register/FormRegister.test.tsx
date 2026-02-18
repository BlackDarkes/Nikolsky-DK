import { screen, render, waitFor, cleanup } from "@testing-library/react";
import { vi, it, describe, expect, afterEach } from "vitest";
import { FormRegister } from "./FormRegister";
import userEvent from "@testing-library/user-event";

describe("Компонент Form", () => {
  afterEach(cleanup);

  it("Должен показать ошибку при некорректном заполнении поля ФИО", async () => {
    const user = userEvent.setup();
    // const result = render(<FormRegister />);

    // screen.debug();

    const nameInput = screen.getByRole('textbox', { name: /ФИО/i });
    const submitButton = screen.getByRole("button", { name: /записаться/i });

    await user.type(nameInput, "Иванов Иван");
    await user.click(submitButton);

    expect(screen.getByText("Поле 'ФИО (Иванов Иван Иванович)' должно содержать только кириллицу и пробелы")).toBeInTheDocument();
  })
})