'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animation starts (for staggering). Default 0. */
  delay?: number;
  /** Duration in ms. Default 600. */
  duration?: number;
  /** How far the element slides up. Default 30px. */
  offset?: number;
  /** Only animate once, don't re-trigger. Default true. */
  once?: boolean;
}

export const ScrollReveal: React.FC<Props> = ({
  children,
  className = '',
  delay = 0,
  duration = 600,
  offset = 30,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small RAF delay to ensure the animation triggers after the element is in view
          requestAnimationFrame(() => setVisible(true));
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${offset}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
