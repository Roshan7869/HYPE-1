'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface IntersectionResult {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
  hasBeenInView: boolean;
}

export function useIntersection(options: IntersectionOptions = {}): IntersectionResult {
  const {
    threshold = 0.25,
    rootMargin = '0px',
    triggerOnce = false,
    ...rest
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold,
      rootMargin,
      ...rest,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasBeenInView(true);

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, observerOptions);

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView, hasBeenInView };
}
