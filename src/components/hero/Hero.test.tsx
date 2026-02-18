import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Hero } from "./Hero";

describe("Компонент Hero", () => {
  it("Отображение компонента Hero", () => {
    render(<Hero />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
})