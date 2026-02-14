import { StaticImageData } from "next/image";
import ImagePolymer from "@/assets/mugs/полимерная глина.png"; 
import ImageAviation from "@/assets/mugs/авиа моделирование.png"; 
import ImageMarmor from "@/assets/mugs/марморивование.png"; 
import ImageEbru from "@/assets/mugs/ЭБРУ .png"; 

interface IMugsItems {
  id: number;
  name: string;
  mug: StaticImageData;
}

const MUGS_ITEMS: IMugsItems[] = [
  {
    id: 1,
    name: "Лепка из  полимерной глины",
    mug: ImagePolymer,
  },
  {
    id: 2,
    name: "Авиа моделирование",
    mug: ImageAviation,
  },
  {
    id: 3,
    name: "Марморивование",
    mug: ImageMarmor,
  },
  {
    id: 4,
    name: "ЭБРУ",
    mug: ImageEbru,
  }
]

export { type IMugsItems, MUGS_ITEMS };