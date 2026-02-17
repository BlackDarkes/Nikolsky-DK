interface IFooterItem {
  id: number;
  name: string;
  href?: string;
  isTitle?: boolean;
}

const FOOTER_ITEMS_SOCIAL: IFooterItem[] = [
  {
    id: 1,
    name: "Соц сети:",
    isTitle: true,
  },
  {
    id: 2,
    name: "ВК",
    href: "https://vk.com/nikolskiydk",
  },
  {
    id: 3,
    name: "Однокласиники",
    href: "https://ok.ru/nikolskydom",
  }
]

const FOOTER_ITEMS_SECURE: IFooterItem[] = [
  {
    id: 1,
    name: "Юридическая информация:",
    isTitle: true,
  },
  {
    id: 2,
    name: "Политика конфиденциальности",
    href: "#",
  },
  {
    id: 3,
    name: "Обработка персональных данных",
    href: "#",
  }
]

export { type IFooterItem, FOOTER_ITEMS_SOCIAL, FOOTER_ITEMS_SECURE };