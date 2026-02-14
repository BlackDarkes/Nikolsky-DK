import { StaticImageData } from "next/image";
import ImageCooking from "@/assets/masster-classes/кулинарные мастеркласс.png";
import ImageClothing from "@/assets/masster-classes/акриловая роспись одежды.png";
import ImageString from "@/assets/masster-classes/стринг арт.png";
import ImageFusing from "@/assets/masster-classes/фьюзинг.png";
import ImageGel from "@/assets/masster-classes/гелевые свечи.png";
import ImageBis from "@/assets/masster-classes/бисероплетение.png";
import ImageKin from "@/assets/masster-classes/кинусайга.png";
import ImageScrap from "@/assets/masster-classes/скрапбукинг.png";
import ImageSoap from "@/assets/masster-classes/мыловарение.png";

interface IMasterClassesItem {
  id: number;
  name: string;
  masterClass: StaticImageData;
}

const MASTER_CLASSES_ITEMS: IMasterClassesItem[] = [
  {
    id: 1,
    name: "Кулинарные мастерклассы",
    masterClass: ImageCooking,
  },
  {
    id: 2,
    name: "Акриловая роспись одежды",
    masterClass: ImageClothing,
  },
  {
    id: 3,
    name: "Стринг арт",
    masterClass: ImageString,
  },
  {
    id: 4,
    name: "Фьюзинг",
    masterClass: ImageFusing,
  },
  {
    id: 5,
    name: "Гелевые свечи",
    masterClass: ImageGel,
  },
  {
    id: 6,
    name: "Бисероплетение",
    masterClass: ImageBis,
  },
  {
    id: 7,
    name: "Кинусайга",
    masterClass: ImageKin,
  },
  {
    id: 8,
    name: "Скрапбукинг",
    masterClass: ImageScrap,
  },
  {
    id: 9,
    name: "Мыло?варение",
    masterClass: ImageSoap,
  },
]

export { type IMasterClassesItem, MASTER_CLASSES_ITEMS };