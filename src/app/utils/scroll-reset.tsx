"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("🚀 ScrollReset MOUNTED");
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      console.log("⚡ Reset scroll for route:", pathname);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
        console.log("🛑 scrollRestoration disabled");
      }

      // Force scroll multiple times to beat any late browser behavior
      requestAnimationFrame(() => {
        console.log("⬆️ Scroll frame 1");
        window.scrollTo(0, 0);
        setTimeout(() => {
          console.log("⬆️ Scroll frame 2");
          window.scrollTo(0, 0);
        }, 50);
        setTimeout(() => {
          console.log("⬆️ Scroll frame 3");
          window.scrollTo(0, 0);
        }, 150);
      });
    };

    // Reset on first mount + pathname change
    scrollToTop();

    // Optional: listen for hash changes too
    const onHashChange = () => scrollToTop();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
