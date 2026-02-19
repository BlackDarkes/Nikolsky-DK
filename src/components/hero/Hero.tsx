"use client";

import { Container } from "@/shared/ui";
import { HeroList } from "./ui/HeroList";
import { MUGS_ITEMS } from "@/constants/mugs-items";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Hero = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || width === undefined) return;

    const onWheel = (e: globalThis.WheelEvent) => {
      if (e.deltaY === 0) return;

      if (width > 1500) return;

      e.preventDefault();

      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 2, 
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, [width]);

  return (
    <section id="mugs" className="py-[clamp(65px,12vw,120px)] scroll-mt-[30vh]">
      <Container>
        <HeroList mugsItems={MUGS_ITEMS} scrollRef={scrollRef} />
      </Container>
    </section>
  );
};
