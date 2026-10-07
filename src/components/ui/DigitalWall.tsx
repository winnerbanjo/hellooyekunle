'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { wallItems, WallItem } from '@/content/wall';
import { SectionHeader } from './SectionHeader';

export function DigitalWall() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-36 border-t border-white/5 relative overflow-hidden bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <SectionHeader
          label="PINBOARD"
          title="MY BRAIN ON A WALL."
          subtitle="Screenshots, customer messages, midnight thoughts, product sketches, and random epiphanies. Drag items around on desktop."
          badgeColor="#818CF8"
        />
      </div>

      {/* Desktop Canvas (Interactive Draggable) */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full h-[640px] max-w-7xl mx-auto px-6 border border-white/10 rounded-3xl bg-[#08080A]/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute top-4 left-6 font-mono text-[11px] text-[#666677] uppercase tracking-wider">
          ✦ Interactive Canvas — Drag Cards Freely
        </div>

        {wallItems.map((item: WallItem) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.04, zIndex: 50, cursor: 'grab' }}
            whileTap={{ scale: 0.98, cursor: 'grabbing' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              left: `${item.x}px`,
              top: `${item.y}px`,
              rotate: `${item.rotation || 0}deg`,
            }}
            className="w-72 p-5 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl hover:shadow-black/80 select-none border border-white/10"
            css-custom-styles={item.bgColor ? undefined : undefined}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-90"
              style={{ backgroundColor: item.bgColor || '#141418' }}
            />

            <div className="relative z-10">
              {item.type === 'customer' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#10B981]">
                    <span>💬 {item.handle}</span>
                    <span className="text-[10px] text-white/50">{item.date}</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-sans font-medium">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <p className="text-[11px] text-white/60 font-mono font-bold">{item.author}</p>
                </div>
              )}

              {item.type === 'note' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Sticky Note</span>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                </div>
              )}

              {item.type === 'tweet' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-xs">{item.author}</span>
                    <span className="text-white/40 text-[10px]">{item.date}</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>
              )}

              {item.type === 'photo' && (
                <div className="space-y-2.5">
                  <div className="relative w-full h-36 rounded-lg overflow-hidden bg-black/40">
                    <Image
                      src={item.image || '/images/building/building-code.svg'}
                      alt={item.content}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <p className="text-xs text-white/70 leading-snug">{item.content}</p>
                  <span className="text-[10px] font-mono text-white/40 block">{item.date}</span>
                </div>
              )}

              {item.type === 'metric' && (
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-white/50">Verified Live</span>
                  <p className="text-2xl font-black font-mono tracking-tight" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                  <p className="text-xs text-white/60">{item.author}</p>
                </div>
              )}

              {item.type === 'quote' && (
                <div className="space-y-1">
                  <p className="text-base font-bold font-mono" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                  <span className="text-[10px] font-mono text-white/50">{item.author}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile & Tablet Layout (Horizontal Carousel / Scroll Grid) */}
      <div className="lg:hidden px-6">
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {wallItems.map((item: WallItem) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 p-5 rounded-2xl border border-white/10 shadow-lg snap-center relative overflow-hidden"
              style={{ backgroundColor: item.bgColor || '#141418' }}
            >
              {item.type === 'customer' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#10B981]">
                    <span>💬 {item.handle}</span>
                    <span className="text-[10px] text-white/50">{item.date}</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-sans font-medium">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <p className="text-[11px] text-white/60 font-mono font-bold">{item.author}</p>
                </div>
              )}

              {item.type === 'note' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Sticky Note</span>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                </div>
              )}

              {item.type === 'tweet' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-xs">{item.author}</span>
                    <span className="text-white/40 text-[10px]">{item.date}</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>
              )}

              {item.type === 'photo' && (
                <div className="space-y-2.5">
                  <div className="relative w-full h-36 rounded-lg overflow-hidden bg-black/40">
                    <Image
                      src={item.image || '/images/building/building-code.svg'}
                      alt={item.content}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <p className="text-xs text-white/70 leading-snug">{item.content}</p>
                  <span className="text-[10px] font-mono text-white/40 block">{item.date}</span>
                </div>
              )}

              {item.type === 'metric' && (
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-white/50">Verified Live</span>
                  <p className="text-2xl font-black font-mono tracking-tight" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                  <p className="text-xs text-white/60">{item.author}</p>
                </div>
              )}

              {item.type === 'quote' && (
                <div className="space-y-1">
                  <p className="text-base font-bold font-mono" style={{ color: item.textColor || '#FFFFFF' }}>
                    {item.content}
                  </p>
                  <span className="text-[10px] font-mono text-white/50">{item.author}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
