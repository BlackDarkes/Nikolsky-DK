"use client";

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleResizeWithDebounce = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSize, 150);
    };

    updateSize();

    window.addEventListener("resize", handleResizeWithDebounce);
    return () => {
      window.removeEventListener("resize", handleResizeWithDebounce);
      clearTimeout(timeoutId);
    };
  }, []);

  return size;
};
