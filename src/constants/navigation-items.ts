interface INavItem {
  id: number;
  name: string;
  href: string;
}

const NAV_ITEMS: INavItem[] = [
  {
    id: 1,
    name: "Контакты",
    href: "#contacts",
  },
  {
    id: 2,
    name: "Записаться",
    href: "#make-an-appointment",
  },
  {
    id: 3,
    name: "Мастер-классы",
    href: "#master-classes",
  },
  {
    id: 4,
    name: "Кружки",
    href: "#mugs",
  },
  {
    id: 5,
    name: "О нас",
    href: "#about-us",
  }
]

export { type INavItem, NAV_ITEMS };