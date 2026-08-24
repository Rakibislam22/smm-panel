"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.09,
      smoothWheel: true,
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
