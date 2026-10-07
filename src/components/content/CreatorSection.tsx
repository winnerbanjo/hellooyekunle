'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { contentItems, ContentItem, socialLinks } from '@/content/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentCard } from './ContentCard';
import { VideoModal } from './VideoModal';
import { sound } from '@/lib/sound';

export function CreatorSection() {
  const [selectedVideo, setSelectedVideo] = useState<ContentItem | null>(null);

  // Take top 6 items for homepage
  const featured = contentItems.slice(0, 6);

  return (
    <section id="content" className="py-24 md:py-36 border-t border-white/5 relative bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            label="02 / THE CREATOR"
            title="I TALK ABOUT WHAT I'M ACTUALLY DOING."
            subtitle="Business. Marketing. Products. Startups. Africa. Founder life. And occasionally whatever is on my mind that day."
            className="mb-0"
            badgeColor="#EC4899"
          />

          <Link
            href="/content"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-all self-start md:self-end"
            data-cursor="ALL VIDEOS"
          >
            <span>WATCH EVERYTHING</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Featured Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onSelect={(selected) => setSelectedVideo(selected)}
            />
          ))}
        </div>

        {/* Social Pipeline Channels */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D] block mb-1">
              FOLLOW THE JOURNEY
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Direct Social Distribution
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-red-600/20 hover:text-red-400 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#999999] transition-all"
            >
              YouTube ↗
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-cyan-600/20 hover:text-cyan-400 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#999999] transition-all"
            >
              TikTok ↗
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#999999] transition-all"
            >
              Instagram ↗
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#999999] transition-all"
            >
              X ↗
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-sky-600/20 hover:text-sky-400 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#999999] transition-all"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <VideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
