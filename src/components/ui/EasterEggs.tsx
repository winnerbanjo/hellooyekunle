'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '@/lib/sound';

export function EasterEggs() {
  const [activeEgg, setActiveEgg] = useState<'money' | 'lagos' | 'konami' | null>(null);

  useEffect(() => {
    let keyBuffer = '';
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      // Konami code check
      if (e.key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          setActiveEgg('konami');
          sound.playPop();
          konamiIndex = 0;
          return;
        }
      } else {
        konamiIndex = 0;
      }

      // Word tracking buffer
      if (e.key.length === 1) {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 20) {
          keyBuffer = keyBuffer.slice(-20);
        }

        if (keyBuffer.endsWith('money')) {
          setActiveEgg('money');
          sound.playPop();
          keyBuffer = '';
        } else if (keyBuffer.endsWith('lagos')) {
          setActiveEgg('lagos');
          sound.playWhoosh();
          keyBuffer = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeEgg) {
      const timer = setTimeout(() => {
        setActiveEgg(null);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [activeEgg]);

  return (
    <AnimatePresence>
      {activeEgg === 'money' && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 shadow-2xl text-neutral-100 font-mono text-sm tracking-widest uppercase flex items-center gap-3 backdrop-blur-lg"
        >
          <span className="text-xl">💰</span>
          <span>Good. We understand each other.</span>
        </motion.div>
      )}

      {activeEgg === 'lagos' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            className="text-center p-8 bg-neutral-900 border border-white/20 rounded-2xl shadow-2xl max-w-md mx-4"
          >
            <div className="font-mono text-xs uppercase text-neutral-400 tracking-widest mb-2 font-bold">
              Lagos Edge Activated • 18:21 WAT
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
              Lagos Built Me.
            </h3>
            <p className="text-sm text-neutral-400 font-light">
              Where high friction breeds unstoppable operators. Technology gave us leverage.
            </p>
          </motion.div>
        </motion.div>
      )}

      {activeEgg === 'konami' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="relative max-w-md w-full bg-neutral-950 border border-white/20 rounded-2xl p-6 text-center shadow-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block mb-2 font-bold">
              ARCHIVE UNLOCKED (30 LIVES)
            </span>
            <h3 className="text-2xl font-black text-white uppercase mb-3">
              Nile 1.0 Retro Mode
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              &quot;First version looked horrible. Shipped anyway. Made ₦200M+ since.&quot;
            </p>
            <button
              onClick={() => setActiveEgg(null)}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Resume Journey
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
