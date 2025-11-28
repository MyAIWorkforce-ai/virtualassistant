"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("SCROLL RESET RUNNING for:", pathname);
    // Wait for hydration then scroll
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

