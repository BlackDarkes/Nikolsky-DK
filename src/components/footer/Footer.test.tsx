import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Footer } from "./Footer";

describe("Компонент Footer", () => {
  it("Отображение компонента Footer", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});