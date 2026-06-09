'use client';

import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  offset?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical', offset = 0 } = options;
  const elementRef = useRef<HTMLElement | null>(null);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate parallax offset based on element position
      const elementCenter = rect.top + rect.height / 2;
      const centerOffset = windowHeight / 2 - elementCenter;

      const parallax = centerOffset * speed;
      setParallaxValue(parallax);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const transform = direction === 'vertical'
    ? `translateY(${parallaxValue}px)`
    : `translateX(${parallaxValue}px)`;

  return { elementRef, transform, parallaxValue };
}
