'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { sound } from '@/lib/sound';
import { companies } from '@/content/companies';

export function ProductConsole() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

  const company = companies[activeCompanyIndex];

  return (
    <section id="work" className="py-24 md:py-36 border-t border-black/5 dark:border-white/10 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                02 / THE BUILDER
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.92]">
              WHAT I&apos;M BUILDING.
            </h2>
          </div>

          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
            Software built for African businesses to solve expensive, slow, and frustrating operational bottlenecks.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-black/5 dark:border-white/10 pb-4">
          {companies.map((c, index) => {
            const isSelected = activeCompanyIndex === index;
            return (
              <button
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setActiveCompanyIndex(index);
                }}
                className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent shadow-sm'
                    : 'bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                <span>{c.name}</span>
                <span className="opacity-60 ml-2 font-normal font-sans">({c.role})</span>
              </button>
            );
          })}
        </div>

        {/* Product Console Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Product Information */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-black/[0.05] dark:bg-white/[0.1] text-neutral-800 dark:text-neutral-200">
                    {company.status}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    {company.role} • {company.year}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
                  {company.name}
                </h3>

                <p className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                  {company.tagline}
                </p>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {company.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                  {company.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="text-xl sm:text-2xl font-black font-mono text-neutral-900 dark:text-neutral-100 block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-6 flex flex-wrap items-center gap-4 text-xs font-mono tracking-wider uppercase font-bold">
                  <Link
                    href={`/work/${company.slug}`}
                    onClick={() => sound.playClick()}
                    className="px-6 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {company.websiteUrl && (
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2"
                    >
                      <span>VISIT WEBSITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Mockup / Interface */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 bg-neutral-900 shadow-2xl">
                  <Image
                    src={company.heroImage}
                    alt={`${company.name} interface preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                    <span>{company.name} OS</span>
                    <span>PRODUCTION ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
