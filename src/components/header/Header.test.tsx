import { render, screen } from "@testing-library/react";
import { vi, it, describe, expect } from "vitest";
import { Header } from "./Header";
import { useBurgerStore } from "./model/burger-store";
import { ReactNode } from "react";

vi.mock("./model/burger-store.ts", () => ({
  useBurgerStore: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("Компонент Header", () => {
  it("Отображение компонента Header со всеми его элементами", () => {
    const handleOpenMock = vi.fn();

    vi.mocked(useBurgerStore).mockReturnValue({
      isOpenBurger: false,
      handleOpen: handleOpenMock,
    });

    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("Отображение бургер-меню в открытот состоянии", () => {
    vi.mocked(useBurgerStore).mockReturnValue({
      isOpenBurger: true,
      handleOpen: vi.fn(),
    });

    render(<Header />);
  });
});
