'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const lifeVignettes = [
  {
    title: 'Automotive & Movement',
    subtitle: 'Clear roads at 6:00 AM on the Lekki-Ikoyi link bridge.',
    image: '/images/lagos/lagos-night.svg',
    tag: 'Cars & Lagos',
    span: 'lg:col-span-8'
  },
  {
    title: 'Hospitality Architecture',
    subtitle: 'Studying boutique hotel interior design and guest flow in person.',
    image: '/images/sena/sena-hospitality.svg',
    tag: 'Hotels & Design',
    span: 'lg:col-span-4'
  },
  {
    title: 'Late Night Workspace',
    subtitle: 'Terminal, Figma, coffee, and unreasonable curiosity.',
    image: '/images/life/life-workspace.svg',
    tag: 'Studio',
    span: 'lg:col-span-4'
  },
  {
    title: 'Cross-Border Exploration',
    subtitle: 'Between Accra, Nairobi, London and Lagos. Learning market dynamics across borders.',
    image: '/images/life/life-travel.svg',
    tag: 'Travel & Transit',
    span: 'lg:col-span-8'
  }
];

export function LifeSection() {
  return (
    <section id="life" className="py-24 md:py-36 border-t border-white/5 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="05 / LIFE"
          title="I OCCASIONALLY LEAVE MY LAPTOP."
          subtitle="Cars. Hotels. Travel. Design. Fashion. Food. Lagos. Random things I like."
          badgeColor="#F43F5E"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {lifeVignettes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${item.span} relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/15 inline-block mb-3">
                  {item.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light max-w-lg">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
