'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { sound } from '@/lib/sound';

interface StoryChapter {
  id: string;
  stepNumber: string;
  label: string;
  headline: string;
  narrative: string;
  highlightText: string;
  stat?: {
    value: string;
    label: string;
    sublabel: string;
  };
  image?: string;
  imageCaption?: string;
}

const chapters: StoryChapter[] = [
  {
    id: 'observation',
    stepNumber: '01',
    label: 'THE REALITY',
    headline: 'LAGOS STREETS TAUGHT ME MORE THAN SILICON VALLEY.',
    narrative:
      'In 2022, walking through markets across Lagos made the reality painfully obvious. Merchants were moving millions of Naira weekly, yet tracking everything in torn exercise notebooks, losing customers to POS network downtime, and struggling with basic inventory across stores.',
    highlightText: '“The problems in African commerce are not theoretical. They are physical, expensive, and happening right in front of you.”',
    image: '/images/winner/winner-navy.png',
    imageCaption: 'Winner in Lagos • Observing merchant workflows firsthand.',
  },
  {
    id: 'build',
    stepNumber: '02',
    label: 'THE MISSION',
    headline: 'BUILDING TOOLS FOR HOW AFRICA ACTUALLY OPERATES.',
    narrative:
      'Instead of building Silicon Valley clones that collapse under local realities, I set out to build software engineered for African business constraints: zero-lag checkout, WhatsApp receipt integrations, and multi-location control that works even when networks crawl.',
    highlightText: '“Software in Africa must solve boring, expensive problems, or merchants will simply not pay for it.”',
    stat: {
      value: '3',
      label: 'Core Platforms Shipped',
      sublabel: 'Nile (Commerce OS), Sena (Hospitality), Booq (Mobile POS)',
    },
  },
  {
    id: 'numbers',
    stepNumber: '03',
    label: 'THE SCALE',
    headline: 'REAL VOLUME. REAL BUSINESSES. REAL RESULTS.',
    narrative:
      'Over the last two years, software built by our team has powered everyday commerce across retail stores, restaurants, fashion brands, and service businesses from Lagos to other African hubs.',
    highlightText: '“When software works, merchants do not need to be convinced. They simply run their entire livelihood through it.”',
    stat: {
      value: '₦200M+',
      label: 'Merchant Order Value Processed',
      sublabel: 'Across 1,500+ active businesses in Nigeria and partner corridors',
    },
  },
  {
    id: 'document',
    stepNumber: '04',
    label: 'THE BLUEPRINT',
    headline: 'BUILDING IN PUBLIC & RAISING A FAMILY.',
    narrative:
      'I document the mistakes, the unit economics, the marketing experiments, and the real friction of building technology in Africa. Building in public creates a living playbook so the next African kid does not start from zero. And doing it as a father makes every hour count.',
    highlightText: '“I build businesses to solve problems today. I document the journey so the next generation starts five steps ahead.”',
    image: '/images/winner/winner-personal.jpg',
    imageCaption: 'Winner with his son • Fatherhood brings clarity and urgency.',
    stat: {
      value: '73',
      label: 'Tabs Currently Open',
      sublabel: 'A perpetual state of curiosity, research, and obsession.',
    },
  },
];

export function StoryWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);

  const chapter = chapters[activeStep];

  const handleNext = () => {
    sound.playClick();
    setActiveStep((prev) => (prev + 1) % chapters.length);
  };

  const handlePrev = () => {
    sound.playClick();
    setActiveStep((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (
    <section id="story" className="py-24 md:py-36 border-t border-black/5 dark:border-white/10 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                01 / THE STORY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.92]">
              HOW WE GOT HERE.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mr-2">
              CHAPTER {chapter.stepNumber} / 04
            </span>
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="p-3 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] text-neutral-800 dark:text-neutral-200 disabled:opacity-30 hover:border-black/30 dark:hover:border-white/30 transition-all cursor-pointer"
              aria-label="Previous chapter"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold transition-all hover:opacity-90 flex items-center gap-2 cursor-pointer shadow-sm"
              aria-label="Next chapter"
            >
              <span>{activeStep === chapters.length - 1 ? 'RESTART' : 'NEXT CHAPTER'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Chapter Stepper Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 border-b border-black/5 dark:border-white/10 pb-4">
          {chapters.map((c, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setActiveStep(index);
                }}
                className={`text-left p-3.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-black/[0.02] dark:bg-white/[0.02] text-neutral-600 dark:text-neutral-400 hover:bg-black/[0.05] dark:hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between mb-1 font-mono text-[10px] uppercase tracking-widest">
                  <span>CHAPTER {c.stepNumber}</span>
                  {isActive && <span className="font-bold">ACTIVE</span>}
                </div>
                <div className="font-bold text-xs sm:text-sm tracking-tight truncate">
                  {c.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Narrative & Quote */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block font-bold">
                  {chapter.label}
                </span>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
                  {chapter.headline}
                </h3>

                <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                  {chapter.narrative}
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/10">
                  <p className="text-sm sm:text-base font-medium italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    {chapter.highlightText}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Proof / Photo / Metric */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {chapter.stat && (
                  <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-black/60 border border-black/5 dark:border-white/10 shadow-sm mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-3 font-semibold">
                      VERIFIED IMPACT
                    </span>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
                      {chapter.stat.value}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {chapter.stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      {chapter.stat.sublabel}
                    </div>
                  </div>
                )}

                {chapter.image && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={chapter.image}
                      alt={chapter.headline}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    {chapter.imageCaption && (
                      <div className="absolute bottom-0 inset-x-0 p-3 bg-black/75 text-[11px] font-mono text-white/90">
                        {chapter.imageCaption}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
