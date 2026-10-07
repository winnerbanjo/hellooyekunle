'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ArrowUpRight } from 'lucide-react';
import { ContentItem } from '@/content/content';
import { sound } from '@/lib/sound';

interface VideoModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#111116] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#B8FF3D]/15 text-[#B8FF3D] font-mono text-[10px] uppercase tracking-wider font-bold">
                {item.platform}
              </span>
              <span className="font-mono text-xs uppercase text-[#999999]">
                {item.category} • {item.duration}
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#999999] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Simulated Video Player / Preview */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/70 border border-white/10 mb-6 flex items-center justify-center group">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#B8FF3D] flex items-center justify-center mx-auto mb-4 text-[#080808] shadow-xl shadow-[#B8FF3D]/25 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-[#080808] ml-0.5" />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#B8FF3D] font-bold">
                {item.platform} DISPATCH • {item.views}
              </p>
            </div>
          </div>

          {/* Details */}
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] tracking-tight mb-3">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-[#999999] font-light leading-relaxed mb-6">
            {item.summary}
          </p>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-[#B8FF3D] mb-1 font-bold">
              CORE TAKEAWAY:
            </span>
            <p className="text-xs sm:text-sm text-white/90 font-medium italic leading-relaxed">
              &ldquo;{item.keyTakeaway}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="font-mono text-xs text-[#777777]">Published: {item.date}</span>
            <a
              href={`https://youtube.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#B8FF3D] hover:bg-[#A3E635] text-[#080808] text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors"
              data-cursor="OPEN"
            >
              <span>Watch on {item.platform}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
