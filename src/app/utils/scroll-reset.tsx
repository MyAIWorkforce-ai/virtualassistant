"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser auto-scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force reset twice in case UI updates after first tick
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
    });
  }, [pathname]);

  return null;
}
