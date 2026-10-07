'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { lessonsLearned, LessonCard } from '@/content/quotes';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { sound } from '@/lib/sound';

export function ThingsIveLearned() {
  const [selectedCard, setSelectedCard] = useState<LessonCard | null>(null);

  return (
    <section className="py-24 md:py-36 border-t border-white/5 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="HARD LESSONS"
          title="SHIT I'VE LEARNED BUILDING COMPANIES."
          subtitle="Unfiltered operating principles earned the hard way across code, customers, cash flow, and Lagos reality."
          badgeColor="#315BFF"
        />

        {/* Scattered / Rotated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessonsLearned.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -6, zIndex: 10 }}
              onClick={() => {
                sound.playPop();
                setSelectedCard(card);
              }}
              style={{
                rotate: `${card.rotation || 0}deg`,
              }}
              className="p-7 rounded-3xl bg-[#111116] border border-white/10 hover:border-[#315BFF] transition-all cursor-pointer flex flex-col justify-between shadow-xl min-h-[220px] group select-none"
              data-cursor="EXPAND"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#666677] block mb-4">
                  0{i + 1} • LESSON
                </span>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F5F3EE] group-hover:text-[#315BFF] transition-colors leading-tight">
                  &ldquo;{card.quote}&rdquo;
                </h3>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#888899]">
                <span>Tap to read context</span>
                <span className="text-[#315BFF] group-hover:translate-x-1 transition-transform">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                sound.playClick();
                setSelectedCard(null);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#111116] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D]">
                  FOUNDER PRINCIPLE
                </span>
                <button
                  onClick={() => {
                    sound.playClick();
                    setSelectedCard(null);
                  }}
                  className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight mb-4">
                &ldquo;{selectedCard.quote}&rdquo;
              </h3>

              <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light mb-8">
                {selectedCard.context}
              </p>

              {selectedCard.articleSlug && (
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <Link
                    href={`/notes/${selectedCard.articleSlug}`}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCard(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#315BFF] hover:bg-[#2546DB] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors"
                  >
                    <span>Read Full Essay</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
