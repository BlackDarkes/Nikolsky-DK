import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { AboutUs } from "./AboutUs";

describe("Компонент AboutUs", () => {
  it("Отображение компонента AboutUs", () => {
    render(<AboutUs />);

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});