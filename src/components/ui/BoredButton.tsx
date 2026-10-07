'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Shuffle } from 'lucide-react';
import { boredItems, BoredItem } from '@/content/bored';
import { sound } from '@/lib/sound';

export function BoredButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<BoredItem>(boredItems[0]);

  const handleOpen = () => {
    sound.playPop();
    const randomIndex = Math.floor(Math.random() * boredItems.length);
    setCurrentItem(boredItems[randomIndex]);
    setIsOpen(true);
  };

  const handleShuffle = () => {
    sound.playClick();
    let randomIndex = Math.floor(Math.random() * boredItems.length);
    while (boredItems[randomIndex].id === currentItem.id && boredItems.length > 1) {
      randomIndex = Math.floor(Math.random() * boredItems.length);
    }
    setCurrentItem(boredItems[randomIndex]);
  };

  const handleClose = () => {
    sound.playClick();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black border border-black/10 dark:border-white/15 shadow-xl transition-all font-mono text-xs tracking-wider cursor-pointer"
        data-cursor="BORED"
        aria-label="I'm bored button"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-bold">I&apos;M BORED</span>
      </motion.button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[var(--background)] border border-black/10 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs tracking-widest uppercase text-neutral-500 font-bold">
                    {currentItem.tag}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="min-h-[120px] flex items-center py-2">
                <motion.p
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100 font-medium italic leading-relaxed"
                >
                  &ldquo;{currentItem.text}&rdquo;
                </motion.p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/10 mt-6">
                <button
                  onClick={handleShuffle}
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-bold hover:opacity-70 transition-opacity cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Give me another</span>
                </button>

                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-neutral-100 text-xs font-mono tracking-wider font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                >
                  Back to reality
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
