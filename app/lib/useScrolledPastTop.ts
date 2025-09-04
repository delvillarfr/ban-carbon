"use client";

import { useState, useEffect } from "react";

export function useScrolledPastTop() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const sentinelDiv = document.getElementById('sentinel') as HTMLElement;

    // Handle reloads when not at the top
    setScrolled(window.scrollY > 0);

    const options = {root: null, threshold: 0};
    const hasScrolled = ([entry]: IntersectionObserverEntry[]) => {
      setScrolled(!entry.isIntersecting);
    }
    const observer = new IntersectionObserver(hasScrolled, options);

    observer.observe(sentinelDiv);
    return () => observer.disconnect();
  });

  return scrolled;
}