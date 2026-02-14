"use client"

import { type INavItem } from "@/constants/index";
import Link from "next/link";

interface INavBarElementProps {
  element: INavItem;
}

export const NavBarElement = ({ element }: INavBarElementProps) => {
  return (
    <li className={`
      relative \r\n
      text-(--navbar-color) transition duration-400 \r\n
      hover:text-(--accent-color) \r\n
      before:content-[''] before:absolute before:w-full before:h-px before:-bottom-0.5 before:left-0 before:bg-(--accent-color) before:scale-x-0 before:origin-left before:transition before:duration-400 \r\n
      hover:before:origin-left hover:before:scale-x-100 \r\n
    `}>
      <Link href={`${element.href}`}>
        {element.name}
      </Link>
    </li>
  );
};
