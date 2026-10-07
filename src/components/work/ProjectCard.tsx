'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Company } from '@/content/companies';
import { sound } from '@/lib/sound';

interface ProjectCardProps {
  company: Company;
  index: number;
}

export function ProjectCard({ company, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0D0D10] border border-white/10 hover:border-white/20 transition-all relative overflow-hidden group shadow-2xl"
    >
      {/* Background Accent Radiance on Hover */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: company.accentColor }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text & Specs */}
        <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
          {/* Header Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold"
              style={{ backgroundColor: `${company.accentColor}25`, color: company.accentColor }}
            >
              {company.status}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#666677]">
              {company.role} • {company.location}
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F3EE] mb-3">
            {company.name}
          </h3>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#B8FF3D] font-bold mb-6">
            {company.headline}
          </p>

          <p className="text-base sm:text-lg text-[#999999] font-light leading-relaxed mb-8">
            {company.description}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10 py-6 border-y border-white/10">
            {company.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx}>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#F5F3EE]">
                  {m.value}
                </span>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <Link
              href={`/work/${company.slug}`}
              onClick={() => sound.playClick()}
              className="px-6 py-3.5 rounded-xl bg-white text-black hover:bg-[#315BFF] hover:text-white font-bold transition-all flex items-center gap-2 group/btn"
              data-cursor="CASE STUDY"
            >
              <span>Explore {company.name}</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F3EE] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              data-cursor="VISIT ↗"
            >
              <span>{company.externalCta}</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase Panel */}
        <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#14141A] shadow-xl group-hover:border-white/25 transition-all">
            <Image
              src={company.heroImage}
              alt={`${company.name} interface visual`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
