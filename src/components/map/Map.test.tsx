import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Map }  from "./Map";

describe("Компонент Map", () => {
  it("Отображение компонента Map", () => {
    render(<Map />);

    expect(screen.getByTitle("yandex-map")).toBeInTheDocument();
  });
});