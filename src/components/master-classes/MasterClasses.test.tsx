import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { MasterClasses } from "./MasterClasses"

describe("Компонент MasterClasses", () => {
  it("Отображение компонента MasterClasses", () => {
    render(<MasterClasses />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
})