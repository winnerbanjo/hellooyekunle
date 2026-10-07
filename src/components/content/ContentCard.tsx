'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { ContentItem } from '@/content/content';
import { sound } from '@/lib/sound';

interface ContentCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
}

export function ContentCard({ item, onSelect }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      onClick={() => {
        sound.playPop();
        onSelect(item);
      }}
      className="p-5 sm:p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
      data-cursor="WATCH"
    >
      <div>
        {/* Media Thumbnail */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-black/5 dark:border-white/5 mb-5">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Play Badge */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-4 h-4 fill-black ml-0.5" />
            </div>
          </div>

          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white font-bold border border-white/10">
            {item.platform}
          </div>

          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90">
            {item.duration}
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2 uppercase tracking-wider">
          <span className="text-neutral-900 dark:text-neutral-100 font-bold">{item.category}</span>
          <span>{item.views}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:opacity-75 transition-opacity leading-snug mb-3">
          {item.title}
        </h3>
      </div>

      <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>{item.date}</span>
        <span className="text-neutral-900 dark:text-neutral-100 font-bold group-hover:translate-x-1 transition-transform">
          WATCH ↗
        </span>
      </div>
    </motion.div>
  );
}
