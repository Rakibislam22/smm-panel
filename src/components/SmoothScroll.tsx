"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis | undefined;
    let isCancelled = false;
    let idleCallbackId: number | undefined;
    let timeoutId: number | undefined;

    const initialise = async () => {
      const { default: Lenis } = await import("lenis");

      if (isCancelled) return;

      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        lerp: 0.09,
        smoothWheel: true,
        respectReducedMotion: true,
      });
    };

    const scheduleInitialisation = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleCallbackId = window.requestIdleCallback(() => void initialise(), {
          timeout: 1200,
        });
        return;
      }

      timeoutId = window.setTimeout(() => void initialise(), 300);
    };

    if (document.readyState === "complete") {
      scheduleInitialisation();
    } else {
      window.addEventListener("load", scheduleInitialisation, { once: true });
    }

    return () => {
      isCancelled = true;
      window.removeEventListener("load", scheduleInitialisation);
      if (idleCallbackId !== undefined) window.cancelIdleCallback(idleCallbackId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
