'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { sound } from '@/lib/sound';

interface DimensionProfile {
  id: 'founder' | 'creator' | 'father';
  label: string;
  tagline: string;
  image: string;
  caption: string;
  role: string;
}

const dimensions: DimensionProfile[] = [
  {
    id: 'founder',
    label: '01 / THE FOUNDER',
    tagline: 'BUILDING FOR AFRICAN MERCHANTS',
    image: '/images/winner/winner-hero.png',
    caption: 'Founder of Nile, Sena & Booq. Operating from Lagos.',
    role: 'Nile • Sena • Booq',
  },
  {
    id: 'creator',
    label: '02 / THE CREATOR',
    tagline: 'DOCUMENTING BUSINESS & SCALE',
    image: '/images/winner/winner-creator.jpg',
    caption: 'Creator breaking down tech, marketing, and distribution.',
    role: 'Media & Systems',
  },
  {
    id: 'father',
    label: '03 / THE HUMAN',
    tagline: 'FATHERHOOD & PURPOSE',
    image: '/images/winner/winner-personal.jpg',
    caption: 'Software is the vehicle. Family is the anchor.',
    role: 'Life Outside Tech',
  },
];

export function Hero() {
  const [activeDimension, setActiveDimension] = useState<DimensionProfile>(dimensions[0]);
  const [lagosTime, setLagosTime] = useState('18:21 WAT');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLagosTime(`${new Intl.DateTimeFormat('en-GB', options).format(now)} WAT`);
    };

    updateTime();
    const clockTimer = setInterval(updateTime, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[var(--background)]">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-10 opacity-40 dark:opacity-70" />

      {/* Top Meta Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>LAGOS, NIGERIA</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-neutral-400">LOCAL:</span>
          <span className="font-bold text-neutral-900 dark:text-neutral-100">{lagosTime}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-grow py-6">
        {/* Left Column: Core Identity & Narrative Hook */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Active Dimension Tag */}
          <div className="mb-4">
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400 font-bold block">
              ✦ {activeDimension.tagline}
            </span>
          </div>

          {/* Primary Statement */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase tracking-tighter leading-[0.88] text-neutral-900 dark:text-neutral-50 mb-8 select-none">
            I BUILD.<br />
            I CREATE.<br />
            <span className="text-neutral-400 dark:text-neutral-500">I DOCUMENT IT.</span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed font-light mb-8">
            I&apos;m <strong className="font-semibold text-neutral-900 dark:text-white">Winner Oyekunle</strong>. Building technology companies for African businesses, creating culture online, and documenting the journey from Lagos to the world.
          </p>

          {/* Dimension Interactive Switcher */}
          <div className="mb-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-3">
              SELECT DIMENSION
            </span>
            <div className="flex flex-wrap gap-2">
              {dimensions.map((dim) => {
                const isSelected = activeDimension.id === dim.id;
                return (
                  <button
                    key={dim.id}
                    onClick={() => {
                      sound.playClick();
                      setActiveDimension(dim);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent font-bold shadow-sm'
                        : 'bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                    }`}
                  >
                    {dim.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 text-xs font-mono tracking-wider uppercase">
            <a
              href="#story"
              onClick={() => sound.playClick()}
              className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-black text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-bold transition-all shadow-md flex items-center justify-center gap-2 group"
              data-cursor="STORY"
            >
              <span>EXPERIENCE THE STORY</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <Link
              href="/#work"
              onClick={() => sound.playClick()}
              className="px-6 py-4 rounded-xl bg-black/[0.03] hover:bg-black/[0.06] dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
              data-cursor="WORK"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dynamic Portrait Switcher */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDimension.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeDimension.image}
                  alt={`Winner Oyekunle - ${activeDimension.tagline}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 340px, 380px"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Card Meta */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300 block mb-1">
                    {activeDimension.role}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-snug drop-shadow-sm text-neutral-100">
                    {activeDimension.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-3 text-right">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              ✦ CLICK BUTTONS ON LEFT TO SWITCH DIMENSIONS
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Live Ticker */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <span>●</span>
          <span>SHIPPING: <strong className="text-neutral-900 dark:text-neutral-100">NILE</strong> (COMMERCE) • <strong className="text-neutral-900 dark:text-neutral-100">SENA</strong> (HOSPITALITY) • <strong className="text-neutral-900 dark:text-neutral-100">BOOQ</strong> (POS)</span>
        </div>

        <a
          href="#story"
          className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
        >
          <span>BEGIN STORY</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
