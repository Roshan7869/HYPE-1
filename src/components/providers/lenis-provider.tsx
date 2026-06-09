'use client';

import React, { createContext, ReactNode, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: HTMLElement | number, options?: any) => void;
  stop: () => void;
  start: () => void;
}

export const LenisContext = createContext<LenisContextType | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Raf loop for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  const scrollTo = useCallback(
    (target: HTMLElement | number, options?: any) => {
      lenisRef.current?.scrollTo(target, options);
    },
    []
  );

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const value: LenisContextType = {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
  };

  return (
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
}
