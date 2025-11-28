"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
      console.log("🛑 scrollRestoration disabled");
    }

    // Wait for the next paint, then reset scroll
    const resetScroll = () => {
      console.log("⚡ Reset scroll for route:", pathname);
      window.scrollTo(0, 0);

      // Also reset the scroll of main container if needed
      const main = document.querySelector("main");
      if (main) main.scrollTop = 0;
    };

    // Use two micro-tasks to beat hydration/layout effects
    const id1 = setTimeout(resetScroll, 0);
    const id2 = setTimeout(resetScroll, 50);

    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, [pathname]);

  return null;
}
