'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteImages } from '@/content/images';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function CameraRoll() {
  const photos = siteImages.filter(
    (img) => img.category === 'camera-roll' || img.category === 'life' || img.category === 'lagos'
  ).slice(0, 6);

  return (
    <section className="py-24 md:py-36 border-t border-white/5 relative bg-[#060608]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="FIELD ARCHIVE"
          title="CAMERA ROLL."
          subtitle="Somewhere between work, Lagos traffic, customer visits, and everything else."
          badgeColor="#F59E0B"
        />

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-3xl bg-[#111115] border border-white/10 hover:border-white/20 transition-all overflow-hidden group flex flex-col justify-between ${
                i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square sm:aspect-[4/5]'
              }`}
            >
              <div className="relative w-full h-full overflow-hidden bg-black/40">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Ambient Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Overlaid Editorial Metadata */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                  <p className="text-sm sm:text-base font-bold text-white leading-snug mb-1">
                    {photo.caption}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span>{photo.location}</span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
