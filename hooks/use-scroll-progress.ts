'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface ScrollProgressOptions {
  offset?: number;
  threshold?: number;
}

export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const { offset = 0, threshold = 0 } = options;
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate scroll progress for this element
      const elementTop = rect.top - offset;
      const elementBottom = rect.bottom - offset;

      let scrollProgress = 0;

      if (elementTop < windowHeight && elementBottom > 0) {
        // Element is in viewport
        scrollProgress = Math.min(1, Math.max(0, (windowHeight - elementTop) / (windowHeight + elementHeight)));
      }

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return { progress, elementRef };
}
