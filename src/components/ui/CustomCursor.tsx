'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover pointer
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasPointer && !prefersReducedMotion) {
      const timer = setTimeout(() => setIsTouchDevice(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        return;
      }

      if (target.closest('a[href^="http"], a[target="_blank"]')) {
        setCursorText('OPEN ↗');
      } else if (target.closest('button, a')) {
        setCursorText('');
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const hasText = cursorText.length > 0;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          scale: hasText ? 1.2 : 1,
          width: hasText ? 'auto' : 10,
          height: hasText ? 'auto' : 10,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`flex items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-md ${
          hasText ? 'px-3 py-1' : ''
        }`}
      >
        {hasText && (
          <span className="whitespace-nowrap font-bold">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
