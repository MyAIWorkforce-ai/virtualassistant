'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Component to aggressively reset scroll position to (0, 0) 
 * on route changes. This fixes the overlap issue where the browser 
 * preserves a residual scroll offset (from a previous anchor link jump)
 * when navigating to a new, full page like /contact or /about.
 */
export default function ScrollReset() {
  const pathname = usePathname();

  // useLayoutEffect runs synchronously right after mutations, 
  // ensuring the scroll reset happens before the browser paint cycle.
  useLayoutEffect(() => {
    
    // We wrap window.scrollTo in a tiny delay (50ms) to ensure it runs 
    // *after* the browser's own scroll restoration logic, guaranteeing a win.
    const resetScroll = () => {
      // The condition to check for !window.location.hash is no longer strictly needed here, 
      // as the scroll-margin-top correctly handles anchor jumps, 
      // but running scrollTo(0,0) on every full route change is safer.
      window.scrollTo(0, 0);
    };

    const timeoutId = setTimeout(resetScroll, 50); 
    
    return () => clearTimeout(timeoutId);

  }, [pathname]); 

  return null;
}