'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [stage, setStage] = useState<'hello' | 'winner' | 'done'>('done');

  useEffect(() => {
    // Check if user already saw the loader in this session
    const hasSeen = sessionStorage.getItem('hellooyekunle_visited');
    if (!hasSeen) {
      const timer0 = setTimeout(() => setStage('hello'), 0);
      const timer1 = setTimeout(() => setStage('winner'), 550);
      const timer2 = setTimeout(() => {
        setStage('done');
        sessionStorage.setItem('hellooyekunle_visited', 'true');
      }, 1250);

      return () => {
        clearTimeout(timer0);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[1000] bg-[var(--background)] flex items-center justify-center p-6 select-none"
      >
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 block mb-3 font-semibold">
            LAGOS • OPERATING
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-neutral-900 dark:text-neutral-100">
            {stage === 'hello' ? 'HELLO.' : "I'M WINNER."}
          </h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
