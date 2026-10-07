'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { storyTimeline } from '@/content/story';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Timeline() {
  return (
    <section id="story" className="py-24 md:py-36 border-t border-white/5 relative bg-[#09090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="03 / THE STORY"
          title="HOW DID WE GET HERE?"
          subtitle="Not a polished PR biography. A sequence of experiments, failures, customer crises, and stubborn persistence."
          badgeColor="#315BFF"
        />

        {/* Horizontal Scroll / Stacked Timeline Track */}
        <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory">
          {storyTimeline.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full lg:w-[380px] flex-shrink-0 p-8 rounded-3xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between snap-center shadow-xl group relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#315BFF]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#315BFF]/20 transition-colors" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 font-mono">
                  <span className="text-3xl font-black text-[#315BFF]">
                    {item.step}
                  </span>
                  <span className="text-xs text-[#888899] uppercase tracking-wider">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-[#F5F3EE] tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="font-mono text-xs uppercase tracking-wider text-[#B8FF3D] font-bold mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#999999] leading-relaxed font-light mb-6">
                  {item.body}
                </p>
              </div>

              <div>
                {item.image && (
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-black/50 border border-white/10 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="380px"
                    />
                  </div>
                )}

                {item.highlight && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      ✦ {item.highlight}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
